<script>
	export let title;
</script>
<style>
    header{
		background-color: #008073;
		color: white;
		font-size: 32px;
		padding: 16px;
    }
    @media (max-width: 425px){
		header{
			display: none;
		}
	}
</style>
<header>{title}</header>
