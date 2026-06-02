<script lang="ts">
	import { onMount } from 'svelte';
	import Post from './lib/Post.svelte';
  import TagList from './lib/TagList.svelte';
	let posts = $state([]);
	const  url = 'https://dummyjson.com/posts';
  let filteredPosts = $state([]);
  
  function getUniqueTagList(posts: any[]) {
    // get array of arrays of tags
    const allTags = posts.map(post => post.tags);
    // flatten array, array of strings
    const flatTags = allTags.flat();
    // get unique values
    const tagsSet = new Set(flatTags);
    
    return [...tagsSet];

  }
	async function getPosts(url:string) {
		const response = await fetch(url);
		return response.json();
	}

  function filterPosts(q, posts) {
    filteredPosts = posts.filter(post => post.tags.includes(q));
    console.log("filteredPosts:",filteredPosts);
  }

  function clickHandler(ev){
    console.log(ev.target);
    const q = ev.target.textContent;
    console.log(q);
    filterPosts(q, posts);
  }

  

  async function innit(){
    const data = await getPosts(url);
		posts = data.posts;
    filteredPosts = posts;
		console.log(data);

  }

	innit();
</script>

<h1>My Blog</h1>
<TagList onclick = {clickHandler} tags = {getUniqueTagList(posts)} />
<ul>
	{#each filteredPosts as blog}
		<Post post = {blog}/>
	{/each}
</ul>

<!-- {JSON.stringify(posts)} -->

<style>
	ul{
		list-style: none;
	}
	button {
		background-color: skyblue;
		border-radius: 1rem;
		border: none;
		padding: 1rem;
		
	}
</style>