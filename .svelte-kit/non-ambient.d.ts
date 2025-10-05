
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
		RouteId(): "/" | "/awards" | "/blog" | "/contact" | "/education" | "/experience" | "/projects" | "/skills" | "/videos";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/awards": Record<string, never>;
			"/blog": Record<string, never>;
			"/contact": Record<string, never>;
			"/education": Record<string, never>;
			"/experience": Record<string, never>;
			"/projects": Record<string, never>;
			"/skills": Record<string, never>;
			"/videos": Record<string, never>
		};
		Pathname(): "/" | "/awards" | "/awards/" | "/blog" | "/blog/" | "/contact" | "/contact/" | "/education" | "/education/" | "/experience" | "/experience/" | "/projects" | "/projects/" | "/skills" | "/skills/" | "/videos" | "/videos/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/CNAME" | "/ai_for_everyone.png" | "/bg.png" | "/brushstroke.png" | "/data_science_R.jpeg" | "/favicon.png" | "/giggle.gif" | "/global.css" | "/great-success.png" | "/hello.gif" | "/homelane.jpg" | "/images/profile/profile_photo.jpg" | "/images/projects/activity.jpg" | "/images/projects/cards.png" | "/images/projects/chatter.png" | "/images/projects/gourmet-food.png" | "/images/projects/lazyloader.gif" | "/images/projects/pubg.jpg" | "/images/projects/taskr.png" | "/images/skills/JupyterLogo.png" | "/images/skills/Rlogo.png" | "/images/skills/SagemakerLogo.png" | "/images/skills/bootstrap.jpg" | "/images/skills/css3Logo.jpg" | "/images/skills/gitHubLogo.png" | "/images/skills/herokuLogo.png" | "/images/skills/html5.png" | "/images/skills/jqueryLogo.gif" | "/images/skills/nodeJsLogo.png" | "/images/skills/pythonLogo.jpeg" | "/images/skills/reactLogo.png" | "/images/skills/sass.png" | "/images/skills/svelteLogo.png" | "/images/skills/svelteSapper.png" | "/images/skills/vuejsLogo.png" | "/images/skills/webpackLogo.png" | "/logo-192.png" | "/logo-512.png" | "/manifest.json" | "/medium_logo.png" | "/olxapp.png" | "/sveltesapper.jpeg" | "/udacity_ml.png" | string & {};
	}
}