import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import Page$2 from "./DataList/_page.svelte.js";
import Page$1 from "./StatCard/_page.svelte.js";
const css = {
  code: ".page-container.svelte-5yag3r{max-width:1400px;margin:0 auto;padding:2rem;font-family:-apple-system, BlinkMacSystemFont, system-ui, sans-serif}.stocks-grid.svelte-5yag3r{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));padding:1rem}.news-grid.svelte-5yag3r{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:2rem}footer.svelte-5yag3r{text-align:center;margin-top:20px}.contact-info.svelte-5yag3r{font-size:0.8em;color:#666}@media(max-width: 1024px){.page-container.svelte-5yag3r{padding:1rem}}@media(max-width: 768px){.news-grid.svelte-5yag3r{grid-template-columns:1fr;gap:1.5rem}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import DataList from \\"./DataList/+page.svelte\\";\\n  import StatCard from \\"./StatCard/+page.svelte\\";\\n\\n  // export let data;\\n  // console.log(data)\\n<\/script>\\n\\n<div class=\\"page-container\\">\\n\\n  <div class=\\"stocks-grid\\">\\n    <StatCard title=\\"DAX\\" symbol=\\"%5EGDAXI\\" />\\n    <StatCard title=\\"NASDAQ\\" symbol=\\"%5EIXIC\\" />\\n    <StatCard title=\\"S&P500\\" symbol=\\"%5EGSPC\\" />\\n    <StatCard title=\\"ESTX50\\" symbol=\\"^STOXX50E\\" />\\n\\n  </div>\\n\\n  <div class=\\"news-grid\\">\\n    <DataList title=\\"💵 EUR/USD\\" feedURL=\\"https://www.ecb.europa.eu/rss/fxref-usd.html\\" numberOfItems=\\"1\\" length=\\"30\\"/>\\n    <DataList title=\\"💷 EUR/GBP\\" feedURL=\\"https://www.ecb.europa.eu/rss/fxref-gbp.html\\" numberOfItems=\\"1\\" length=\\"30\\"/>\\n    <DataList title=\\"💴 EUR/JPY\\" feedURL=\\"https://www.ecb.europa.eu/rss/fxref-jpy.html\\" numberOfItems=\\"1\\" length=\\"30\\"/>\\n\\n    <DataList title=\\"FINANZNACHRICHTEN.DE/NEWS\\" feedURL=\\"https://www.finanznachrichten.de/rss-aktien-nachrichten/\\"/>\\n    <DataList title=\\"WALLSTREET ONLINE\\" feedURL=\\"https://www.wallstreet-online.de/rss/nachrichten-alle.xml\\"/>\\n    <DataList title=\\"DER AKTIONÄR\\" feedURL=\\"https://www.deraktionaer.de/aktionaer-news.rss\\"/>\\n\\n\\n    <DataList title=\\"TAGESSCHAU\\" feedURL=\\"https://www.tagesschau.de/wirtschaft/index~rss2.xml\\"/>\\n    <DataList title=\\"SZ\\" feedURL=\\"https://rss.sueddeutsche.de/rss/Wirtschaft\\"/>\\n    <DataList title=\\"FINANZNACHRICHTEN.DE/ANALYSEN\\" feedURL=\\"https://www.finanznachrichten.de/rss-aktien-analysen\\"/>\\n\\n    \\n    <DataList title=\\"HANDELSBLATT\\" feedURL=\\"https://www.handelsblatt.com/contentexport/feed/finanzen\\"/>\\n    <DataList title=\\"FAZ\\" feedURL=\\"https://www.faz.net/rss/aktuell/finanzen/finanzmarkt\\"/>\\n    <DataList title=\\"WIWO\\" feedURL=\\"https://www.wiwo.de/contentexport/feed/rss/finanzen\\"/>\\n\\n    <DataList title=\\"BÖRSE FRANKFURT\\" feedURL=\\"https://api.boerse-frankfurt.de/v1/feeds/news.rss\\"/>\\n\\n    \\n    <!-- <DataList title=\\"FINANZEN.NET\\" feedURL=\\"https://www.finanzen.net/rss/news\\"/> -->\\n  </div>\\n\\n  <footer>\\n    <p class=\\"contact-info\\">\\n      ✉️ <a href=\\"mailto:tomi@crssnt.com\\">tomi@crssnt.com</a>\\n    </p>\\n  </footer>\\n</div>\\n\\n\\n<style>\\n  .page-container {\\n    max-width: 1400px;\\n    margin: 0 auto;\\n    padding: 2rem;\\n    font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;\\n  }\\n\\n  .stocks-grid {\\n    display: grid;\\n    gap: 1rem;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    padding: 1rem;\\n  }\\n\\n  .news-grid {\\n    display: grid;\\n    grid-template-columns: repeat(3, minmax(0, 1fr));\\n    gap: 2rem;\\n  }\\n\\n  footer {\\n    text-align: center; \\n    margin-top: 20px; \\n  }\\n\\n  .contact-info {\\n    font-size: 0.8em; \\n    color: #666; \\n  }\\n\\n  @media (max-width: 1024px) {\\n    .page-container {\\n      padding: 1rem;\\n    }\\n  }\\n\\n  @media (max-width: 768px) {\\n    .news-grid {\\n      grid-template-columns: 1fr;\\n      gap: 1.5rem;\\n    }\\n  }\\n\\n</style>\\n"],"names":[],"mappings":"AAoDE,6BAAgB,CACd,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,SAAS,CAAC,CAAC,UAC7D,CAEA,0BAAa,CACX,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,OAAO,CAAE,IACX,CAEA,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAChD,GAAG,CAAE,IACP,CAEA,oBAAO,CACL,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd,CAEA,2BAAc,CACZ,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IACT,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAgB,CACd,OAAO,CAAE,IACX,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,wBAAW,CACT,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,MACP,CACF"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page-container svelte-5yag3r"><div class="stocks-grid svelte-5yag3r">${validate_component(Page$1, "StatCard").$$render($$result, { title: "DAX", symbol: "%5EGDAXI" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "NASDAQ", symbol: "%5EIXIC" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "S&P500", symbol: "%5EGSPC" }, {}, {})} ${validate_component(Page$1, "StatCard").$$render($$result, { title: "ESTX50", symbol: "^STOXX50E" }, {}, {})}</div> <div class="news-grid svelte-5yag3r">${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "💵 EUR/USD",
      feedURL: "https://www.ecb.europa.eu/rss/fxref-usd.html",
      numberOfItems: "1",
      length: "30"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "💷 EUR/GBP",
      feedURL: "https://www.ecb.europa.eu/rss/fxref-gbp.html",
      numberOfItems: "1",
      length: "30"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "💴 EUR/JPY",
      feedURL: "https://www.ecb.europa.eu/rss/fxref-jpy.html",
      numberOfItems: "1",
      length: "30"
    },
    {},
    {}
  )} ${validate_component(Page$2, "DataList").$$render(
    $$result,
    {
      title: "FINANZNACHRICHTEN.DE/NEWS",
      feedURL: "https://www.finanznachrichten.de/rss-aktien-nachrichten/"
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
      title: "TAGESSCHAU",
      feedURL: "https://www.tagesschau.de/wirtschaft/index~rss2.xml"
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
      title: "FINANZNACHRICHTEN.DE/ANALYSEN",
      feedURL: "https://www.finanznachrichten.de/rss-aktien-analysen"
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
  )} </div> <footer class="svelte-5yag3r" data-svelte-h="svelte-1wp6jgm"><p class="contact-info svelte-5yag3r">✉️ <a href="mailto:tomi@crssnt.com">tomi@crssnt.com</a></p></footer> </div>`;
});
export {
  Page as default
};
