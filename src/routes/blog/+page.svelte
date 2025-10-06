<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	import { blogPosts } from '../../lib/data/blog.js';
	import track from '../../lib/helpers/tracking.js';
	
	const title = 'Blog Posts';

	function handleLinkClick(event) {
		if(event.currentTarget.href) {
			track('click', 'blog_links', event.currentTarget.href)
		} 
	}
</script>

<style lang="scss">
section{
	padding: 30px;
	background: var(--color-primary);
	min-height: 100vh;
	
	@media (max-width: 768px) {
		padding: 20px;
	}
	
	@media (max-width: 480px) {
		padding: 15px;
	}
	
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
			background: var(--color-platinum);
			border: 1px solid var(--color-gray-700);
			border-radius: var(--border-radius-lg);
			
			@media (max-width: 768px) {
				margin: 15px 0px;
			}
			img{
				max-width: 100%;
				width: 500px;
				
				@media (max-width: 768px) {
					width: 100%;
					height: 200px;
					object-fit: cover;
				}
			}
			.details{
				padding: 10px 20px;
				
				@media (max-width: 768px) {
					padding: 15px;
				}
				
				p {
					font-size: 18px;
					color: var(--color-gray-300);
					
					@media (max-width: 768px) {
						font-size: 16px;
					}
					
					@media (max-width: 480px) {
						font-size: 14px;
					}
				}
				.read-more{
					color: var(--color-gold);
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
	<img class="logo" src="/medium_logo.png" alt="Medium" />
	<ul>
		{#each blogPosts as post}
			<a href={post.url} target="_blank" on:click={handleLinkClick}>
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