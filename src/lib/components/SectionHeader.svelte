<script>
	export let title;
</script>

<style lang="scss">
	header {
		background: var(--gradient-primary);
		color: var(--color-white);
		padding: var(--space-16) var(--space-6);
		text-align: center;
		position: relative;
		overflow: hidden;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
			opacity: 0.1;
		}
		
		h1 {
			font-size: var(--font-size-4xl);
			font-weight: var(--font-weight-bold);
			margin: 0;
			position: relative;
			z-index: 1;
			
			@media (max-width: 768px) {
				font-size: var(--font-size-3xl);
			}
			
			@media (max-width: 480px) {
				font-size: var(--font-size-2xl);
			}
		}
		
		.subtitle {
			font-size: var(--font-size-lg);
			opacity: 0.9;
			margin-top: var(--space-2);
			position: relative;
			z-index: 1;
		}
	}
</style>

<header>
	<h1>{title}</h1>
	<div class="subtitle">Explore my expertise and experience</div>
</header>
