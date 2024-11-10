<script>
  import { onMount } from "svelte";

  export let data = [];
  export let title = "";
  export let feedURL = "";
  export let numberOfItems = 10
  export let length = 90;

  const fetchDataList = async () => {
    try {
      const response = await fetch(`/api/rss/${feedURL}`);
      const jsonData = await response.json();
      data = jsonData.items.slice(0, numberOfItems);
    } catch (error) {
      console.error(`Error fetching ${feedURL} feed data:`, error);
    }
  };
  
  onMount(fetchDataList);

  function truncateText(text, length) {
    if (text.length > length) {
      return text.substring(0, length);  // + '...'
    }
    return text;
  }

</script>

<div class="list-container">
  <h2>{title}</h2>
  <ul>
    {#each data as item}
    <li>
      <a href={item.link} target="_blank" rel="noopener noreferrer"> 
        {item.title} <!-- {truncateText(item.title, length)}  - {truncateText(item.description)} -->
      </a>
    </li>
    {/each}
  </ul>
</div>

<style>
  .list-container {
    max-width: 800px;
    margin: 0;
    padding: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eaeaea;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.4rem 0;
    border-bottom: 1px solid #eaeaea;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 0.95rem;
    line-height: 1.2;
  }
</style>