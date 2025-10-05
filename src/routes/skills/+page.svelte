<script>
    import SkillTile from '../../lib/components/SkillTile.svelte';
    import SectionHeader from '../../lib/components/SectionHeader.svelte';
	const title = 'Skills Details';
    const skillData = {
        ai_tools: {
            label: 'AI Technology',
            skills: [
                { imgSrc: 'skillsLogo/Rlogo.png', alt: 'R' },
                { imgSrc: 'skillsLogo/JupyterLogo.png', alt: 'Jupyter Notebook' },
                { imgSrc: 'skillsLogo/SagemakerLogo.png', alt: 'Sagemaker' },
                { imgSrc: 'skillsLogo/pythonLogo.jpeg', alt: 'Python' }
            ]
        },
        html_css: {
            label: 'Web Technologies',
            skills: [
                { imgSrc: 'skillsLogo/html5.png', alt: 'HTML5' },
                { imgSrc: 'skillsLogo/sass.png', alt: 'SASS' },
                { imgSrc: 'skillsLogo/bootstrap.jpg', alt: 'Boostrap' },
                { imgSrc: 'skillsLogo/css3Logo.jpg', alt: 'CSS3' }
            ]
        },
        javascript: {
            label: 'Javascript',
            skills: [
                { imgSrc: 'skillsLogo/jqueryLogo.gif', alt: 'JQuery' },
                { imgSrc: 'skillsLogo/reactLogo.png', alt: 'ReactJs' },
                { imgSrc: 'skillsLogo/vuejsLogo.png', alt: 'VueJs' },
                { imgSrc: 'skillsLogo/svelteSapper.png', alt: 'Svelte' },
                { imgSrc: 'skillsLogo/nodeJsLogo.png', alt: 'NodeJs' }
            ]
        },
        // build_tools: {
        //     label: 'Build Tools',
        //     skills: [
        //         { imgSrc: '', alt: 'WebPack' },
        //         { imgSrc: '', alt: '' },
        //         { imgSrc: '', alt: '' },
        //         { imgSrc: '', alt: '' }
        //     ]
        // },
        // programming_languages: {
        //     label: 'Programming Languages',
        //     skills: [
        //         { imgSrc: '', alt: '' },
        //         { imgSrc: '', alt: '' },
        //         { imgSrc: '', alt: '' },
        //         { imgSrc: '', alt: '' }
        //     ]
        // },
        others: {
            label: 'Others',
            skills: [
                { imgSrc: 'skillsLogo/webpackLogo.png', alt: 'WebPack' },
                { imgSrc: 'skillsLogo/gitHubLogo.png', alt: 'GitHub' },
                { imgSrc: 'skillsLogo/herokuLogo.png', alt: 'Heroku' },
            ]
        }
    }
</script>
<style lang="scss">
.tile{
    margin: 50px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    background: white;
}
@media (max-width: 425px) {
    .tile{
        margin: 20px;
    } 
}
</style>
<svelte:head>
	<title>{title}</title>
</svelte:head>

<SectionHeader title={title} />
<section>
    {#each Object.keys(skillData) as skillKey}
        <div class="tile">
            <SkillTile title={skillData[skillKey].label} skills={skillData[skillKey].skills}></SkillTile>
        </div>
    {/each}
</section>