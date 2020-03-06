<script>
	import { createEventDispatcher } from 'svelte';

	export let segment;
	export let isVisible

	const dispatch = createEventDispatcher();
	const menuItems = [
		{ segment: undefined, 'label': 'About', href: '.', icon: 'fa fa-user'},
		{ segment: 'projects', 'label': 'Projects', href: 'projects', icon: 'fa fa-laptop' },
		{ segment: 'videos', 'label': 'Videos', href: 'videos', icon: 'fa fa-video-camera' },
		{ segment: 'awards', 'label': 'Awards', href: 'awards', icon: 'fa fa-star-o' },
		{ segment: 'skills', 'label': 'Skills', href: 'skills', icon: 'fa fa-bar-chart' },
		// { segment: 'experience', 'label': 'Experience', href: 'experience' },
		{ segment: 'contact', 'label': 'Contact', href: 'contact', icon: 'fa fa-phone' },
		{ segment: 'blog', 'label': 'Blog Posts', href: 'blog', icon: 'fa fa-rss-square' }
	];

	let selectedTab = menuItems[0].label;
	function handleToggle() {
		dispatch('toggle');
	}
	function handleTabSelect() {
		if(event.target.id) {
			selectedTab = event.target.id
		}
		dispatch('toggle');
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
		text-align: center;
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
		ul {
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			padding: 0 2em;
			&:after {
				content: '';
				display: block;
				clear: both;
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
				a {
					text-decoration: none;
					padding: 1em 0.5em;
					display: block;
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
			}
		}
	}
	.visible{
		z-index: 2;
		left: 0px;
		transition-property: all;
		transition-duration: .5s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}
	.hidden{
		left: -180px;
		transition-property: all;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}
	.nav_bar{
		position: fixed;
		height: 60px;
		width: 100%;
		padding: 15px;
		font-size: 25px;
		box-sizing: border-box;
		background: white;
		display: flex;
		align-items: center;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		color: white;
		background-color: #008073;
		.label{
			flex: 1;
			text-align: center;
		}
	}	
</style>
<nav class="{ isVisible ? 'visible': 'hidden'}" on:click={handleTabSelect}>
	<div class="logo">
		<h2 class="name">Anshul Bansal</h2>
		<h4 class="title">Full Stack Developer</h4>
	</div>
	<ul>
		{#each menuItems as item}
			<li>
				<i class={item.icon} aria-hidden="true"></i>
				<a class:selected='{segment === item.segment}' id={item.label} href={item.href}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>
<div class="nav_bar" style="z-index: {isVisible ? 1 : 2}">
	<i class="fa fa-bars" on:click={handleToggle}></i>
	<div class="label">{selectedTab}</div>
</div>
