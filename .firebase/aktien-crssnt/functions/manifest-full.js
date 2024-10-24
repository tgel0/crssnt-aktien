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
		client: {"start":"_app/immutable/entry/start.K6jGepA6.js","app":"_app/immutable/entry/app.BB6O4iVW.js","imports":["_app/immutable/entry/start.K6jGepA6.js","_app/immutable/chunks/entry.C_Yr-1J6.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BB6O4iVW.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Bcd4Swig.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
			},
			{
				id: "/api/stocks/[symbol]",
				pattern: /^\/api\/stocks\/([^/]+?)\/?$/,
				params: [{"name":"symbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/stocks/_symbol_/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
