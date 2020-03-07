<script>
	import { createEventDispatcher } from 'svelte';
	import track from '../../helpers/tracking.js';

	export let segment;
	const menuItems = [
		{ segment: undefined, 'label': 'About', href: '.', icon: 'fa fa-user'},
		{ segment: 'projects', 'label': 'Projects', href: 'projects', icon: 'fa fa-laptop' },
		{ segment: 'videos', 'label': 'Videos', href: 'videos', icon: 'fa fa-video-camera' },
		{ segment: 'awards', 'label': 'Awards', href: 'awards', icon: 'fa fa-star-o' },
		{ segment: 'skills', 'label': 'Skills', href: 'skills', icon: 'fa fa-bar-chart' },
		// { segment: 'experience', 'label': 'Experience', href: 'experience' },
		{ segment: 'contact', 'label': 'Contact', href: 'contact', icon: 'fa fa-phone' },
		{ segment: 'blog', 'label': 'Blog Posts', href: 'blog', icon: 'fa fa-rss-square' }
	]

	function handleNavigation(event) {
		const label = event.target.id;
		if(label) {
			track('click', 'navigation', label);
		}
	}
</script>

<style type="text/sass">
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		background: #fff;
		display: block;
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		z-index: 1;
		text-align: center;
		ul {
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			padding: 0 2em;
			&:after{
				content: '';
				display: block;
				clear: both;
			}
		}
		.logo{
			padding: 10px;
			background: #fafafa;
			.name {
				font-size: 24px;
				color: #008073;
				font-weight: 300;

			}
			.title{
				font-size: 16px;
				font-weight: 100;

			}
		}
		li {
			display: block;
			float: left;
			display: flex;
			align-items: center;
			i{
				color: #008073;
				margin-right: 10px;
				font-size: 24px;
			}
			.selected {
				position: relative;
				display: inline-block;
				&:after{
					position: absolute;
					content: '';
					width: calc(100% - 1em);
					height: 2px;
					background-color: rgb(255,62,0);
					display: block;
					bottom: -1px;
				}
			}
			a {
				text-decoration: none;
				padding: 1em 0.5em;
				display: block;
			}
		}
	}
</style>
<nav>
	<div class="logo">
		<h2 class="name">Anshul <br>Bansal</h2>
		<h4 class="title">Full Stack Developer</h4>
	</div>
	<ul on:click={handleNavigation}>
		{#each menuItems as item}
			<li>
				<i class={item.icon} aria-hidden="true"></i>
				<a class:selected='{segment === item.segment}' id={item.label} href={item.href}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>
