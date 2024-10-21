

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DTEM7sFz.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CX1coe_r.js","_app/immutable/chunks/entry.YIi9MnFq.js"];
export const stylesheets = [];
export const fonts = [];
