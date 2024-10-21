

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/DataList/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Oo8Q09_V.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CX1coe_r.js"];
export const stylesheets = [];
export const fonts = [];
