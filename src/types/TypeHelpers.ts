import Model from "@/models/Model";

export type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type JSONProps<T> = {
  [K in NonFunctionPropertyNames<T>]: T[K] extends object ? JSONProps<T[K]> : T[K];
}

export type ParseResult<T> =
  | { hasError: false; error?: undefined; parsed: T }
  | { hasError: true; error?: unknown; parsed?: undefined };
