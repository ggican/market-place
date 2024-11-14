import { useEffect, useLayoutEffect } from "react";

/**
 * React currently throws a warning when using `useLayoutEffect` on the server.
 * To get around it, this hook conditionally `useEffect` on the server (no-op) and
 * `useLayoutEffect` in the browser
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
