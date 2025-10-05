<script>
    export let title;
    export let skills;
</script>

<style lang="scss">
	.tileWrapper {
		box-sizing: border-box;
		
		.title {
			padding: var(--space-6);
			background: var(--gradient-primary);
			color: var(--color-white);
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-semibold);
			text-align: center;
			margin: 0;
		}
		
		.imageSection {
			padding: var(--space-8);
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
			gap: var(--space-6);
			justify-items: center;
			
			.imgWrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: var(--space-2);
				padding: var(--space-4);
				border-radius: var(--border-radius-lg);
				transition: all var(--transition-normal);
				cursor: pointer;
				
				&:hover {
					background: var(--color-primary-light);
					transform: translateY(-2px);
				}
				
				img {
					height: 60px;
					width: 60px;
					object-fit: contain;
					filter: grayscale(100%);
					transition: all var(--transition-normal);
				}
				
				&:hover img {
					filter: grayscale(0%);
					transform: scale(1.1);
				}
				
				span {
					font-size: var(--font-size-sm);
					color: var(--color-gray-300);
					text-align: center;
					font-weight: var(--font-weight-medium);
				}
			}
		}
	}
</style>
<div class="tileWrapper">
    <h3 class="title">{title}</h3>
    <div class="imageSection">
        {#each skills as skill}
            <div id={skill.id} class="imgWrapper">
                <img src={skill.imgSrc} alt={skill.alt}>
                <span>{skill.alt}</span>
            </div>
        {/each}
    </div>
</div>