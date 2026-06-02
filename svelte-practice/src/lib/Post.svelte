<script>
	import TagList from './TagList.svelte';
	let {post} = $props();
</script>
<li>
	<h2>{post.title}</h2>
	<TagList tags = {post.tags} onclick={""}/>
	<p>{post.body}</p>
	{#if post.reactions.likes > post.reactions.dislikes}👍{/if}	
</li>

	<style>
		li{
			border-bottom: solid 2px seagreen;
		}
		h2{
			color: seagreen;
		}

		p{
			color: teal;
		}
	</style>