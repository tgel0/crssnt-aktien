

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/components/DataList/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B9VcNNFJ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Bcd4Swig.js"];
export const stylesheets = ["_app/immutable/assets/3.DV6JILv0.css"];
export const fonts = [];
