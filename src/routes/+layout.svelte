<script>
	import Nav from '../lib/components/Nav.svelte';
	import NavMob from '../lib/components/NavMob.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import '../app.css';

	let isVisible = false;
	let isMobile = false;

	function toggleNavBar(event) {
		isVisible = !isVisible;
	}

	function checkScreenSize() {
		isMobile = window.innerWidth <= 425;
	}

	onMount(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	});
</script>

<style lang="scss">
	main {
		position: relative;
		/* max-width: 56em; */
		background: transparent;
		/* padding: 2em; */
		/* margin: 0 auto; */
		box-sizing: border-box;
		overflow: auto;
		margin-bottom: 44px;
	}
	@media (max-width: 425px) {
		main{
			padding-top: 60px;
		}
	}
	.overlay{
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		height: 120vh;
		background-color: rgba(0,0,0,0.5);
		z-index: 1;
	}
</style>

{#if !isMobile}
	<Nav segment={$page.route.id} />
{/if}

{#if isMobile}
	<NavMob segment={$page.route.id} {isVisible} on:toggle={toggleNavBar} />
{/if}
<div class="{isVisible ? 'overlay' :''}" on:click={toggleNavBar} on:keydown={(e) => e.key === 'Escape' && toggleNavBar()} role="button" tabindex="0" aria-label="Close navigation menu"></div>
<main style="margin-left: {!isMobile ? '176px' : '0px'};">
	<slot />
</main>
