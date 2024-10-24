

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Q0SYdXLu.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Bcd4Swig.js","_app/immutable/chunks/entry.C_Yr-1J6.js"];
export const stylesheets = [];
export const fonts = [];
