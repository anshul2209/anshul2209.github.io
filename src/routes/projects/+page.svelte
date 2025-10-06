<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	import Loader from '../../lib/components/Loader.svelte';
	import track from '../../lib/helpers/tracking.js';
	import { projectImageMap, defaultProjectImage } from '../../lib/data/projects.js';
	import { PINNED_REPOS, API_HEADERS, APP_CONFIG } from '../../lib/constants/index.js';
	import { onMount } from 'svelte';
	import axios from 'axios';
	
	const title = 'Projects';
	let data = null;

	async function fetchData() {
		const firstResponse = await axios.get('https://api.github.com/users/anshul2209/repos', { headers: API_HEADERS });
		const githubRepos = firstResponse.data.filter(repo => PINNED_REPOS.includes(repo.id));
		
		// Add UrbanMart project manually
		const urbanMartProject = {
			id: 'urbanmart',
			name: 'urbanmart',
			description: 'Modern e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS',
			html_url: 'https://github.com/anshul2209/urbanmart',
			homepage: 'https://urbanmart-dun4.onrender.com',
			topics: ['nextjs', 'typescript', 'tailwind', 'ecommerce', 'zustand']
		};
		
		data = [...githubRepos, urbanMartProject];
	}
	onMount(fetchData);

	function handleLinkClick(event) {
		if(event.target.href) {
			track('click', 'external_links', event.target.href)
		}
	}
</script>
<style lang="scss">
	.projects-container {
		max-width: var(--max-width-xl);
		margin: 0 auto;
		padding: var(--space-8);
		background: var(--color-primary);
		min-height: 100vh;
		
		@media (max-width: 768px) {
			padding: var(--space-4);
		}
	}
	
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--space-8);
		margin-bottom: var(--space-12);
		
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: var(--space-6);
		}
		
		@media (max-width: 480px) {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}
	}
	
	.project-card {
		background: var(--color-platinum);
		border: 1px solid var(--color-gray-700);
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		transition: all var(--transition-slow);
		position: relative;
		
		&:hover {
			transform: translateY(-8px);
			box-shadow: 0 20px 40px rgba(244, 42, 139, 0.2);
			border-color: var(--color-gold);
		}
	}
	
	.project-image {
		height: 200px;
		background: linear-gradient(135deg, var(--color-gray-100) 0%, var(--color-gray-200) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform var(--transition-slow);
		}
		
		&:hover img {
			transform: scale(1.05);
		}
		
		.project-overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(45, 45, 45, 0.6) 100%);
			opacity: 0;
			transition: opacity var(--transition-normal);
			display: flex;
			align-items: center;
			justify-content: center;
			gap: var(--space-4);
		}
		
		&:hover .project-overlay {
			opacity: 1;
		}
		
		.overlay-link {
			display: flex;
			align-items: center;
			gap: var(--space-2);
			padding: var(--space-3) var(--space-4);
			background: var(--color-gold);
			color: var(--color-gray-900);
			text-decoration: none;
			border-radius: var(--border-radius-md);
			font-weight: var(--font-weight-medium);
			transition: all var(--transition-normal);
			
			&:hover {
				background: var(--color-gold-light);
				transform: translateY(-2px);
			}
		}
	}
	
	.project-content {
		padding: var(--space-6);
	}
	
	.project-title {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-3);
		line-height: 1.3;
	}
	
	.project-description {
		color: var(--color-gray-300);
		line-height: 1.6;
		margin-bottom: var(--space-4);
		font-size: var(--font-size-base);
	}
	
	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-4);
	}
	
	.tech-tag {
		background: var(--color-gray-100);
		color: var(--color-gray-700);
		padding: var(--space-1) var(--space-3);
		border-radius: var(--border-radius-md);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		transition: all var(--transition-normal);
		
		&:hover {
			background: var(--color-gold);
			color: var(--color-gray-900);
		}
	}
	
	.project-links {
		display: flex;
		gap: var(--space-3);
	}
	
	.project-link {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-4);
		background: var(--color-gray-100);
		color: var(--color-gray-700);
		text-decoration: none;
		border-radius: var(--border-radius-md);
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-sm);
		transition: all var(--transition-normal);
		flex: 1;
		justify-content: center;
		
		&:hover {
			background: var(--color-primary);
			color: var(--color-white);
			transform: translateY(-2px);
		}
		
		&.primary {
			background: var(--color-gold);
			color: var(--color-gray-900);
			
			&:hover {
				background: var(--color-gold-light);
			}
		}
	}
	
	.github-link {
		margin-top: var(--space-8);
		text-align: center;
		
		a {
			display: inline-flex;
			align-items: center;
			gap: var(--space-2);
			padding: var(--space-4) var(--space-6);
			background: var(--color-gray-900);
			color: var(--color-white);
			text-decoration: none;
			border-radius: var(--border-radius-lg);
			font-weight: var(--font-weight-medium);
			transition: all var(--transition-normal);
			
			&:hover {
				background: var(--color-primary);
				transform: translateY(-2px);
				box-shadow: var(--shadow-lg);
			}
		}
	}
	
	@media (max-width: 768px) {
		.projects-container {
			padding: var(--space-4);
		}
		
		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--space-6);
		}
		
		.project-image {
			height: 180px;
		}
		
		.project-content {
			padding: var(--space-4);
		}
		
		.project-title {
			font-size: var(--font-size-lg);
		}
		
		.project-links {
			flex-direction: column;
		}
	}
</style>
<svelte:head>
	<title>{title}</title>
</svelte:head>

<SectionHeader title={title}/>
{#if data}
	<div class="projects-container">
		<div class="projects-grid">
			{#each data as item}
				<div class="project-card">
					<div class="project-image">
						<img src={projectImageMap[item.id]?.cover || defaultProjectImage} alt={projectImageMap[item.id]?.name || item.name} />
						<div class="project-overlay">
							{#if item.homepage}
								<a href={item.homepage} target="_blank" rel="noopener noreferrer" class="overlay-link" on:click={handleLinkClick}>
									<i class="fas fa-external-link-alt"></i>
									Live Demo
								</a>
							{/if}
							<a href={item.html_url} target="_blank" rel="noopener noreferrer" class="overlay-link" on:click={handleLinkClick}>
								<i class="fab fa-github"></i>
								View Code
							</a>
						</div>
					</div>
					<div class="project-content">
						<h3 class="project-title">{projectImageMap[item.id]?.name || item.name}</h3>
						<p class="project-description">
							{projectImageMap[item.id]?.description || item.description || 'A showcase of technical skills and innovative solutions.'}
						</p>
						<div class="project-tech">
							{#each (projectImageMap[item.id]?.technologies || item.topics || []) as topic}
								<span class="tech-tag">{topic}</span>
							{/each}
						</div>
						<div class="project-links">
							{#if item.homepage}
								<a href={item.homepage} target="_blank" rel="noopener noreferrer" class="project-link primary" on:click={handleLinkClick}>
									<i class="fas fa-external-link-alt"></i>
									Live Demo
								</a>
							{/if}
							<a href={item.html_url} target="_blank" rel="noopener noreferrer" class="project-link" on:click={handleLinkClick}>
								<i class="fab fa-github"></i>
								View Code
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
		
		<div class="github-link">
			<a href={APP_CONFIG.GITHUB_URL} target="_blank" rel="noopener noreferrer" on:click={handleLinkClick}>
				<i class="fab fa-github"></i>
				View All Projects on GitHub
			</a>
		</div>
	</div>
{:else}
	<Loader loaderText="Projects Loading..."/>
{/if}

