<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	// import Feed from 'rss-to-json';

	let data = [];
	let videoData = [];

	async function fetchData() {

		// Make first two requests
		const [firstResponse, secondResponse] = await Promise.all([
			axios.get('https://api.github.com/users/anshul2209/repos'),
			axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD7tj6EM3Y3r8sl1tV2ReMdTqyOg368bfw&channelId=UCDv2X3kXDJ05qCg9EaKCpQw&part=snippet,id&order=date&maxResults=20'),
			// Feed.load('https://medium.com/feed/@hiiamanshul')
		]);

		data = firstResponse.data;
		videoData = secondResponse.data.items;
		// console.log('thirdResponse', thirdResponse);	
	}
	onMount(fetchData());

</script>
<style>
	.card-wrapper{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}
	.card {
		width: 24%;
		height: 300px;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		margin-bottom: 1%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		background: #fff;
    	border-radius: 2px;
	}
	.youtube-card {
		height: 300px;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		margin-bottom: 1%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	.title {
		font-size: 12px;
		border-bottom: 1px solid;
		padding: 10px;
	}
	.description {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 10px;
	}
</style>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<section>
	<h2>Github Projects</h2>
	<div class="card-wrapper">
		{#each data as item}
			<div class="card">
				<div class="title">{item.name}</div>
				<div class="description">{item.description}</div>
			</div>
		{/each}
	</div>
</section>
<section>
	<h2>Youtube Videos</h2>
	<div class="card-wrapper">
		{#each videoData as video}
			<div class="youtube-card">
				<iframe title="youtube" height="480" width="500" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe> 
			</div>
		{/each}
	</div>
</section>