import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import Page$2 from "./components/DataList/_page.svelte.js";
import Page$1 from "./components/StatCard/_page.svelte.js";
const css = {
  code: ".page-container.svelte-1ag7ois{max-width:1400px;margin:0 auto;padding:2rem;font-family:-apple-system, BlinkMacSystemFont, system-ui, sans-serif}.stocks-grid.svelte-1ag7ois{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));padding:1rem}.stocks-grid.svelte-1ag7ois::-webkit-scrollbar{display:none}.stocks-grid > *{flex:0 0 250px}.news-grid.svelte-1ag7ois{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:2rem}footer.svelte-1ag7ois{text-align:center;margin-top:20px}.contact-info.svelte-1ag7ois{font-size:0.8em;color:#666}@media(max-width: 900px){.news-grid.svelte-1ag7ois{grid-template-columns:1fr;gap:0}}@media(max-width: 900px){.stocks-grid.svelte-1ag7ois{margin-left:-1rem;margin-right:-1rem;display:flex;overflow-x:auto;gap:1rem;padding:1rem;scrollbar-width:none;-ms-overflow-style:none}.stocks-grid.svelte-1ag7ois::-webkit-scrollbar{display:none}.stocks-grid.svelte-1ag7ois>*{flex:0 0 250px}.stocks-grid.svelte-1ag7ois>*:first-child{margin-left:0}.stocks-grid.svelte-1ag7ois>*:last-child{margin-right:0}.page-container.svelte-1ag7ois{padding:0}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import DataList from \\"./components/DataList/+page.svelte\\";\\n  import StatCard from \\"./components/StatCard/+page.svelte\\";\\n\\n<\/script>\\n\\n<div class=\\"page-container\\">\\n\\n  <div class=\\"stocks-grid\\">\\n    <StatCard title=\\"DAX\\" symbol=\\"dax\\" />\\n    <StatCard title=\\"NASDAQ\\" symbol=\\"nasdaq\\" />\\n    <StatCard title=\\"S&P500\\" symbol=\\"sp500\\" />\\n    <StatCard title=\\"EUROSTX50\\" symbol=\\"eurostoxx50\\" />\\n    <StatCard title=\\"DOW JONES\\" symbol=\\"dowjones\\" />\\n\\n  </div>\\n\\n  <div class=\\"stocks-grid\\">\\n    <StatCard title=\\"EUR/USD\\" symbol=\\"eurusd\\" />\\n    <StatCard title=\\"EUR/GBP\\" symbol=\\"eurgbp\\" />\\n    <StatCard title=\\"EUR/JPY\\" symbol=\\"eurjpy\\" />\\n    <StatCard title=\\"EUR/BTC\\" symbol=\\"btceur\\" />\\n    <StatCard title=\\"GOLD(USD)\\" symbol=\\"gold\\" />\\n  </div>\\n\\n  <div class=\\"news-grid\\">\\n    <!-- <DataList title=\\"💵 EUR/USD\\" feedURL=\\"https://www.ecb.europa.eu/rss/fxref-usd.html\\" numberOfItems=\\"1\\" length=\\"30\\"/>\\n    <DataList title=\\"💷 EUR/GBP\\" feedURL=\\"https://www.ecb.europa.eu/rss/fxref-gbp.html\\" numberOfItems=\\"1\\" length=\\"30\\"/>\\n    <DataList title=\\"💴 EUR/JPY\\" feedURL=\\"https://www.ecb.europa.eu/rss/fxref-jpy.html\\" numberOfItems=\\"1\\" length=\\"30\\"/> -->\\n\\n    <DataList title=\\"FINANZNACHRICHTEN.DE/NEWS\\" feedURL=\\"https://www.finanznachrichten.de/rss-aktien-nachrichten\\"/>\\n    <DataList title=\\"WALLSTREET ONLINE\\" feedURL=\\"https://www.wallstreet-online.de/rss/nachrichten-alle.xml\\"/>\\n    <DataList title=\\"DER AKTIONÄR\\" feedURL=\\"https://www.deraktionaer.de/aktionaer-news.rss\\"/>\\n\\n    <DataList title=\\"BÖRSENNEWS.DE\\" feedURL=\\"https://www.boersennews.de/service/news.rss\\"/>\\n    <DataList title=\\"TAGESSCHAU\\" feedURL=\\"https://www.tagesschau.de/wirtschaft/index~rss2.xml\\"/>\\n    <DataList title=\\"FINANZNACHRICHTEN.DE/ANALYSEN\\" feedURL=\\"https://www.finanznachrichten.de/rss-aktien-analysen\\" numberOfItems=\\"12\\"/>\\n\\n\\n    <DataList title=\\"MANAGER MAGAZIN\\" feedURL=\\"https://www.manager-magazin.de/news/index.rss\\"/>\\n    <DataList title=\\"CAPITAL\\" feedURL=\\"https://www.capital.de/feed/standard\\"/>\\n    <DataList title=\\"HANDELSBLATT\\" feedURL=\\"https://www.handelsblatt.com/contentexport/feed/finanzen\\"/>\\n\\n\\n    <DataList title=\\"🎙ALLES AUF AKTIEN\\" feedURL=\\"https://allesaufaktien.podigee.io/feed/mp3\\" numberOfItems=\\"7\\"/>\\n    <DataList title=\\"🎙OHNE AKTIEN WIRD SCHWER\\" feedURL=\\"https://feeds.megaphone.fm/PDS3666998460\\" numberOfItems=\\"7\\"/>\\n    <DataList title=\\"🎙MARKTGEFLÜSTER\\" feedURL=\\"https://feeds.megaphone.fm/FGH8365603623\\" numberOfItems=\\"7\\"/>    \\n\\n    <DataList title=\\"R/AKTIEN\\" feedURL=\\"https://www.reddit.com/r/Aktien/new.rss\\"/>\\n    <DataList title=\\"BOERSIA.DE\\" feedURL=\\"https://www.boersia.de/feed/atom\\"/>\\n        \\n    <DataList title=\\"SZ\\" feedURL=\\"https://rss.sueddeutsche.de/rss/Wirtschaft\\"/>\\n    <DataList title=\\"FAZ\\" feedURL=\\"https://www.faz.net/rss/aktuell/finanzen/finanzmarkt\\"/>\\n    <DataList title=\\"WIWO\\" feedURL=\\"https://www.wiwo.de/contentexport/feed/rss/finanzen\\"/>\\n\\n\\n    <DataList title=\\"BÖRSE FRANKFURT\\" feedURL=\\"https://api.boerse-frankfurt.de/v1/feeds/news.rss\\"/>\\n\\n    \\n    <!-- <DataList title=\\"FINANZEN.NET\\" feedURL=\\"https://www.finanzen.net/rss/news\\"/> -->\\n  </div>\\n\\n  <footer>\\n    <p class=\\"contact-info\\">\\n      ✉️ <a href=\\"mailto:tomi@crssnt.com\\">tomi@crssnt.com</a>\\n    </p>\\n  </footer>\\n</div>\\n\\n\\n<style>\\n  .page-container {\\n    max-width: 1400px;\\n    margin: 0 auto;\\n    padding: 2rem;\\n    font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;\\n  }\\n\\n  .stocks-grid {\\n    display: grid;\\n    gap: 1rem;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    padding: 1rem;\\n  }\\n\\n  /* Hide scrollbar for Chrome/Safari/Opera */\\n  .stocks-grid::-webkit-scrollbar {\\n      display: none;\\n  }\\n\\n  /* Prevent StatCards from shrinking */\\n  :global(.stocks-grid > *) {\\n    flex: 0 0 250px; /* Don't grow, don't shrink, fixed width */\\n}\\n\\n  .news-grid {\\n    display: grid;\\n    grid-template-columns: repeat(3, minmax(0, 1fr));\\n    gap: 2rem;\\n  }\\n\\n  footer {\\n    text-align: center; \\n    margin-top: 20px; \\n  }\\n\\n  .contact-info {\\n    font-size: 0.8em; \\n    color: #666; \\n  }\\n\\n  @media (max-width: 900px) {\\n    .news-grid {\\n      grid-template-columns: 1fr;\\n      gap: 0;\\n    }\\n  }\\n\\n  @media (max-width: 900px) {\\n  .stocks-grid {\\n    margin-left: -1rem;\\n    margin-right: -1rem;\\n    display: flex;\\n    overflow-x: auto;\\n    gap: 1rem;\\n    padding: 1rem;\\n    /* Hide scrollbar for cleaner look but maintain functionality */\\n    scrollbar-width: none;  /* Firefox */\\n    -ms-overflow-style: none;  /* Internet Explorer/Edge */\\n  }\\n  \\n  /* Hide scrollbar for Chrome/Safari */\\n  .stocks-grid::-webkit-scrollbar {\\n    display: none;\\n  }\\n  \\n  /* Prevent content from wrapping */\\n  .stocks-grid > :global(*) {\\n    flex: 0 0 250px; /* Don't grow, don't shrink, fixed width */\\n  }\\n\\n  .stocks-grid > :global(*:first-child) {\\n    margin-left: 0;\\n  }\\n  \\n  .stocks-grid > :global(*:last-child) {\\n    margin-right: 0;\\n  }\\n  .page-container {\\n    padding: 0;\\n  }\\n}\\n\\n</style>\\n"],"names":[],"mappings":"AAuEE,8BAAgB,CACd,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,SAAS,CAAC,CAAC,UAC7D,CAEA,2BAAa,CACX,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,OAAO,CAAE,IACX,CAGA,2BAAY,mBAAoB,CAC5B,OAAO,CAAE,IACb,CAGQ,gBAAkB,CACxB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,KACd,CAEE,yBAAW,CACT,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAChD,GAAG,CAAE,IACP,CAEA,qBAAO,CACL,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd,CAEA,4BAAc,CACZ,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IACT,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAW,CACT,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,CACP,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CAC1B,2BAAa,CACX,WAAW,CAAE,KAAK,CAClB,YAAY,CAAE,KAAK,CACnB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CAEb,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IACtB,CAGA,2BAAY,mBAAoB,CAC9B,OAAO,CAAE,IACX,CAGA,2BAAY,CAAW,CAAG,CACxB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,KACZ,CAEA,2BAAY,CAAW,aAAe,CACpC,WAAW,CAAE,CACf,CAEA,2BAAY,CAAW,YAAc,CACnC,YAAY,CAAE,CAChB,CACA,8BAAgB,CACd,OAAO,CAAE,CACX,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page-container svelte-1ag7ois"><div class="stocks-grid svelte-1ag7ois">${validate_component(Page$1, "StatCard").$$render($$result, { title: "DAX", symbol: "dax" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "NASDAQ", symbol: "nasdaq" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "S&P500", symbol: "sp500" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render(
    $$result,
    {
      title: "EUROSTX50",
      symbol: "eurostoxx50"
    },
    {},
    {}
  )} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "DOW JONES", symbol: "dowjones" }, {}, {})}</div> <div class="stocks-grid svelte-1ag7ois">${validate_component(Page$1, "StatCard").$$render($$result, { title: "EUR/USD", symbol: "eurusd" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "EUR/GBP", symbol: "eurgbp" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "EUR/JPY", symbol: "eurjpy" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "EUR/BTC", symbol: "btceur" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "GOLD(USD)", symbol: "gold" }, {}, {})}</div> <div class="news-grid svelte-1ag7ois"> ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "FINANZNACHRICHTEN.DE/NEWS",
      feedURL: "https://www.finanznachrichten.de/rss-aktien-nachrichten"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "WALLSTREET ONLINE",
      feedURL: "https://www.wallstreet-online.de/rss/nachrichten-alle.xml"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "DER AKTIONÄR",
      feedURL: "https://www.deraktionaer.de/aktionaer-news.rss"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "BÖRSENNEWS.DE",
      feedURL: "https://www.boersennews.de/service/news.rss"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "TAGESSCHAU",
      feedURL: "https://www.tagesschau.de/wirtschaft/index~rss2.xml"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "FINANZNACHRICHTEN.DE/ANALYSEN",
      feedURL: "https://www.finanznachrichten.de/rss-aktien-analysen",
      numberOfItems: "12"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "MANAGER MAGAZIN",
      feedURL: "https://www.manager-magazin.de/news/index.rss"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "CAPITAL",
      feedURL: "https://www.capital.de/feed/standard"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "HANDELSBLATT",
      feedURL: "https://www.handelsblatt.com/contentexport/feed/finanzen"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "🎙ALLES AUF AKTIEN",
      feedURL: "https://allesaufaktien.podigee.io/feed/mp3",
      numberOfItems: "7"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "🎙OHNE AKTIEN WIRD SCHWER",
      feedURL: "https://feeds.megaphone.fm/PDS3666998460",
      numberOfItems: "7"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "🎙MARKTGEFLÜSTER",
      feedURL: "https://feeds.megaphone.fm/FGH8365603623",
      numberOfItems: "7"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "R/AKTIEN",
      feedURL: "https://www.reddit.com/r/Aktien/new.rss"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "BOERSIA.DE",
      feedURL: "https://www.boersia.de/feed/atom"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "SZ",
      feedURL: "https://rss.sueddeutsche.de/rss/Wirtschaft"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "FAZ",
      feedURL: "https://www.faz.net/rss/aktuell/finanzen/finanzmarkt"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "WIWO",
      feedURL: "https://www.wiwo.de/contentexport/feed/rss/finanzen"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "BÖRSE FRANKFURT",
      feedURL: "https://api.boerse-frankfurt.de/v1/feeds/news.rss"
    },
    {},
    {}
  )} </div> <footer class="svelte-1ag7ois" data-svelte-h="svelte-1wp6jgm"><p class="contact-info svelte-1ag7ois">✉️ <a href="mailto:tomi@crssnt.com">tomi@crssnt.com</a></p></footer> </div>`;
});
export {
  Page as default
};
