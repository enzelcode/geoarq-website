export const easing = {
  out: "power3.out",
  in: "power3.in",
  inOut: "power3.inOut",
  expo: "expo.out",
  expoIn: "expo.in",
  expoInOut: "expo.inOut",
  back: "back.out(1.6)",
  sineInOut: "sine.inOut",
} as const;

export const duration = {
  micro: 0.25,
  fast: 0.45,
  base: 0.7,
  slow: 1.1,
  epic: 1.6,
} as const;

export const stagger = {
  tight: 0.04,
  base: 0.08,
  loose: 0.14,
} as const;

export const cssEasing = {
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOut: "cubic-bezier(0.83, 0, 0.17, 1)",
} as const;

export const z = {
  base: 0,
  decor: 10,
  content: 20,
  navBg: 40,
  nav: 50,
  drawer: 60,
  overlay: 70,
  modal: 80,
} as const;
