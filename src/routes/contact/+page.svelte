<script>
    import SectionHeader from '../../lib/components/SectionHeader.svelte';
    import track from '../../lib/helpers/tracking.js';
    import { APP_CONFIG } from '../../lib/constants/index.js';
    
    const title = 'Contact Me';
    
    function handleLinkClick(event) {
        if(event.currentTarget.href) {
		    track('click', 'contact_links', event.currentTarget.href)
        }
	}
</script>
<svelte:head>
	<title>{title}</title>
</svelte:head>
<style lang="scss">
	.contact-container {
		max-width: var(--max-width-xl);
		margin: 0 auto;
		padding: var(--space-8);
		background: var(--color-primary);
		min-height: 100vh;
		
		@media (max-width: 768px) {
			padding: var(--space-4);
		}
	}
	
	.contact-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		align-items: center;
		text-align: center;
	}
	
	.contact-info {
		h2 {
			font-size: var(--font-size-3xl);
			font-weight: var(--font-weight-bold);
			color: var(--color-gray-900);
			margin-bottom: var(--space-6);
			text-align: center;
			
			@media (max-width: 768px) {
				font-size: var(--font-size-2xl);
			}
		}
	}
	
	.contact-methods {
		display: flex;
		flex-direction: row;
		gap: var(--space-4);
		justify-content: center;
		flex-wrap: wrap;
		
		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			gap: var(--space-3);
		}
		
		@media (max-width: 480px) {
			gap: var(--space-2);
		}
	}
	
	.contact-method {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		background: var(--color-platinum);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		transition: all var(--transition-normal);
		border: 1px solid var(--color-gray-700);
		min-width: 200px;
		
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 20px 40px rgba(244, 42, 139, 0.2);
			border-color: var(--color-gold);
		}
		
		.icon {
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: var(--border-radius-md);
			font-size: var(--font-size-lg);
			color: var(--color-white);
			flex-shrink: 0;
		}
		
		.content {
			flex: 1;
			
			.title {
				font-size: var(--font-size-base);
				font-weight: var(--font-weight-semibold);
				color: var(--color-white);
				margin-bottom: var(--space-1);
			}
			
			.description {
				font-size: var(--font-size-xs);
				color: var(--color-gray-300);
			}
		}
		
		// Platform-specific colors
		&.linkedin .icon {
			background: #0077b5;
		}
		
		&.github .icon {
			background: #333;
		}
		
		&.email .icon {
			background: #ea4335;
		}
		
		&.resume .icon {
			background: #dc2626;
		}
		
		@media (max-width: 768px) {
			min-width: 100%;
			max-width: 300px;
		}
		
		@media (max-width: 480px) {
			padding: var(--space-2) var(--space-3);
			gap: var(--space-2);
			
			.icon {
				width: 35px;
				height: 35px;
				font-size: var(--font-size-base);
			}
		}
	}
	
	.contact-message {
		background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 100%);
		border-radius: var(--border-radius-xl);
		padding: var(--space-8);
		text-align: center;
		box-shadow: var(--shadow-lg);
		border: 1px solid var(--color-gray-200);
		
		h1 {
			font-size: var(--font-size-4xl);
			font-weight: var(--font-weight-bold);
			color: var(--color-gray-900);
			margin-bottom: var(--space-4);
			line-height: 1.2;
			
			@media (max-width: 768px) {
				font-size: var(--font-size-3xl);
			}
		}
		
		p {
			font-size: var(--font-size-lg);
			color: var(--color-gray-600);
			line-height: 1.6;
			margin-bottom: var(--space-6);
		}
		
		.cta-button {
			display: inline-flex;
			align-items: center;
			gap: var(--space-2);
			padding: var(--space-4) var(--space-6);
			background: var(--color-gold);
			color: var(--color-gray-900);
			text-decoration: none;
			border-radius: var(--border-radius-lg);
			font-weight: var(--font-weight-semibold);
			font-size: var(--font-size-lg);
			transition: all var(--transition-normal);
			
			&:hover {
				background: var(--color-gold-light);
				transform: translateY(-2px);
				box-shadow: var(--shadow-lg);
			}
		}
	}
	
	@media (max-width: 768px) {
		.contact-container {
			padding: var(--space-4);
		}
		
		.contact-method {
			padding: var(--space-3) var(--space-4);
			
			.icon {
				width: 40px;
				height: 40px;
				font-size: var(--font-size-lg);
			}
			
			.content {
				.title {
					font-size: var(--font-size-base);
				}
				
				.description {
					font-size: var(--font-size-xs);
				}
			}
		}
	}
</style>
<SectionHeader title={title}/>

<div class="contact-container">
	<div class="contact-content">
		<div class="contact-info">
			<h2>Get In Touch</h2>
			<div class="contact-methods">
				<a href="mailto:{APP_CONFIG.EMAIL}?Subject=Hello!" class="contact-method email" on:click={handleLinkClick}>
					<div class="icon">
						<i class="fas fa-envelope"></i>
					</div>
					<div class="content">
						<div class="title">Email</div>
						<div class="description">Send me a message</div>
					</div>
				</a>
				
				<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="contact-method resume" on:click={handleLinkClick}>
					<div class="icon">
						<i class="fas fa-file-pdf"></i>
					</div>
					<div class="content">
						<div class="title">Resume</div>
						<div class="description">Download my resume</div>
					</div>
				</a>
				
				<a href={APP_CONFIG.LINKEDIN_URL} target="_blank" rel="noopener noreferrer" class="contact-method linkedin" on:click={handleLinkClick}>
					<div class="icon">
						<i class="fab fa-linkedin-in"></i>
					</div>
					<div class="content">
						<div class="title">LinkedIn</div>
						<div class="description">Connect professionally</div>
					</div>
				</a>
				
				<a href={APP_CONFIG.GITHUB_URL} target="_blank" rel="noopener noreferrer" class="contact-method github" on:click={handleLinkClick}>
					<div class="icon">
						<i class="fab fa-github"></i>
					</div>
					<div class="content">
						<div class="title">GitHub</div>
						<div class="description">View my projects</div>
					</div>
				</a>
			</div>
		</div>
		
		<div class="contact-message">
			<h1>Let's Connect</h1>
			<p>
				Ready to discuss your next project or just want to say hello? 
				I'd love to hear from you!
			</p>
			<a href="mailto:{APP_CONFIG.EMAIL}?Subject=Hello!" class="cta-button" on:click={handleLinkClick}>
				<i class="fas fa-paper-plane"></i>
				Send Message
			</a>
		</div>
	</div>
</div>