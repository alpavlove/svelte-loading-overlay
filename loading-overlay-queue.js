import { writable, derived } from "svelte/store";
import { nanoid } from "nanoid";

export const loadingOverlayQueue = writable([]);

export function showLoadingOverlay() {
  const newRequestId = nanoid();

  loadingOverlayQueue.update((currentValue) => [...currentValue, newRequestId]);

  return newRequestId;
}

export function hideLoadingOverlay(requestId) {
  loadingOverlayQueue.update((currentValue) =>
    currentValue.filter((item) => item !== requestId)
  );
}

export const isLoadingOverlayShown = derived(
  loadingOverlayQueue,
  (requests) => requests.length > 0
);
