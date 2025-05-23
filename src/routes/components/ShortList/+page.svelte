<script>
    import { onMount } from 'svelte';
  
    export let data = [];
    export let title = "";
    export let feedURL = "";
    export let numberOfItems = 6;
  
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
  
    function getRatingColor(title) {
        // Regular expression to find different ratings (Buy, Kaufen, Outperform, Market-Perform, Sell)
        const positiveRegex = /\b(buy|kaufen|outperform|overweight)\b/i; // Case-insensitive
        const neutralRegex = /\b(market-perform)\b/i; // Case-insensitive
        const negativeRegex = /\b(sell)\b/i; // Case-insensitive
  
        if (positiveRegex.test(title)) {
            return { bgColor: '#e0ffe0', textColor: '#008000' }; // Light green, dark green text
        } else if (neutralRegex.test(title)) {
            return { bgColor: '#f8f8f8', textColor: '#666666' }; // Light gray, dark gray text
        } else if (negativeRegex.test(title)) {
            return { bgColor: '#ffe0e0', textColor: '#800000' }; // Light red, dark red text
        } else {
            return { bgColor: '#f8f8f8', textColor: '#333333' }; // Light gray, dark gray text
        }
    }
  </script>
  
  <div class="list-container">
    <h2>{title}</h2>
    <div class="ticker-container">
        {#each data as item}
          {@const ratingColors = getRatingColor(item.title)}
            <a href={item.link} target="_blank" rel="noopener noreferrer" style="background-color: {ratingColors.bgColor}; color: {ratingColors.textColor};">
                {item.title}
            </a>
        {/each}
    </div>
  </div>
  
  <style>
    .list-container {
        width: 100%; /* Allow the list container to be as wide as its parent */
        margin: 0;
        padding: 0rem;
    }
  
    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #eaeaea;
    }
  
    .ticker-container {
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap to the next line */
        width: 100%; /* Allow the ticker container to be as wide as its parent */
        /* overflow-x: auto; */ /* No need for horizontal overflow anymore */
        gap: 0.5rem; /* Space between ticker items */
        padding: 0rem;
    }
  
    .ticker-container a {
        text-decoration: none;
        font-size: 0.95rem;
        line-height: 1.2;
        padding: 0.3rem; /* Added padding for a bit of space around each ticker item */
        border-radius: 4px; /* Rounded corners */
        white-space: nowrap;
        transition: background-color 0.3s ease;
    }
  </style>
  