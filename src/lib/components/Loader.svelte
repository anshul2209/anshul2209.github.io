<style lang="scss">
    .loader{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .loading{
            margin-top: 10px;
            font-size: 24px;
        }
    }
</style>
<script>
    export let loaderText;
</script>
<div class="loader">
    <i class="fa fa-spinner fa-spin" style="font-size:108px"></i>
    <div class="loading">{loaderText || 'Loading...'}</div>
</div>