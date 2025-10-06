<script>
	import { onMount } from 'svelte';
	import { APP_CONFIG } from '../lib/constants/index.js';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Anshul Bansal | Technical Architect</title>
	<meta name="description" content="Experienced Technical Architect with over 10 years of expertise in designing scalable web architectures, driving performance optimizations, & delivering SEO-driven solutions.">
</svelte:head>

<style lang="scss">
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-primary);
		padding: var(--space-8) var(--space-4);
	}
	
	.hero-content {
		text-align: center;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-6);
		margin: 0 auto;
		
		@media (max-width: 768px) {
			gap: var(--space-4);
		}
		
		@media (max-width: 480px) {
			gap: var(--space-3);
		}
	}
	
	.profile-image {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 1px solid var(--color-gray-200);
		object-fit: cover;
		opacity: 0;
		transform: scale(0.95);
		animation: fadeInScale 0.5s ease-out 0.2s forwards;
		transition: all var(--transition-fast);
		
		&:hover {
			transform: scale(1.01);
			border-color: var(--color-gray-300);
		}
	}
	
	.greeting {
		font-size: var(--font-size-base);
		color: var(--color-gray-400);
		margin: 0;
		opacity: 0;
		transform: translateY(5px);
		animation: fadeInUp 0.5s ease-out 0.4s forwards;
		font-weight: var(--font-weight-normal);
		letter-spacing: 0.01em;
	}
	
	.name {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-4xl);
		font-weight: var(--font-weight-normal);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0;
		opacity: 0;
		transform: translateY(5px);
		animation: fadeInUp 0.5s ease-out 0.6s forwards;
		letter-spacing: -0.005em;
		
		@media (max-width: 768px) {
			font-size: var(--font-size-3xl);
		}
		
		@media (max-width: 480px) {
			font-size: var(--font-size-2xl);
		}
	}
	
	.title {
		font-size: var(--font-size-lg);
		color: var(--color-gray-300);
		font-weight: var(--font-weight-normal);
		margin: 0;
		opacity: 0;
		transform: translateY(5px);
		animation: fadeInUp 0.5s ease-out 0.8s forwards;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		
		@media (max-width: 768px) {
			font-size: var(--font-size-base);
		}
	}
	
	.tagline {
		font-size: var(--font-size-sm);
		color: var(--color-gray-400);
		font-weight: var(--font-weight-normal);
		margin: 0;
		opacity: 0;
		transform: translateY(5px);
		animation: fadeInUp 0.5s ease-out 1s forwards;
		letter-spacing: 0.005em;
		max-width: 450px;
		line-height: 1.7;
		
		@media (max-width: 768px) {
			font-size: var(--font-size-xs);
		}
	}
	
	.roles {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
		width: 100%;
		max-width: 500px;
		opacity: 0;
		transform: translateY(10px);
		animation: fadeInUp 0.5s ease-out 1.2s forwards;
		
		@media (max-width: 768px) {
			gap: var(--space-1);
			max-width: 100%;
		}
		
		@media (max-width: 480px) {
			gap: 4px;
		}
	}
	
	.role {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		background: var(--color-platinum);
		border: 1px solid var(--color-gray-700);
		border-radius: var(--border-radius-sm);
		font-size: var(--font-size-xs);
		color: var(--color-gray-300);
		transition: all var(--transition-fast);
		text-align: left;
		
		&:hover {
			border-color: var(--color-gold);
			background: var(--color-primary-light);
		}
		
		.icon {
			color: var(--color-gold);
			font-size: var(--font-size-sm);
			flex-shrink: 0;
		}
		
		@media (max-width: 768px) {
			font-size: var(--font-size-xs);
			padding: var(--space-2) var(--space-3);
			gap: var(--space-1);
			text-align: center;
			justify-content: center;
		}
		
		@media (max-width: 480px) {
			font-size: 10px;
			padding: 6px 8px;
			gap: 4px;
			
			.icon {
				font-size: 12px;
			}
			
			span {
				text-align: center;
				line-height: 1.2;
			}
		}
	}
	
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes fadeInScale {
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	
	.cta {
		display: flex;
		gap: var(--space-3);
		opacity: 0;
		transform: translateY(10px);
		animation: fadeInUp 0.5s ease-out 1.4s forwards;
		flex-wrap: wrap;
		justify-content: center;
		
		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			gap: var(--space-2);
		}
		
		@media (max-width: 480px) {
			gap: 8px;
		}
	}
	
	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-4) var(--space-6);
		background: var(--color-platinum);
		backdrop-filter: blur(10px);
		background: var(--gradient-text);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-decoration: none;
		border-radius: var(--border-radius-lg);
		font-weight: var(--font-weight-medium);
		transition: all var(--transition-normal);
		border: 1px solid var(--color-gray-600);
		position: relative;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--gradient-primary);
			border-radius: var(--border-radius-lg);
			opacity: 0;
			transition: opacity var(--transition-normal);
			z-index: -1;
		}
		
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 25px rgba(244, 42, 139, 0.3);
			
			&::before {
				opacity: 1;
			}
			
			-webkit-text-fill-color: white;
			color: white;
		}
		
		&.primary {
			background: var(--gradient-primary);
			-webkit-text-fill-color: white;
			color: white;
			border-color: var(--color-gold);
			
			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 8px 25px rgba(244, 42, 139, 0.4);
			}
		}
		
		.icon {
			font-size: var(--font-size-lg);
		}
		
		@media (max-width: 768px) {
			padding: var(--space-2) var(--space-4);
			font-size: var(--font-size-sm);
			width: 100%;
			max-width: 260px;
			justify-content: center;
		}
		
		@media (max-width: 480px) {
			padding: 8px 12px;
			font-size: var(--font-size-xs);
			max-width: 100%;
			gap: 6px;
			
			.icon {
				font-size: 14px;
			}
		}
	}
	
	.about {
		background: var(--color-primary-light);
		padding: var(--space-16) var(--space-8);
		
		@media (max-width: 768px) {
			padding: var(--space-12) var(--space-4);
		}
	}
	
	.about-content {
		max-width: var(--max-width-lg);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-12);
		align-items: start;
		
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}
	}
	
	.about-text {
		h2 {
			font-size: var(--font-size-3xl);
			font-weight: var(--font-weight-bold);
			background: var(--gradient-text);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			margin-bottom: var(--space-6);
			
			@media (max-width: 768px) {
				font-size: var(--font-size-2xl);
			}
		}
		
		p {
			font-size: var(--font-size-lg);
			color: var(--color-gray-300);
			line-height: 1.7;
			margin-bottom: var(--space-6);
			
			@media (max-width: 768px) {
				font-size: var(--font-size-base);
			}
			
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
	
	.about-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
	}
	
	.stat {
		text-align: center;
		padding: var(--space-6);
		background: var(--color-white);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-sm);
		transition: all var(--transition-normal);
		
		&:hover {
			transform: translateY(-4px);
			box-shadow: var(--shadow-md);
		}
		
		.stat-number {
			font-size: var(--font-size-3xl);
			font-weight: var(--font-weight-bold);
			color: var(--color-primary);
			margin-bottom: var(--space-2);
		}
		
		.stat-label {
			font-size: var(--font-size-sm);
			color: var(--color-gray-600);
			font-weight: var(--font-weight-medium);
		}
	}
	
	
	@media (max-width: 768px) {
		.about {
			padding: var(--space-12) var(--space-4);
		}
		
		.about-content {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}
		
		.about-text {
			h2 {
				font-size: var(--font-size-2xl);
			}
			
			p {
				font-size: var(--font-size-base);
			}
		}
		
		.about-stats {
			grid-template-columns: 1fr 1fr;
			gap: var(--space-4);
		}
		
		.stat {
			padding: var(--space-4);
			
			.stat-number {
				font-size: var(--font-size-2xl);
			}
		}
		
	}
	
	.quick-links {
		background: var(--color-gray-50);
		padding: var(--space-16) var(--space-8);
	}
	
	.quick-links-content {
		max-width: var(--max-width-lg);
		margin: 0 auto;
		text-align: center;
		
		h2 {
			font-size: var(--font-size-3xl);
			font-weight: var(--font-weight-bold);
			color: var(--color-gray-900);
			margin-bottom: var(--space-8);
		}
	}
	
	.links-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-6);
		max-width: 800px;
		margin: 0 auto;
	}
	
	.quick-link {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		padding: var(--space-6);
		background: var(--color-white);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		color: inherit;
		transition: all var(--transition-normal);
		
		&:hover {
			transform: translateY(-4px);
			box-shadow: var(--shadow-lg);
			
			.link-icon {
				background: var(--color-primary);
				color: white;
			}
		}
	}
	
	.link-icon {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: var(--color-gray-100);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-normal);
		flex-shrink: 0;
		
		i {
			font-size: var(--font-size-xl);
			color: var(--color-primary);
		}
	}
	
	.link-content {
		text-align: left;
		
		h3 {
			font-size: var(--font-size-lg);
			font-weight: var(--font-weight-bold);
			color: var(--color-gray-900);
			margin: 0 0 var(--space-1) 0;
		}
		
		p {
			font-size: var(--font-size-sm);
			color: var(--color-gray-600);
			margin: 0;
			line-height: 1.5;
		}
	}
	
	@media (max-width: 768px) {
		.quick-links {
			padding: var(--space-12) var(--space-4);
		}
		
		.quick-links-content {
			h2 {
				font-size: var(--font-size-2xl);
			}
		}
		
		.links-grid {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}
		
		.quick-link {
			padding: var(--space-4);
			gap: var(--space-3);
		}
		
		.link-icon {
			width: 50px;
			height: 50px;
			
			i {
				font-size: var(--font-size-lg);
			}
		}
	}
