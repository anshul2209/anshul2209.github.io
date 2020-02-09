<style>
	section{
		height: 100vh;
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
		display: inline-block;
		margin: 5px 0px;
		width: fit-content;
	}
	@media (max-width: 480px) {
		#intro {
			font-size: 16px;
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
		<div>I am a <span id="name">Full Stack Web Developer</span>,</div>
		<div>an aspiring<span id="name">Toastmaster</span></div>
		<div>and <span id="name">Marathon Runner</span></div>
	</div>
	<!-- <img src="profile_photo.jpg" alt="profile_photo" -->
</section>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->
