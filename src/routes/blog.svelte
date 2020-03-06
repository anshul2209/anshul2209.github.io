<script>
	import SectionHeader from '../components/SectionHeader.svelte';
	const title = 'Blog Posts';
	const posts = [
		{ 
			title: 'Human Activity Tracker System', 
			subtitle: 'Have you ever wondered how the smartphones and fitness watches know when you are running, walking, cycling or just have been lethargic for a while . This post is aimed at demystify this and a walkthrough to build a system which can accurately detect the activity using some of the sensor data from the accelerometer and gyro meter in particular.', 
			url: 'https://medium.com/analytics-vidhya/human-activity-tracker-system-2435b532b05e', 
			cover: 'activity.jpg'
		},
		{
			title: 'Deploying Sapper PWA using Github Pages: Step by Step Tutorial ( Part 1)', 
			subtitle: 'Let\'s say you are done with the development of your application made using Svelte and Sapper and want to host it somewhere free of cost. Here is how to deploy your static Sapper PWA application using Github Pages.', 
			url: 'https://medium.com/@hiiamanshul/deploying-sapper-pwa-using-github-pages-step-by-step-tutorial-part-1-1e9828dfe4de', 
			cover: 'sveltesapper.jpeg'
		}
	]
</script>

<style type="text/sass">
section{
	padding: 30px;
	.logo{
		max-height: 20px;
	}
	ul {
		margin: 0;
		padding: 0px;
		.post{
			display: flex;
			margin: 20px 0px;
			box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
			img{
				max-width: 100%;
				width: 500px;
			}
			.details{
				padding: 10px 20px;
				p {
					font-size: 18px;
				}
				.read-more{
					color: #008073;
					font-weight: bold;
				}
			}
		}
		a {
			text-decoration: none;
		}
		@media (max-width: 425px){
			.post{
				flex-direction: column;
			}
			.details {
				p {
					font-size: 14px;
				}
			}
		}
	}
}

</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<SectionHeader title={title}/>
<section>
	<img class="logo" src="medium_logo.png" alt="Medium" />
	<ul>
		{#each posts as post}
			<a href={post.url} target="_blank">
				<li class="post">
					<img src={post.cover} alt="blog-image"/>
					<div class="details">
						<h2>{post.title}</h2>
						<p>{post.subtitle}</p>
						<div class="read-more">Read More...</div>
					</div>
				</li>
			</a>
		{/each}
	</ul>
</section>