</style>

<section class="hero">
	<div class="hero-content">
		<img src="/images/profile/profile_photo.jpg" alt="Anshul Bansal" class="profile-image" />
		<div class="greeting">Hello, I'm</div>
		<h1 class="name">Anshul Bansal</h1>
		<div class="title">Technical Architect</div>
		<div class="tagline">Building scalable architectures & optimizing performance for 10+ years</div>
		
		<div class="roles">
			<div class="role">
				<i class="fas fa-cogs icon"></i>
				<span>Architecture Design</span>
			</div>
			<div class="role">
				<i class="fas fa-rocket icon"></i>
				<span>Performance Optimization</span>
			</div>
			<div class="role">
				<i class="fas fa-chart-line icon"></i>
				<span>Technical Leadership</span>
			</div>
		</div>
		
		<div class="cta">
			<a href="/experience" class="cta-button primary">
				<i class="fas fa-briefcase icon"></i>
				View Experience
			</a>
			<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="cta-button">
				<i class="fas fa-file-pdf icon"></i>
				Download Resume
			</a>
			<a href="/contact" class="cta-button">
				<i class="fas fa-envelope icon"></i>
				Get In Touch
			</a>
		</div>
	</div>
</section>

<section class="about">
	<div class="about-content">
		<div class="about-text">
			<h2>About Me</h2>
			<p>
				Technical Architect with 10+ years of experience building scalable web applications and leading engineering teams. 
				I specialize in architecture design, performance optimization, and delivering solutions that drive significant business value.
			</p>
			<p>
				Currently at OLX, I've reduced infrastructure costs by 75% and improved page load times by 30% through strategic technical leadership.
			</p>
		</div>
		<div class="about-stats">
			<div class="stat">
				<div class="stat-number">10+</div>
				<div class="stat-label">Years Experience</div>
			</div>
			<div class="stat">
				<div class="stat-number">75%</div>
				<div class="stat-label">Cost Reduction</div>
			</div>
			<div class="stat">
				<div class="stat-number">30%</div>
				<div class="stat-label">Performance Boost</div>
			</div>
		</div>
	</div>
</section>


<section class="quick-links">
	<div class="quick-links-content">
		<h2>Explore More</h2>
		<div class="links-grid">
			<a href="/experience" class="quick-link">
				<div class="link-icon">
					<i class="fas fa-briefcase"></i>
				</div>
				<div class="link-content">
					<h3>Experience</h3>
					<p>Professional journey and achievements</p>
				</div>
			</a>
			<a href="/projects" class="quick-link">
				<div class="link-icon">
					<i class="fas fa-laptop-code"></i>
				</div>
				<div class="link-content">
					<h3>Projects</h3>
					<p>Technical projects and contributions</p>
				</div>
			</a>
			<a href="/skills" class="quick-link">
				<div class="link-icon">
					<i class="fas fa-tools"></i>
				</div>
				<div class="link-content">
					<h3>Skills</h3>
					<p>Technical expertise and tools</p>
				</div>
			</a>
		</div>
	</div>
</section>
