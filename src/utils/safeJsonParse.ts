import { ParseResult } from "@/types/TypeHelpers";

export const safeJsonParse = <T>(guard: (o: T) => o is T) => (text: string): ParseResult<T> => {
  const parsed = JSON.parse(text);

  return guard(parsed) ? { parsed, hasError: false } : { hasError: true };
};
