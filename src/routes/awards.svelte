<script>
	import SectionHeader from '../components/SectionHeader.svelte';
	const title = 'Awards and Certifications';
	const awards_data = [
		{ link: 'ai_for_everyone.png', alt: 'AI for everyone', caption: 'It covered the basics of artificial intelligence and machine learning'},
		{ link: 'data_science_R.jpeg', alt: 'Data Science in R', caption: 'A deep dive into the data engineering aspect of machine learning using R'},
		{ link: 'udacity_ml.png', alt: 'Udacity ML Project', caption: 'Graduation certificate for the 3 months nanodegree program with udacity'},
		{ link: 'homelane.jpg', alt: 'Homelane Young Gun', caption: 'Given to the top performer amongst the new joinees in the company'}
	]
</script>
<style>
	.card-wrapper{
		display: flex;
		flex-wrap: wrap;
	}
	.card{
		width: 31%;
		text-align: center;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		background: #fff;
		margin: 10px;
		box-sizing: border-box;
		padding: 10px;
		position: relative;
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
		background: white;
		color: #008073;
		font-weight: bold;
	}
	@media (max-width: 425px){
		.card{
			width: 100%;
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