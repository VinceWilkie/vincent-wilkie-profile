"use client"

import { useEffect, useRef } from "react"

interface MatrixRainProps {
    opacity?: number
    distortion?: boolean
}

const CHARS = `アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`
const FONT_SIZE = 14
const COLUMN_GAP = FONT_SIZE
const DROP_SPEED_MIN = 0.01
const DROP_SPEED_MAX = 2
const DISTORTION_RADIUS = 120
const DISTORTION_STRENGTH = 40
const HEAD_ALPHA = 0.9
const TRAIL_ALPHA = 0.25
const LENGTH_FACTOR = 3
const LENGTH_MULTIPLIER = 20

interface Column {
    x: number
    y: number
    speed: number
    chars: string[]
    length: number
}

function randomChar(): string {
    return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function createColumns(width: number, height: number): Column[] {
    const count = Math.floor(width / COLUMN_GAP)
    const columns: Column[] = []
    for (let i = 0; i < count; i++) {
        const length = Math.floor(Math.random() * LENGTH_MULTIPLIER) + LENGTH_FACTOR
        const chars: string[] = []
        for (let j = 0; j < length; j++) {
            chars.push(randomChar())
        }
        columns.push({
            x: i * COLUMN_GAP + COLUMN_GAP / 2,
            y: Math.random() * height * 2 - height,
            speed: DROP_SPEED_MIN + Math.random() * (DROP_SPEED_MAX - DROP_SPEED_MIN),
            chars,
            length,
        })
    }
    return columns
}

export default function MatrixRain({ opacity = 0.8, distortion = false }: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const columnsRef = useRef<Column[]>([])
    const mouseRef = useRef({ x: -9999, y: -9999 })
    const animRef = useRef<number>(0)
    const distortionRef = useRef(distortion)
    distortionRef.current = distortion

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener(`mousemove`, onMouseMove)
        return () => window.removeEventListener(`mousemove`, onMouseMove)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext(`2d`)
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            columnsRef.current = createColumns(canvas.width, canvas.height)
        }
        resize()

        const onResize = () => resize()
        window.addEventListener(`resize`, onResize)

        let lastTime = performance.now()

        const draw = (now: number) => {
            const delta = (now - lastTime) / 16.667
            lastTime = now

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.font = `${FONT_SIZE}px monospace`
            ctx.textAlign = `center`

            const useDistortion = distortionRef.current
            const mx = mouseRef.current.x
            const my = mouseRef.current.y

            for (const col of columnsRef.current) {
                for (let i = 0; i < col.chars.length; i++) {
                    const charY = col.y + i * FONT_SIZE
                    if (charY < -FONT_SIZE || charY > canvas.height + FONT_SIZE) continue

                    let drawX = col.x
                    let drawY = charY
                    let alpha = i === col.chars.length - 1 ? HEAD_ALPHA : TRAIL_ALPHA

                    if (useDistortion) {
                        const dx = drawX - mx
                        const dy = drawY - my
                        const dist = Math.sqrt(dx * dx + dy * dy)

                        if (dist < DISTORTION_RADIUS && dist > 0) {
                            const force = (1 - dist / DISTORTION_RADIUS) * DISTORTION_STRENGTH
                            const angle = Math.atan2(dy, dx)
                            drawX += Math.cos(angle) * force
                            drawY += Math.sin(angle) * force
                            alpha = Math.min(alpha + (1 - dist / DISTORTION_RADIUS) * 0.15, 0.35)
                        }
                    }

                    if (Math.random() < 0.02) {
                        col.chars[i] = randomChar()
                    }

                    ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`
                    ctx.fillText(col.chars[i], drawX, drawY)
                }

                col.y += col.speed * delta
                const totalHeight = col.length * FONT_SIZE
                if (col.y - totalHeight > canvas.height) {
                    col.y = -totalHeight - Math.random() * canvas.height * 0.5
                    col.speed = DROP_SPEED_MIN + Math.random() * (DROP_SPEED_MAX - DROP_SPEED_MIN)
                    for (let j = 0; j < col.chars.length; j++) {
                        col.chars[j] = randomChar()
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw)
        }

        animRef.current = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(animRef.current)
            window.removeEventListener(`resize`, onResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity }}
        />
    )
}
