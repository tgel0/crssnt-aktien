<script>
  import { onMount } from "svelte";

  export let title;
  export let symbol;
  export let stockData = [];
  export let stockCurrentPrice;
  export let stockPreviousClose;
  export let stockPercentageChange;
  let isPositive = false;

  const fetchStockData = async () => {
    try {
      const response = await fetch(`/api/stocks/${symbol}`);
      const data = await response.json();
      stockCurrentPrice = data.stockData.currentPrice
      stockPreviousClose = data.stockData.previousClose
      stockPercentageChange = (((stockCurrentPrice - stockPreviousClose) / stockPreviousClose) * 100).toFixed(2);
      isPositive = stockPercentageChange >= 0;
    } catch (error) {
      console.error(`Error fetching ${title} stock data:`, error);
    }
  };
  
  onMount(fetchStockData);


</script>

<div class="stock-container">
  <div class="title">{title}</div>
  <div class="price">{stockCurrentPrice}</div>
  <div class="change" class:positive={isPositive} class:negative={!isPositive}>
    {isPositive ? '+' : ''}{stockPercentageChange}%
  </div>
</div>

<style>
  .stock-container {
    display: grid;
    grid-template-columns: 1fr; 
    padding: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    align-items: center;
    gap: 1rem;
    min-width: 5rem;
    max-width: 1rem; 
  }
  /* grid-template-columns: 1fr 1fr 1fr; */

  .title {
    font-weight: 600;
  }

  .price, 
  .change {
    text-align: left; /* Align text to the left */
  }

  .positive {
    color: #16a34a;
  }

  .negative {
    color: #dc2626;
  }
</style>
