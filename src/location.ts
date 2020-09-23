import { writable } from "svelte/store";

// Tracks where the user is at on the page to
// update nav and application smoothly and properly.
export const linkName = writable("");
