import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".stock-container.svelte-1vgvwwr{padding:1rem;border:1px solid #eaeaea;border-radius:4px;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:1rem}.title.svelte-1vgvwwr{font-weight:600}.price.svelte-1vgvwwr{text-align:right}.change.svelte-1vgvwwr{text-align:right}.positive.svelte-1vgvwwr{color:#16a34a}.negative.svelte-1vgvwwr{color:#dc2626}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n\\n  export let title;\\n  export let symbol;\\n\\n  /** @type {any[]} */\\n  export let stockData = [];\\n  export let stockShortName;\\n  export let stockregularMarketPrice;\\n  export let stockpreviousClose;\\n  export let stockPercentageChange;\\n  let isPositive = false;\\n\\n  const fetchStockData = async () => {\\n    try {\\n      const response = await fetch(`/api/stocks/${symbol}`);\\n      const data = await response.json();\\n      stockData = data;\\n      stockShortName = stockData.chart.result[0].meta.shortName\\n      stockregularMarketPrice = stockData.chart.result[0].meta.regularMarketPrice\\n      stockpreviousClose = stockData.chart.result[0].meta.previousClose\\n      stockPercentageChange = (((stockregularMarketPrice - stockpreviousClose) / stockpreviousClose) * 100).toFixed(2);\\n      isPositive = stockPercentageChange >= 0; \\n      // console.log(stockData)\\n    } catch (error) {\\n      console.error(`Error fetching ${title} stock data:`, error);\\n    }\\n  };\\n  \\n  onMount(fetchStockData);\\n\\n\\n<\/script>\\n\\n<div class=\\"stock-container\\">\\n  <div class=\\"title\\">{title}</div>\\n  <div class=\\"price\\">{stockregularMarketPrice}</div>\\n  <div class=\\"change\\" class:positive={isPositive} class:negative={!isPositive}>\\n    {isPositive ? \'+\' : \'\'}{stockPercentageChange}%\\n  </div>\\n</div>\\n\\n<style>\\n  .stock-container {\\n    padding: 1rem;\\n    border: 1px solid #eaeaea;\\n    border-radius: 4px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\\n  .title {\\n    font-weight: 600;\\n  }\\n\\n  .price {\\n    text-align: right;\\n  }\\n\\n  .change {\\n    text-align: right;\\n  }\\n\\n  .positive {\\n    color: #16a34a;\\n  }\\n\\n  .negative {\\n    color: #dc2626;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4CE,+BAAiB,CACf,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,qBAAO,CACL,WAAW,CAAE,GACf,CAEA,qBAAO,CACL,UAAU,CAAE,KACd,CAEA,sBAAQ,CACN,UAAU,CAAE,KACd,CAEA,wBAAU,CACR,KAAK,CAAE,OACT,CAEA,wBAAU,CACR,KAAK,CAAE,OACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { symbol } = $$props;
  let { stockData = [] } = $$props;
  let { stockShortName } = $$props;
  let { stockregularMarketPrice } = $$props;
  let { stockpreviousClose } = $$props;
  let { stockPercentageChange } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0) $$bindings.symbol(symbol);
  if ($$props.stockData === void 0 && $$bindings.stockData && stockData !== void 0) $$bindings.stockData(stockData);
  if ($$props.stockShortName === void 0 && $$bindings.stockShortName && stockShortName !== void 0) $$bindings.stockShortName(stockShortName);
  if ($$props.stockregularMarketPrice === void 0 && $$bindings.stockregularMarketPrice && stockregularMarketPrice !== void 0) $$bindings.stockregularMarketPrice(stockregularMarketPrice);
  if ($$props.stockpreviousClose === void 0 && $$bindings.stockpreviousClose && stockpreviousClose !== void 0) $$bindings.stockpreviousClose(stockpreviousClose);
  if ($$props.stockPercentageChange === void 0 && $$bindings.stockPercentageChange && stockPercentageChange !== void 0) $$bindings.stockPercentageChange(stockPercentageChange);
  $$result.css.add(css);
  return `<div class="stock-container svelte-1vgvwwr"><div class="title svelte-1vgvwwr">${escape(title)}</div> <div class="price svelte-1vgvwwr">${escape(stockregularMarketPrice)}</div> <div class="${[
    "change svelte-1vgvwwr",
    " negative"
  ].join(" ").trim()}">${escape("")}${escape(stockPercentageChange)}%</div> </div>`;
});
export {
  Page as default
};
