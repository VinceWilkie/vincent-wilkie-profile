import ConsoleProfile from "@/components/ConsoleProfile"

// This design now ships as the live homepage; the lab renders the same
// component so the two can never drift apart.
export default function ConsolePage() {
    return <ConsoleProfile showLabLink />
}
