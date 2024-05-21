type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, K extends keyof AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): T {
  return {
    ...top,
    ...bottom,
  } as T;
}
