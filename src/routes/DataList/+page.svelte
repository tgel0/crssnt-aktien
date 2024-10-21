<script>
  import { onMount } from "svelte";

  export let data = [];
  export let title = "";
  export let feedURL = "";

  onMount(async () => {
    const baseUrl = "https://us-central1-crssnt-test-1603789358418.cloudfunctions.net/crssntFeedParser/rss/"
    const response = await fetch(baseUrl + feedURL);
    const jsonData = await response.json();
    // console.log(data)
    // title = jsonData.title;
    data = jsonData.items.slice(0, 10);
  });

  function truncateDescription(description) {
    if (description.length > 20) {
      return description.substring(0, 30) + '...';
    }
    return description;
  }

</script>

<div class="list-container">
  <h2>{title}</h2>
  <ul>
    {#each data as item}
    <li>
      <a href={item.link} target="_blank" rel="noopener noreferrer"> 
        {item.title} - {truncateDescription(item.description)}
      </a>
    </li>
    {/each}
  </ul>
</div>
