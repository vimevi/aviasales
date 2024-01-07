export function cheapest() {
  return { type: "filter/cheapest" };
}

export function shortest() {
  return { type: "filter/shortest" };
}

export function resetFilter() {
  return { type: "filter/reset" };
}
