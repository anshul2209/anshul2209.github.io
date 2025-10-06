<script>
    import SectionHeader from '../../lib/components/SectionHeader.svelte';
    import { videoData } from '../../lib/data/videos.js';
    import { APP_CONFIG } from '../../lib/constants/index.js';
    
    const title = 'Videos';
</script>
<style lang="scss">
.video-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 10px 0px;
    gap: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .video-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        background: var(--color-platinum);
        border: 1px solid var(--color-gray-700);
        margin: 10px 0px;
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        
        @media (max-width: 768px) {
            width: 100%;
            max-width: 500px;
        }
        h3{
            padding: 18px;
            font-size: 18px;
            color: var(--color-gold);
            width: 100%;
            text-align: center;
            box-sizing: border-box;
            background: var(--color-primary-light);
            margin: 0;
        }
    }
}

.video-container h3{
    padding: 18px;
    font-size: 18px;
    color: var(--color-gold);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    background: var(--color-primary-light);
    margin: 0;
}
h2{
    border-bottom: 1px solid var(--color-gray-700);
    font-size: 28px;
    background: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding: 10px;
}
section{
    padding: 20px;
    background: var(--color-primary);
    min-height: 100vh;
}
.youtube-channel{
    margin-top: 40px;
    text-align: center;
    padding: var(--space-8) 0;
    
    .mediaWrapper {
        display: inline-flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-4) var(--space-6);
        background: var(--color-platinum);
        border: 1px solid var(--color-gray-700);
        border-radius: var(--border-radius-lg);
        text-decoration: none;
        transition: all var(--transition-normal);
        box-shadow: var(--shadow-sm);
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(196, 48, 43, 0.2);
            border-color: #c4302b;
            background: var(--color-primary-light);
        }
        
        i {
            font-size: 36px;
            color: #c4302b;
            transition: all var(--transition-normal);
        }
        
        &:hover i {
            transform: scale(1.1);
        }
        
        span {
            font-size: var(--font-size-lg);
            font-weight: var(--font-weight-semibold);
            color: var(--color-white);
            letter-spacing: 0.02em;
        }
        
        @media (max-width: 768px) {
            padding: var(--space-3) var(--space-4);
            gap: var(--space-2);
            
            i {
                font-size: 28px;
            }
            
            span {
                font-size: var(--font-size-base);
            }
        }
        
        @media (max-width: 480px) {
            padding: var(--space-2) var(--space-3);
            gap: var(--space-2);
            
            i {
                font-size: 24px;
            }
            
            span {
                font-size: var(--font-size-sm);
            }
        }
    }
}
iframe{
    max-width: 100%;
}
</style>
<svelte:head>
	<title>{title}</title>
</svelte:head>
<SectionHeader title={title}/>
<section>
    <h2>Some technical talks</h2>
    <div class="video-wrapper">
        {#each videoData.technical as video}
            <div class="video-container">
                <iframe 
                    title={video.title}
                    width="450" 
                    height="250" 
                    src={video.url}
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <h3>{video.title}</h3>
            </div>
        {/each}
    </div>
    <h2>And some not so technical ones...</h2>
    <div class="video-wrapper">
        {#each videoData.nontechnical as video}
            <div class="video-container">
                <iframe 
                    title={video.title}
                    width="450" 
                    height="250"
                    src={video.url}
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <h3>{video.title}</h3>
            </div>
        {/each}
    </div>
    <div class="youtube-channel">
        <a target="_blank" href={APP_CONFIG.YOUTUBE_CHANNEL} class="mediaWrapper">
            <i class="fab fa-youtube"></i>
            <span>Subscribe to my YouTube Channel</span>
        </a>
    </div>
</section>


