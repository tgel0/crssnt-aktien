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
    padding: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }

  .title {
    font-weight: 600;
  }

  .price {
    text-align: right;
  }

  .change {
    text-align: right;
  }

  .positive {
    color: #16a34a;
  }

  .negative {
    color: #dc2626;
  }

  @media (max-width: 900px) { 
  .stock-container {
    grid-template-columns: 1fr;  /* Single column layout */
    min-width: 5rem;
    max-width: 1rem;  /* Fixed width for mobile */
  }

  .price, 
  .change {
    text-align: left; /* Align text to the left */
  }
}
</style>
