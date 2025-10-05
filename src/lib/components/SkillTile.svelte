<script>
    export let title;
    export let skills;
</script>

<style lang="scss">
.tileWrapper {
    box-sizing: border-box;
    
    .title {
        /* border-bottom: 1px solid #ddd; */
        padding: 20px;
        background: #f9f9f9;
        color: #000;
    }
    
    .imageSection {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        
        .imgWrapper {
            /* border: 1px solid; */
            padding: 10px;
            box-sizing: border-box;
            
            img {
                height: 80px;
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
            </div>
        {/each}
    </div>
</div>