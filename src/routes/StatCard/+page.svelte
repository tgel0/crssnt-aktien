<script>
  import { onMount } from "svelte";

  export let title;
  export let symbol;

  /** @type {any[]} */
  export let stockData = [];
  export let stockShortName;
  export let stockregularMarketPrice;
  export let stockpreviousClose;
  export let stockPercentageChange;
  let isPositive = false;

  const fetchStockData = async () => {
    try {
      const response = await fetch(`/api/stocks/${symbol}`);
      const data = await response.json();
      stockData = data;
      stockShortName = stockData.chart.result[0].meta.shortName
      stockregularMarketPrice = stockData.chart.result[0].meta.regularMarketPrice
      stockpreviousClose = stockData.chart.result[0].meta.previousClose
      stockPercentageChange = (((stockregularMarketPrice - stockpreviousClose) / stockpreviousClose) * 100).toFixed(2);
      isPositive = stockPercentageChange >= 0; 
      // console.log(stockData)
    } catch (error) {
      console.error(`Error fetching ${title} stock data:`, error);
    }
  };
  
  onMount(fetchStockData);


</script>

<div class="stock-container">
  <div class="title">{title}</div>
  <div class="price">{stockregularMarketPrice}</div>
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
</style>
