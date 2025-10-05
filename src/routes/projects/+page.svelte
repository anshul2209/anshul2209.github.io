<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	import Loader from '../../lib/components/Loader.svelte';
	import track from '../../lib/helpers/tracking.js';
	let isClosed = false;
	import { onMount } from 'svelte';
	import axios from 'axios';
	const title = 'Projects';
	const pinnedRepos = [ 258580131, 158177168, 92606922, 73320743, 82116410, 234808378, 112024297];
	const imageMap = {
		'gourmet-food': {
			id: 258580131, 
			cover: 'gourmet-food.png' 
		},
		PUBGrankpredictor: { 
			id: 158177168, 
			cover: 'pubg.jpg' 
		},
		Chatter: { 
			id: 92606922, 
			cover: 'chatter.png' 
		},
		'React-Card-Layout-App': {
			id: 73320743, 
			cover: 'cards.png' 
		},
		'React-TaskR-App': { 
			id: 82116410, 
			cover: 'taskr.png' 
		},
		'Human-Activity-Tracker': { 
			id: 234808378, 
			cover: 'activity.jpg' 
		},
		'lazy-load': { 
			id: 112024297, 
			cover: 'lazyloader.gif' 
		}
	}
	let data = null;
	let videoData = [];

	async function fetchData() {
		const headers = {
			"Accept": "application/vnd.github.mercy-preview+json",
			// "Authorization": "token eff1169ecdf22952ca6d74a1038b6c427c8cc0a8"
		}
		const firstResponse = await axios.get('https://api.github.com/users/anshul2209/repos', { headers });
		data = firstResponse.data.filter(repo => pinnedRepos.includes(repo.id));
	}
	onMount(fetchData);

	function handleCardFlip(event){
		isClosed = true;
	}
	function handleLinkClick(event) {
		if(event.target.href) {
			track('click', 'external_links', event.target.href)
		}
	}
</script>
<style lang="scss">
	.card-wrapper{	
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.allProjects{
		margin: 20px 0px;
		text-align: center;
		font-size: 24px;
	}
	.outside {
		width: 25%;
		height: 400px;
		margin: 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		cursor: pointer;
    	border-radius: 2px;
		background-color: transparent;
  		perspective: 1000px;
		&:hover{
			.inside {
				transform: rotateY(180deg);
			}
		}
	}
	.inside{
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		.card {
			position: absolute;
			width: 100%;
			height: 100%;
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			background-color: #fff;
			.imageSection{
				height: 300px;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					max-height: 100%;
					max-width: 100%;
				}
			}
			.details{
				padding: 10px;
				.title {
					color: #008073;
					font-size: 16px;
				}
				.description {
					display: flex;
					align-items: center;
					flex: 1;
					font-size: 14px;
				}
			}
		}
		.card_flip {
			position: absolute;
			width: 100%;
			height: 100%;
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			background-color: #fff;
			transform: rotateY(180deg);
			display: flex;
			flex-direction: column;
			position: relative;
			background-color: #008073;
			color: white;
			>span{
				width: fit-content;
				position: absolute;
				right: 10px;
				top: 10px;
				font-size: 16px;
			}
			.links{
				height: 300px;
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				flex-direction: column;
				a {
					i{
						margin-right: 10px;
					}
				}
			}
			.tagsSection{
				margin-bottom: 10px;
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				flex-wrap: wrap;
				flex: 1;
				border-top: 1px solid rgba(200,200,200,0.2);
				.tags{
					border: 1px solid;
					padding: 5px;
					margin: 5px;
				}
			}
		}
	}
	.inside-reset{
		transform: rotateY(0deg);
	}
	
	@media (max-width: 425px){
		.outside{
			width: 100%;
		}
	}
</style>
<svelte:head>
	<title>{title}</title>
</svelte:head>

<SectionHeader title={title}/>
<section>
	{#if data}
		<div class="card-wrapper">
			{#each data as item}
				<div class="outside">
					<div class={ isClosed ? "inside inside-reset" : "inside"}>
						<div class="card">
							<div class="imageSection">
								<img src={imageMap[item.name].cover} alt="project" />
							</div>
							<div class="details">
								<span class="title">{item.name}</span>
								<p class="description">{item.description}</p>
							</div>
						</div>
						<div class="card_flip">
							<span on:click={handleCardFlip}><i class="fa fa-times-circle" aria-hidden="true" style="font-size:24px"></i></span>
							<div class="links" on:click={handleLinkClick}>
								<a target="_blank" href={item.homepage}><i class="fa fa-external-link" style="font-size:48px"></i>Demo</a>
								<a target="_blank" href={item.svn_url}><i class="fa fa-github" style="font-size:48px"></i>GitHub</a>
							</div>
							<div class="tagsSection">
								{#each item.topics as topic}
									<span class="tags">{topic}</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
				
			{/each}
		</div>
		<div class="allProjects">
			<a href="https://github.com/anshul2209" on:click={handleLinkClick} class="mediaWrapper">
				<i class="fa fa-github" style="color:#211F1F"></i>
				<span>Checkout more projects on Github</span>
			</a>
	</div>
	{:else}
		<Loader loaderText="Projects Loading..."/>
	{/if}
</section>

