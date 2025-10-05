
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/awards" | "/blog" | "/contact" | "/experience" | "/projects" | "/skills" | "/videos";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/awards": Record<string, never>;
			"/blog": Record<string, never>;
			"/contact": Record<string, never>;
			"/experience": Record<string, never>;
			"/projects": Record<string, never>;
			"/skills": Record<string, never>;
			"/videos": Record<string, never>
		};
		Pathname(): "/" | "/awards" | "/awards/" | "/blog" | "/blog/" | "/contact" | "/contact/" | "/experience" | "/experience/" | "/projects" | "/projects/" | "/skills" | "/skills/" | "/videos" | "/videos/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/CNAME" | "/activity.jpg" | "/ai_for_everyone.png" | "/bg.png" | "/brushstroke.png" | "/cards.png" | "/chatter.png" | "/data_science_R.jpeg" | "/favicon.png" | "/giggle.gif" | "/global.css" | "/gourmet-food.png" | "/great-success.png" | "/hello.gif" | "/homelane.jpg" | "/lazyloader.gif" | "/logo-192.png" | "/logo-512.png" | "/manifest.json" | "/medium_logo.png" | "/olxapp.png" | "/profile_photo.jpg" | "/pubg.jpg" | "/skillsLogo/JupyterLogo.png" | "/skillsLogo/Rlogo.png" | "/skillsLogo/SagemakerLogo.png" | "/skillsLogo/bootstrap.jpg" | "/skillsLogo/css3Logo.jpg" | "/skillsLogo/gitHubLogo.png" | "/skillsLogo/herokuLogo.png" | "/skillsLogo/html5.png" | "/skillsLogo/jqueryLogo.gif" | "/skillsLogo/nodeJsLogo.png" | "/skillsLogo/pythonLogo.jpeg" | "/skillsLogo/reactLogo.png" | "/skillsLogo/sass.png" | "/skillsLogo/svelteLogo.png" | "/skillsLogo/svelteSapper.png" | "/skillsLogo/vuejsLogo.png" | "/skillsLogo/webpackLogo.png" | "/sveltesapper.jpeg" | "/taskr.png" | "/udacity_ml.png" | string & {};
	}
}