<style>
	section{
		height: 100vh;
		background-repeat: no-repeat;
		background-position: -100px 0px;
		background-size: cover;
		background-image: url('/profile_photo.jpg')
	}
	#intro {
		font-size: 32px;
		font-family: sans-serif;
		position: absolute;
		top: 10%;
		right: 10%;
		width: max-content;
	}
	#name{
		background: bisque;
		padding: 10px;
		display: inline-block;
		margin: 5px 0px;
		width: fit-content;
	}
	.overlay {
		background-color: rgba(0, 0, 0, 0.1);
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
	@media (max-width: 480px) {
		#intro {
			font-size: 16px;
		}
		section{
			height: calc(100vh - 60px);
		}
		#name{
			padding: 5px;
		}
	}
</style>
<svelte:head>
	<title>Anshul Bansal | Full Stack Developer</title>
</svelte:head>
<script>
	const image_url = 'profile_photo.jpg';
</script>

<section>
	<!-- <div class="overlay"></div> -->
	<div id="intro">
		Hello I am
		<span id="name">Anshul Bansal</span>,
		<div>I am a <span id="name">Full Stack Web Developer</span>,</div>
		<div>a <span id="name">Machine Learning Enthusiast</span> and</div>
		<div>an aspiring <span id="name">Public Speaker</span></div>
	</div>
</section>
