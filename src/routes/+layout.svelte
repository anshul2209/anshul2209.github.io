<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { menuItems } from '../lib/data/navigation.js';
	import track from '../lib/helpers/tracking.js';
	import '../app.css';

	let isVisible = false;
	let isMobile = false;

	function toggleNavBar(event) {
		isVisible = !isVisible;
	}

	function checkScreenSize() {
		isMobile = window.innerWidth <= 768;
	}

	function handleNavigation(event) {
		const label = event.target.id;
		if(label) {
			track('click', 'navigation', label);
		}
	}

	onMount(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	});
</script>

<style lang="scss">
	.top-nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--color-primary);
		border-bottom: 1px solid var(--color-gray-600);
		z-index: 100;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}
	
	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-6);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
	}
	
	.logo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-decoration: none;
		color: var(--color-white);
		gap: 4px;
		
		.name {
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-medium);
			margin: 0;
			background: linear-gradient(90deg, #f42a8b 0%, #3b9ae3 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			line-height: 1.1;
			letter-spacing: -0.01em;
		}
		
		.title {
			font-size: var(--font-size-sm);
			color: var(--color-gray-300);
			font-weight: var(--font-weight-normal);
			margin: 0;
			line-height: 1;
			margin-top: 2px;
			letter-spacing: 0.02em;
		}
	}
	
	.nav-menu {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		list-style: none;
		margin: 0;
		padding: 0;
		
		li {
			margin: 0;
		}
		
		a {
			display: flex;
			align-items: center;
			gap: var(--space-2);
			padding: var(--space-2) var(--space-3);
			text-decoration: none;
			color: var(--color-gray-300);
			border-radius: var(--border-radius-sm);
			transition: all var(--transition-fast);
			font-weight: var(--font-weight-normal);
			font-size: var(--font-size-sm);
			
			&:hover {
				background: var(--color-platinum);
				color: var(--color-white);
			}
			
			&.selected {
				background: var(--color-primary);
				color: var(--color-white);
			}
			
			i {
				font-size: var(--font-size-base);
			}
		}
	}
	
	.mobile-menu-toggle {
		display: none;
		background: none;
		border: none;
		font-size: var(--font-size-xl);
		color: var(--color-gray-400);
		cursor: pointer;
		padding: var(--space-2);
		border-radius: var(--border-radius-md);
		transition: all var(--transition-normal);
		
		&:hover {
			background: var(--color-platinum);
			color: var(--color-white);
		}
	}
	
	.mobile-menu {
		position: fixed;
		top: 60px;
		left: 0;
		right: 0;
		background: var(--color-primary);
		border-bottom: 1px solid var(--color-gray-700);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
		z-index: 99;
		transform: translateY(-100%);
		transition: transform var(--transition-normal);
		
		&.visible {
			transform: translateY(0);
		}
		
		ul {
			list-style: none;
			margin: 0;
			padding: var(--space-4);
			display: flex;
			flex-direction: column;
			gap: var(--space-2);
		}
		
		li {
			margin: 0;
		}
		
		a {
			display: flex;
			align-items: center;
			gap: var(--space-3);
			padding: var(--space-3) var(--space-4);
			text-decoration: none;
			color: var(--color-gray-400);
			border-radius: var(--border-radius-md);
			transition: all var(--transition-normal);
			font-weight: var(--font-weight-medium);
			
			&:hover {
				background: var(--color-platinum);
				color: var(--color-white);
			}
			
			&.selected {
				background: var(--color-primary-light);
				color: var(--color-white);
			}
			
			i {
				font-size: var(--font-size-lg);
				width: 20px;
				text-align: center;
			}
		}
	}
	
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 98;
		opacity: 0;
		visibility: hidden;
		transition: all var(--transition-normal);
		
		&.visible {
			opacity: 1;
			visibility: visible;
		}
	}
	
	main {
		position: relative;
		background: var(--color-primary);
		box-sizing: border-box;
		overflow: auto;
		margin-top: 60px;
	}
	
	@media (max-width: 768px) {
		.nav-menu {
			display: none;
		}
		
		.mobile-menu-toggle {
			display: block;
		}
		
		.nav-container {
			padding: 0 var(--space-4);
		}
		
		.logo {
			.name {
				font-size: var(--font-size-lg);
			}
			
			.title {
				font-size: var(--font-size-xs);
			}
		}
	}
</style>

<nav class="top-nav">
	<div class="nav-container">
		<a href="/" class="logo">
			<div>
				<h1 class="name">Anshul Bansal</h1>
				<p class="title">Technical Architect</p>
			</div>
		</a>
		
		<ul class="nav-menu" role="navigation" aria-label="Main navigation">
			{#each menuItems as item}
				<li>
					<a class:selected={$page.route.id === item.segment} id={item.label} href={item.href} on:click={handleNavigation}>
						<i class={item.icon} aria-hidden="true"></i>
						<span>{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>
		
		<button class="mobile-menu-toggle" on:click={toggleNavBar} aria-label="Toggle navigation menu">
			<i class="fas fa-bars"></i>
		</button>
	</div>
</nav>

<div class="mobile-menu" class:visible={isVisible && isMobile}>
	<ul role="navigation" aria-label="Mobile navigation">
		{#each menuItems as item}
			<li>
				<a class:selected={$page.route.id === item.segment} id={item.label} href={item.href} on:click={(e) => { handleNavigation(e); toggleNavBar(); }}>
					<i class={item.icon} aria-hidden="true"></i>
					<span>{item.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>

<div class="overlay" class:visible={isVisible && isMobile} on:click={toggleNavBar} on:keydown={(e) => e.key === 'Escape' && toggleNavBar()} role="button" tabindex="0" aria-label="Close navigation menu"></div>

<main>
	<slot />
</main>
