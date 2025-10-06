<script>
    import SkillTile from '../../lib/components/SkillTile.svelte';
    import SectionHeader from '../../lib/components/SectionHeader.svelte';
    import { skillData } from '../../lib/data/skills.js';
    
    const title = 'Skills Details';
</script>

<style lang="scss">
	.skills-container {
		padding: var(--space-16) 0;
		background: var(--color-primary);
		min-height: 100vh;
		
		@media (max-width: 768px) {
			padding: var(--space-8) 0;
		}
	}
	
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: var(--space-8);
		max-width: var(--max-width-2xl);
		margin: 0 auto;
		padding: 0 var(--space-6);
		
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			padding: 0 var(--space-4);
			gap: var(--space-6);
		}
		
		@media (max-width: 480px) {
			grid-template-columns: 1fr;
			padding: 0 var(--space-3);
			gap: var(--space-4);
		}
	}
	
	.skill-tile {
		background: var(--color-platinum);
		border: 1px solid var(--color-gray-700);
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-md);
		overflow: hidden;
		transition: all var(--transition-normal);
		
		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 20px 40px rgba(244, 42, 139, 0.2);
			border-color: var(--color-gold);
		}
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<SectionHeader title={title} />
<section class="skills-container">
    <div class="skills-grid">
        {#each Object.keys(skillData) as skillKey}
            <div class="skill-tile">
                <SkillTile title={skillData[skillKey].label} skills={skillData[skillKey].skills}></SkillTile>
            </div>
        {/each}
    </div>
</section>