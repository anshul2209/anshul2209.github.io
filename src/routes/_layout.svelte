<script>
	import Nav from '../components/Nav.svelte';
	import NavMob from '../components/NavMob.svelte';
	export let segment;

	let isVisible = false;
	function toggleNavBar(event) {
		isVisible = !isVisible;
	}
</script>

<style type="text/sass">
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
	.is-desktop{
		display: block;
	}
	.is-mobile{
		display: none;
	}
	@media (max-width: 425px) {
		main{
			padding-top: 60px;
		}
		.is-desktop{
			display: none;
		}
		.is-mobile{
			display: block;
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

<div class="is-desktop">
	<Nav {segment}/>
</div>
<div class="is-mobile">
	<NavMob {segment} isVisible={isVisible} on:toggle={toggleNavBar} />
</div>
<div class="{isVisible ? 'overlay' :''}" on:click={toggleNavBar}></div>
<main>
	<slot></slot>
</main>