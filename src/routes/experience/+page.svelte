<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	
	const title = 'Professional Experience';
	
	const experience = [
		{
			company: 'OLX India',
			position: 'Technical Architect',
			period: 'Apr 2024 – Present',
			achievements: [
				'Optimized web architecture, reducing Akamai cost by 75% and Node.js pods usage by 30%',
				'Enhanced Web Vitals (CLS 100%, LCP 30% faster, page load time 7s → 4.5s) for better UX & SEO',
				'Led SEO initiatives, boosting organic traffic by 30%, clicks by 160%, and impressions by 50%',
				'Built deep linking system handling 50K+ requests/day, lowering app acquisition costs',
				'Enhanced developer productivity with Storybook, Trunk-Based Development, cutting merge time by 50%'
			]
		},
		{
			company: 'OLX Group',
			position: 'Lead Engineer',
			period: 'Apr 2021 – Apr 2024',
			achievements: [
				'Architected a super app for car dealers, focusing on scalability, modularization, and UX optimization',
				'Led technology modernization by refining the tech stack for performance, reliability, and scalability'
			]
		},
		{
			company: 'OLX Group',
			position: 'Senior Software Engineer',
			period: 'Oct 2019 – Apr 2021',
			achievements: [
				'Developed and scaled an adsales platform, enabling seamless integration with ad providers'
			]
		},
		{
			company: 'OLX Group',
			position: 'Frontend Developer',
			period: 'May 2018 – Oct 2019',
			achievements: [
				'Developed UI and product features for monetization services, driving revenue growth',
				'Led Microfrontends PoC with Web Components, assessing modular feasibility'
			]
		},
		{
			company: 'FabHotels',
			position: 'Frontend Developer',
			period: 'Dec 2017 – May 2018',
			achievements: [
				'Built mobile web features like the Referral Program and implemented CI/CD, enhancing deployment speed'
			]
		},
		{
			company: 'Homelane',
			position: 'Software Engineer',
			period: 'Jun 2015 – Dec 2017',
			achievements: [
				'Developed web apps, CRM, and REST APIs, optimizing data sync for improved reliability and efficiency'
			]
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<style lang="scss">
	.experience-container {
		max-width: var(--max-width-lg);
		margin: 0 auto;
		padding: var(--space-8);
	}
	
	.experience-item {
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
	
	.company-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-4);
		flex-wrap: wrap;
		gap: var(--space-2);
	}
	
	.company-info {
		h3 {
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-bold);
			color: var(--color-gray-900);
			margin: 0 0 var(--space-1) 0;
		}
		
		.position {
			font-size: var(--font-size-lg);
			color: var(--color-primary);
			font-weight: var(--font-weight-medium);
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
	
	.achievements {
		list-style: none;
		padding: 0;
		margin: 0;
		
		li {
			position: relative;
			padding-left: var(--space-6);
			margin-bottom: var(--space-3);
			color: var(--color-gray-700);
			line-height: 1.6;
			
			&::before {
				content: '•';
				position: absolute;
				left: 0;
				color: var(--color-primary);
				font-weight: bold;
				font-size: var(--font-size-lg);
			}
			
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
	
	@media (max-width: 768px) {
		.experience-container {
			padding: var(--space-4);
		}
		
		.company-header {
			flex-direction: column;
			align-items: flex-start;
		}
		
		.period {
			align-self: flex-start;
		}
	}
</style>

<SectionHeader title={title} />

<section class="experience-container">
	{#each experience as job}
		<div class="experience-item">
			<div class="company-header">
				<div class="company-info">
					<h3>{job.company}</h3>
					<p class="position">{job.position}</p>
				</div>
				<span class="period">{job.period}</span>
			</div>
			<ul class="achievements">
				{#each job.achievements as achievement}
					<li>{achievement}</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>