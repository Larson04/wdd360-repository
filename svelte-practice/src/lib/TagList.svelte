<script>
	let {tags = [], onclick} = $props();
</script>
<ul>
	{#each tags as tag}
		<li><button {onclick}>{tag}</button></li>
	{/each}
</ul>


<style>
	ul{
		list-style: none;
		display: flex;
		li{
			padding: .25rem;
			button{
				background-color: skyblue;
				border-radius: 1rem;
				padding: .5rem;
				border: none;
				&:hover{
					background-color: deepskyblue;
				}
				&:active{
					background-color: rebeccapurple;
					color: white;
				}
			}
		}
	}

</style>