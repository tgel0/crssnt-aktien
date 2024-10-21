

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/StatCard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.0pHwZCFC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CX1coe_r.js"];
export const stylesheets = ["_app/immutable/assets/_page.ga53zvmt.css"];
export const fonts = [];
