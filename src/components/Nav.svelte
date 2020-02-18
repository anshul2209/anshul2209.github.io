<script>
	import { createEventDispatcher } from 'svelte';

	export let segment;
	const menuItems = [
		{ segment: undefined, 'label': 'Home', href: '.', icon: 'fa fa-home'},
		{ segment: 'projects', 'label': 'Projects', href: 'projects', icon: 'fa fa-laptop' },
		{ segment: 'awards', 'label': 'Awards', href: 'awards', icon: 'fa fa-star-o' },
		{ segment: 'skills', 'label': 'Skills', href: 'skills', icon: 'fa fa-bar-chart' },
		// { segment: 'experience', 'label': 'Experience', href: 'experience' },
		{ segment: 'contact', 'label': 'Contact', href: 'contact', icon: 'fa fa-phone' }
	]
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
		left: 0px;
		z-index: 1;
		padding-top: 80px;
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
		display: flex;
		align-items: center;
	}
	li i{
		color: #008073;
		margin-right: 10px;
		font-size: 24px;
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
</style>
<nav>
	<ul>
		{#each menuItems as item}
			<li>
				<i class={item.icon} aria-hidden="true"></i>
				<a class:selected='{segment === item.segment}' id={item.label} href={item.href}>{item.label}</a>
			</li>
		{/each}
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>Blog</a></li>
	</ul>
</nav>
