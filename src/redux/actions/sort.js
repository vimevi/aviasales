export const CHEAPEST_FILTER = "filter/cheapest";
export const SHORTEST_FILTER = "filter/shortest";
export const RESET_FILTER = "filter/reset";

export function cheapest() {
  return { type: CHEAPEST_FILTER };
}

export function shortest() {
  return { type: SHORTEST_FILTER };
}

export function resetFilter() {
  return { type: RESET_FILTER };
}
