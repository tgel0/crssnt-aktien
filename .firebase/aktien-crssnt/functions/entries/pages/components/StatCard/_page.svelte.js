import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: ".stock-container.svelte-1e3vept{padding:1rem;border:1px solid #eaeaea;border-radius:4px;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:1rem}.title.svelte-1e3vept{font-weight:600}.price.svelte-1e3vept{text-align:right}.change.svelte-1e3vept{text-align:right}.positive.svelte-1e3vept{color:#16a34a}.negative.svelte-1e3vept{color:#dc2626}@media(max-width: 900px){.stock-container.svelte-1e3vept{grid-template-columns:1fr;min-width:5rem;max-width:1rem}.price.svelte-1e3vept,.change.svelte-1e3vept{text-align:left}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n\\n  export let title;\\n  export let symbol;\\n  export let stockData = [];\\n  export let stockCurrentPrice;\\n  export let stockPreviousClose;\\n  export let stockPercentageChange;\\n  let isPositive = false;\\n\\n  const fetchStockData = async () => {\\n    try {\\n      const response = await fetch(`/api/stocks/${symbol}`);\\n      const data = await response.json();\\n      stockCurrentPrice = data.stockData.currentPrice\\n      stockPreviousClose = data.stockData.previousClose\\n      stockPercentageChange = (((stockCurrentPrice - stockPreviousClose) / stockPreviousClose) * 100).toFixed(2);\\n      isPositive = stockPercentageChange >= 0;\\n    } catch (error) {\\n      console.error(`Error fetching ${title} stock data:`, error);\\n    }\\n  };\\n  \\n  onMount(fetchStockData);\\n\\n\\n<\/script>\\n\\n<div class=\\"stock-container\\">\\n  <div class=\\"title\\">{title}</div>\\n  <div class=\\"price\\">{stockCurrentPrice}</div>\\n  <div class=\\"change\\" class:positive={isPositive} class:negative={!isPositive}>\\n    {isPositive ? \'+\' : \'\'}{stockPercentageChange}%\\n  </div>\\n</div>\\n\\n<style>\\n  .stock-container {\\n    padding: 1rem;\\n    border: 1px solid #eaeaea;\\n    border-radius: 4px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\\n  .title {\\n    font-weight: 600;\\n  }\\n\\n  .price {\\n    text-align: right;\\n  }\\n\\n  .change {\\n    text-align: right;\\n  }\\n\\n  .positive {\\n    color: #16a34a;\\n  }\\n\\n  .negative {\\n    color: #dc2626;\\n  }\\n\\n  @media (max-width: 900px) { \\n  .stock-container {\\n    grid-template-columns: 1fr;  /* Single column layout */\\n    min-width: 5rem;\\n    max-width: 1rem;  /* Fixed width for mobile */\\n  }\\n\\n  .price, \\n  .change {\\n    text-align: left; /* Align text to the left */\\n  }\\n}\\n</style>\\n"],"names":[],"mappings":"AAsCE,+BAAiB,CACf,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,qBAAO,CACL,WAAW,CAAE,GACf,CAEA,qBAAO,CACL,UAAU,CAAE,KACd,CAEA,sBAAQ,CACN,UAAU,CAAE,KACd,CAEA,wBAAU,CACR,KAAK,CAAE,OACT,CAEA,wBAAU,CACR,KAAK,CAAE,OACT,CAEA,MAAO,YAAY,KAAK,CAAE,CAC1B,+BAAiB,CACf,qBAAqB,CAAE,GAAG,CAC1B,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IACb,CAEA,qBAAM,CACN,sBAAQ,CACN,UAAU,CAAE,IACd,CACF"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { symbol } = $$props;
  let { stockData = [] } = $$props;
  let { stockCurrentPrice } = $$props;
  let { stockPreviousClose } = $$props;
  let { stockPercentageChange } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0) $$bindings.symbol(symbol);
  if ($$props.stockData === void 0 && $$bindings.stockData && stockData !== void 0) $$bindings.stockData(stockData);
  if ($$props.stockCurrentPrice === void 0 && $$bindings.stockCurrentPrice && stockCurrentPrice !== void 0) $$bindings.stockCurrentPrice(stockCurrentPrice);
  if ($$props.stockPreviousClose === void 0 && $$bindings.stockPreviousClose && stockPreviousClose !== void 0) $$bindings.stockPreviousClose(stockPreviousClose);
  if ($$props.stockPercentageChange === void 0 && $$bindings.stockPercentageChange && stockPercentageChange !== void 0) $$bindings.stockPercentageChange(stockPercentageChange);
  $$result.css.add(css);
  return `<div class="stock-container svelte-1e3vept"><div class="title svelte-1e3vept">${escape(title)}</div> <div class="price svelte-1e3vept">${escape(stockCurrentPrice)}</div> <div class="${[
    "change svelte-1e3vept",
    " negative"
  ].join(" ").trim()}">${escape("")}${escape(stockPercentageChange)}%</div> </div>`;
});
export {
  Page as default
};
