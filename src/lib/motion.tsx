import React, { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function AnimatePresence({ children }: { children: React.ReactNode; mode?: string; initial?: boolean }) {
  return <>{children}</>;
}

export function LazyMotion({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const domAnimation = {};

export function useAnimation() {
  return {
    start: () => Promise.resolve(),
    stop: () => {},
    set: () => {},
  };
}

export function useInView() {
  return true;
}

export function useScroll() {
  return {
    scrollX: { get: () => 0 },
    scrollY: { get: () => 0 },
    scrollXProgress: { get: () => 0 },
    scrollYProgress: { get: () => 0 },
  };
}

export function useTransform(value: any, fnOrRange: any, outputRange?: any) {
  if (typeof fnOrRange === "function") {
    return fnOrRange(value?.get ? value.get() : value);
  }
  return outputRange ? outputRange[0] : 0;
}

export function useSpring(value: any) {
  return value;
}

function createMotionComponent<T extends keyof HTMLElementTagNameMap>(tag: T) {
  const Component = React.forwardRef<any, any>(
    (
      {
        initial: _initial,
        animate: _animate,
        exit: _exit,
        transition: _transition,
        whileHover: _whileHover,
        whileInView: _whileInView,
        viewport: _viewport,
        layout: _layout,
        children,
        className,
        style,
        ...props
      },
      ref
    ) => {
      return React.createElement(
        tag,
        {
          ref,
          className,
          style,
          ...props,
        },
        children
      );
    }
  );
  Component.displayName = `motion.${tag}`;
  return Component;
}

const componentCache = new Map<string, any>();

export const motion = new Proxy(
  {},
  {
    get(_target, prop: string) {
      if (prop === "create") {
        return (Component: any) => Component;
      }
      if (!componentCache.has(prop)) {
        componentCache.set(prop, createMotionComponent(prop as any));
      }
      return componentCache.get(prop);
    },
  }
) as any;

export const m = motion;
