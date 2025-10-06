
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
		Asset(): "/favicon.png" | "/images/profile/profile_photo.jpg" | "/images/projects/urbanmart.png" | "/resume.pdf" | string & {};
	}
}