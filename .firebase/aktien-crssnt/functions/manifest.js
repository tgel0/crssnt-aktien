export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["error.html"]),
	mimeTypes: {".html":"text/html"},
	_: {
		client: {"start":"_app/immutable/entry/start.KME_RdRv.js","app":"_app/immutable/entry/app.B-HFi9sv.js","imports":["_app/immutable/entry/start.KME_RdRv.js","_app/immutable/chunks/entry.C1-jt-Ik.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.B-HFi9sv.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Bcd4Swig.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
				id: "/components/DataList",
				pattern: /^\/components\/DataList\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/components/StatCard",
				pattern: /^\/components\/StatCard\/?$/,
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
