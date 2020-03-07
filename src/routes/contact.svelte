<script>
    import SectionHeader from '../components/SectionHeader.svelte';
    import track from '../../helpers/tracking.js';
    
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
<style type="text/sass">
section{
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
    h2{
        margin-bottom: 30px;
        font-weight: bold;
    }
    .social-media{
        display: flex;
        flex-direction: column;
        width: fit-content;
        .mediaWrapper{
            text-decoration: none;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            i{
                font-size: 42px;
                cursor: pointer;
                margin-right: 20px;
            }
        }
    }
    .content_wrap{
        max-width: 100%;
        img {
            top: -80px;
            position: relative;
        }
        .content {
            background: url('/brushstroke.png');
            background-size: cover;
            width: 600px;
            padding: 30px 20px;
            box-sizing: border-box;
            position: relative;
            color: #000;
            max-width: 100%;
            h1{
                text-align: center;
                position: relative;
                left: 25px;
            }
            h3{
                position: relative;
                left: 50px;
            }
        }

       
    }
}
 @media (max-width: 425px) {
    section{
        flex-wrap: wrap;
        .content_wrap{
            text-align: center;
            .content h3{
                left: 20px;
            }
        }
    }
}
</style>
<SectionHeader title={title}/>
<section>
    <div class="socialMediaWrap">
        <h2>Find me on Social Media.</h2>
        <div class="social-media">
            <a target="_blank" href="https://www.linkedin.com/in/anshulbansal2209" class="mediaWrapper" on:click={handleLinkClick}>
                <i class="fa fa-linkedin-square" style="color:#0e76a8"></i>
                <span>Connect with me on LinkedIn</span>
            </a>
            <a target="_blank" href="https://twitter.com/anshulbansal09" class="mediaWrapper" on:click={handleLinkClick}>
                <i class="fa fa-twitter-square" style="color:#00acee"></i>
                <span>Follow me on Twitter</span>
            </a>
            <a target="_blank" href="https://github.com/anshul2209" class="mediaWrapper" on:click={handleLinkClick}>
                <i class="fa fa-github" style="color:#211F1F"></i>
                <span>See my projects on Github</span>
            </a>
            <a target="_blank" href="mailto:anshulbansal2209@gmail.com?Subject=Hello!" class="mediaWrapper" on:click={handleLinkClick}>
                <i class="fa fa-envelope" style="color:#D44638"></i>
                <span>Send me an email</span>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw" class="mediaWrapper" on:click={handleLinkClick}>
                <i class="fa fa-youtube" style="color:#c4302b"></i>
                <span>Check out my YouTube channel</span>
            </a>
        </div>
    </div>
    <div class="content_wrap">
        <div class="content">
            <h1>I'd love to hear from you.</h1>
            <h3>Got a project you want me to work on?</h3>
            <h3>or maybe discuss the next startup idea?</h3>
        </div>
        <img src="giggle.gif" alt="hello"/>
    </div>
</section>