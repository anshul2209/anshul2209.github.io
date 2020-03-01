<script>
    import SectionHeader from '../components/SectionHeader.svelte';
    const title = 'Videos';
    const videoData = {
        technical: [
            { title: 'Microfrontends and Web Components', url: 'https://www.youtube.com/embed/Md9eu-9_Ric' },
            { title: 'Predicting the winner in a game of PUBG', url: 'https://www.youtube.com/embed/pGj1xsTU0Ow' },
            { title: 'Globalisation Of OLX Code Base', url: 'https://www.youtube.com/embed/Xu8Cj78I4FY'}
        ],
        nontechnical: [
            { title: 'Identifying Your Leadership Style', url: 'https://www.youtube.com/embed/_w3GaXCh7Zw'},
            { title: "Ice Breaker Speech", url: 'https://www.youtube.com/embed/8Rv1elN_vuA'},
            { title: "Let's Team Up", url: 'https://www.youtube.com/embed/wwQSU3TztiU'},
        ]
    }
</script>
<style>
    .video-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 10px 0px;
    }
    .video-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }
    .video-container h3{
        padding: 18px;
        font-size: 18px;
        color: #008073;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        background: #f9f9f9;
        margin: 0;
    }
    h2{
        border-bottom: 1px solid #ddd;
        font-size: 28px;
        color: #795548;
        padding: 10px;
    }
    section{
        padding: 20px;
    }
    .youtube-channel{
        margin-top: 20px;
        text-align: center;
    }
    .youtube-channel span{
        font-size: 18px;
        font-weight: bold;
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
        <a target="_blank" href="https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw" class="mediaWrapper">
            <i class="fa fa-youtube" style="color:#c4302b;font-size: 36px;"></i>
            <span> Checkout my YouTube channel</span>
        </a>
    </div>
</section>


