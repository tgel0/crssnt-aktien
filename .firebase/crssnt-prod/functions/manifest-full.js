export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.CpjmlgEy.js","app":"_app/immutable/entry/app.CyyKPZMP.js","imports":["_app/immutable/entry/start.CpjmlgEy.js","_app/immutable/chunks/entry.Bjfn6wtW.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CyyKPZMP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CX1coe_r.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/DataList",
				pattern: /^\/DataList\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/StatCard",
				pattern: /^\/StatCard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
