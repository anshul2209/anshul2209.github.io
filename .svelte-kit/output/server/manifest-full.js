export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CNAME","ai_for_everyone.png","bg.png","brushstroke.png","create_favicon.py","data_science_R.jpeg","favicon.png","favicon.svg","favicon_temp.jpg","generate_favicon.html","giggle.gif","global.css","great-success.png","hello.gif","homelane.jpg","images/profile/profile_photo.jpg","images/projects/activity.jpg","images/projects/cards.png","images/projects/chatter.png","images/projects/gourmet-food.png","images/projects/lazyloader.gif","images/projects/pubg.jpg","images/projects/taskr.png","images/skills/JupyterLogo.png","images/skills/Rlogo.png","images/skills/SagemakerLogo.png","images/skills/bootstrap.jpg","images/skills/css3Logo.jpg","images/skills/gitHubLogo.png","images/skills/herokuLogo.png","images/skills/html5.png","images/skills/jqueryLogo.gif","images/skills/nodeJsLogo.png","images/skills/pythonLogo.jpeg","images/skills/reactLogo.png","images/skills/sass.png","images/skills/svelteLogo.png","images/skills/svelteSapper.png","images/skills/vuejsLogo.png","images/skills/webpackLogo.png","logo-192.png","logo-512.png","manifest.json","medium_logo.png","olxapp.png","resume.pdf","simple_favicon.html","sveltesapper.jpeg","udacity_ml.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".jpg":"image/jpeg",".html":"text/html",".gif":"image/gif",".css":"text/css",".json":"application/json",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.Djq6MZ2j.js",app:"_app/immutable/entry/app.C4fuvM9x.js",imports:["_app/immutable/entry/start.Djq6MZ2j.js","_app/immutable/chunks/GtmGPhGz.js","_app/immutable/chunks/CV-qT96p.js","_app/immutable/entry/app.C4fuvM9x.js","_app/immutable/chunks/CV-qT96p.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
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
				id: "/education",
				pattern: /^\/education\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/videos",
				pattern: /^\/videos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
