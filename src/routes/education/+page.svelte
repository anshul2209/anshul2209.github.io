<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	
	const title = 'Education';
	
	const education = [
		{
			degree: 'B.Tech in Computer Science',
			institution: 'USICT, GGSIPU',
			location: 'Delhi',
			period: '2011 – 2015',
			percentage: '77%',
			description: 'Comprehensive computer science education covering programming fundamentals, data structures, algorithms, software engineering, and system design.'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<style lang="scss">
	.education-container {
		max-width: var(--max-width-lg);
		margin: 0 auto;
		padding: var(--space-8);
	}
	
	.education-item {
		background: var(--color-white);
		border-radius: var(--border-radius-lg);
		padding: var(--space-6);
		margin-bottom: var(--space-6);
		box-shadow: var(--shadow-sm);
		border-left: 4px solid var(--color-primary);
		transition: all var(--transition-normal);
		
		&:hover {
			box-shadow: var(--shadow-md);
			transform: translateY(-2px);
		}
	}
	
	.degree-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-4);
		flex-wrap: wrap;
		gap: var(--space-2);
	}
	
	.degree-info {
		h3 {
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-bold);
			color: var(--color-gray-900);
			margin: 0 0 var(--space-1) 0;
		}
		
		.institution {
			font-size: var(--font-size-lg);
			color: var(--color-primary);
			font-weight: var(--font-weight-medium);
			margin: 0 0 var(--space-1) 0;
		}
		
		.location {
			font-size: var(--font-size-base);
			color: var(--color-gray-600);
			margin: 0;
		}
	}
	
	.period {
		background: var(--color-gray-100);
		color: var(--color-gray-700);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--border-radius-md);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		white-space: nowrap;
	}
	
	.percentage {
		background: var(--color-primary);
		color: var(--color-white);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--border-radius-md);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
		white-space: nowrap;
		margin-left: var(--space-2);
	}
	
	.description {
		color: var(--color-gray-700);
		line-height: 1.6;
		margin: 0;
	}
	
	@media (max-width: 768px) {
		.education-container {
			padding: var(--space-4);
		}
		
		.degree-header {
			flex-direction: column;
			align-items: flex-start;
		}
		
		.period, .percentage {
			align-self: flex-start;
		}
	}
</style>

<SectionHeader title={title} />

<section class="education-container">
	{#each education as edu}
		<div class="education-item">
			<div class="degree-header">
				<div class="degree-info">
					<h3>{edu.degree}</h3>
					<p class="institution">{edu.institution}</p>
					<p class="location">{edu.location}</p>
				</div>
				<div style="display: flex; align-items: center; gap: var(--space-2);">
					<span class="period">{edu.period}</span>
					<span class="percentage">{edu.percentage}</span>
				</div>
			</div>
			<p class="description">{edu.description}</p>
		</div>
	{/each}
</section>
