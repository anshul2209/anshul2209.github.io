<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 2em;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
		background: #fff;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>Home</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>About</a></li>
		<li><a class:selected='{segment === "awards"}' href='awards'>Awards</a></li>
		<li><a class:selected='{segment === "skills"}' href='awards'>Skills</a></li>
		<li><a class:selected='{segment === "resume"}' href='awards'>Resume</a></li>
		<li><a class:selected='{segment === "contact"}' href='awards'>Contact</a></li>


		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>Blog</a></li>
	</ul>
</nav>
