<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	const title = 'Awards and Certifications';
	const awards_data = [
		{ 
			link: 'udacity_ml.png', 
			alt: 'ML Nanodegree', 
			caption: 'Machine Learning Nanodegree program covering advanced ML concepts (Udacity, Jan 2020)'
		},
		{ 
			link: 'ai_for_everyone.png', 
			alt: 'AI for Everyone', 
			caption: 'Foundational course in artificial intelligence and machine learning principles'
		},
		{ 
			link: 'data_science_R.jpeg', 
			alt: 'Data Science in R', 
			caption: 'Advanced data science and statistical analysis using R programming'
		},
		{ 
			link: 'homelane.jpg', 
			alt: 'Homelane Young Gun', 
			caption: 'Awarded for being the top performer amongst new joinees in the company'
		}
	]
</script>
<style lang="scss">
.card-wrapper{
	display: flex;
	flex-wrap: wrap;
	background: var(--color-primary);
	min-height: 100vh;
	padding: var(--space-8);
	justify-content: center;
	
	@media (max-width: 768px) {
		padding: var(--space-4);
	}
	
	.card{
		width: 31%;
		text-align: center;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		background: var(--color-platinum);
		border: 1px solid var(--color-gray-700);
		margin: 10px;
		box-sizing: border-box;
		padding: 10px;
		position: relative;
		
		@media (max-width: 768px) {
			width: 48%;
			margin: 5px;
		}
		img{
			max-width: 100%;
			max-height: 100%;
		}
		.caption{
			position: absolute;
			bottom: 0px;
			left: 0px;
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
			background: var(--color-primary-light);
			color: var(--color-white);
			font-weight: bold;
		}
	}
	@media (max-width: 425px){
		.card{
			width: 100%;
		}
	}
}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<SectionHeader title={title}/>
<section>
	<div class="card-wrapper">
		{#each awards_data as award}
			<div class="card">
				<img src={award.link} alt={award.alt} />
				<div class="caption">{award.caption}</div>
			</div>
		{/each}
	</div>
</section>