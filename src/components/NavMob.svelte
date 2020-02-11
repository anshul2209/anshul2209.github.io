<script>
	import { createEventDispatcher } from 'svelte';

	export let segment;
	export let isVisible

	const dispatch = createEventDispatcher();
	const menuItems = [
		{ segment: undefined, 'label': 'Home', href: '.' },
		{ segment: 'about', 'label': 'About', href: 'about' },
		{ segment: 'awards', 'label': 'Awards', href: 'awards' },
		{ segment: 'skills', 'label': 'Skills', href: 'skills' },
		{ segment: 'resume', 'label': 'Resume', href: 'resume' },
		{ segment: 'contact', 'label': 'Contact', href: 'contact' },
	]

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

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 2em;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		background: #fff;
		display: block;
		position: fixed;
		top: 0px;
		bottom: 0px;
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
	}
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	.visible{
		z-index: 2;
		left: 0px;
		transition-property: all;
		transition-duration: .5s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}
	.hidden{
		left: -150px;
		transition-property: all;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}
	.label{
		flex: 1;
		text-align: center;
	}
</style>
<nav class="{ isVisible ? 'visible': 'hidden'}" on:click={handleTabSelect}>
	<ul>
		{#each menuItems as item}
			<li><a class:selected='{segment === item.segment}' id={item.label} href={item.href}>{item.label}</a></li>
		{/each}
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>Blog</a></li>
	</ul>
</nav>
<div class="nav_bar" style="z-index: {isVisible ? 1 : 2}">
	<i class="fa fa-bars" on:click={handleToggle}></i>
	<div class="label">{selectedTab}</div>
</div>
