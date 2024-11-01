

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/components/StatCard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C1x4P1kp.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Bcd4Swig.js"];
export const stylesheets = ["_app/immutable/assets/4.0NyJTdo6.css"];
export const fonts = [];
