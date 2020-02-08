<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}
	section{
		height: calc(100vh - 60px);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-image: url('profile_photo.jpg')
	}
	#intro {
		font-size: 32px;
		font-family: sans-serif;
		position: relative;
		top: 10%;
		left: 10%;
		width: max-content;
	}
	#name{
		background: bisque;
		padding: 10px;
		display: block;
		margin: 5px 0px;
		width: fit-content;
	}
	@media (max-width: 480px) {
		#intro {
			font-size: 16px;
		}
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<script>
	const image_url = 'profile_photo.jpg';
</script>

<section>
	<div id="intro">
		Hello I am
		<span id="name">Anshul Bansal</span>,
		I am a <span id="name">Full Stack Web Developer</span>,
		an aspiring<span id="name">Toastmaster</span>
		and <span id="name">Marathon Runner</span>
	</div>
	<!-- <img src="profile_photo.jpg" alt="profile_photo" -->
</section>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->
