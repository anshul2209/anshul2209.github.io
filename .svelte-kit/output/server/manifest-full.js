export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CNAME","activity.jpg","ai_for_everyone.png","bg.png","brushstroke.png","cards.png","chatter.png","data_science_R.jpeg","favicon.png","giggle.gif","global.css","gourmet-food.png","great-success.png","hello.gif","homelane.jpg","lazyloader.gif","logo-192.png","logo-512.png","manifest.json","medium_logo.png","olxapp.png","profile_photo.jpg","pubg.jpg","skillsLogo/JupyterLogo.png","skillsLogo/Rlogo.png","skillsLogo/SagemakerLogo.png","skillsLogo/bootstrap.jpg","skillsLogo/css3Logo.jpg","skillsLogo/gitHubLogo.png","skillsLogo/herokuLogo.png","skillsLogo/html5.png","skillsLogo/jqueryLogo.gif","skillsLogo/nodeJsLogo.png","skillsLogo/pythonLogo.jpeg","skillsLogo/reactLogo.png","skillsLogo/sass.png","skillsLogo/svelteLogo.png","skillsLogo/svelteSapper.png","skillsLogo/vuejsLogo.png","skillsLogo/webpackLogo.png","sveltesapper.jpeg","taskr.png","udacity_ml.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".gif":"image/gif",".css":"text/css",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.COyQugQ7.js",app:"_app/immutable/entry/app.CnSRRZdx.js",imports:["_app/immutable/entry/start.COyQugQ7.js","_app/immutable/chunks/Bzcy1Vw3.js","_app/immutable/chunks/D7e5fDsm.js","_app/immutable/chunks/DTv-0pq7.js","_app/immutable/entry/app.CnSRRZdx.js","_app/immutable/chunks/D7e5fDsm.js","_app/immutable/chunks/DTv-0pq7.js","_app/immutable/chunks/9UegHNTc.js","_app/immutable/chunks/DjZqoXsM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/awards",
				pattern: /^\/awards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/videos",
				pattern: /^\/videos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
