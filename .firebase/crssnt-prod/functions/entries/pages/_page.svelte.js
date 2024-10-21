import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import Page$1 from "./DataList/_page.svelte.js";
/* empty css                                               */
const css = {
  code: ".container.svelte-10l94pw{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:24px}@media(max-width: 768px){.container.svelte-10l94pw{grid-template-columns:1fr}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import DataList from \\"./DataList/+page.svelte\\";\\n  import StatCard from \\"./StatCard/+page.svelte\\";\\n<\/script>\\n\\n<div class=\\"container\\">\\n  <DataList title=\\"WALLSTREET ONLINE\\" feedURL=\\"https://www.wallstreet-online.de/rss/nachrichten-alle.xml\\"/>\\n  <DataList title=\\"WIWO\\" feedURL=\\"https://www.wiwo.de/contentexport/feed/rss/finanzen\\"/>\\n  <DataList title=\\"FAZ\\" feedURL=\\"https://www.faz.net/rss/aktuell/finanzen/finanzmarkt\\"/>\\n  <DataList title=\\"HANDELSBLATT\\" feedURL=\\"https://www.handelsblatt.com/contentexport/feed/finanzen\\"/>\\n  <DataList title=\\"DER AKTIONÄR\\" feedURL=\\"https://www.deraktionaer.de/aktionaer-news.rss\\"/>\\n  <DataList title=\\"FINANZNACHRICHTEN.DE\\" feedURL=\\"https://www.finanznachrichten.de/rss-aktien-nachrichten/\\"/>\\n  \\n  <!-- <DataList title=\\"FINANZEN.NET\\" feedURL=\\"https://www.finanzen.net/rss/news\\"/> -->\\n</div>\\n\\n<!-- <div class=\\"stats-container\\">\\n  <StatCard title=\\"Stat 1\\" number={123} />\\n  <StatCard title=\\"Stat 2\\" number={456} />\\n  <StatCard title=\\"Stat 3\\" number={789} />\\n</div> -->\\n\\n\\n<style>\\n  .container {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-gap: 24px;\\n  }\\n\\n  @media (max-width: 768px) {\\n    .container {\\n      grid-template-columns: 1fr;\\n    }\\n  }\\n\\n</style>\\n"],"names":[],"mappings":"AAwBE,yBAAW,CACT,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,QAAQ,CAAE,IACZ,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAW,CACT,qBAAqB,CAAE,GACzB,CACF"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-10l94pw">${validate_component(Page$1, "DataList").$$render(
    $$result,
    {
      title: "WALLSTREET ONLINE",
      feedURL: "https://www.wallstreet-online.de/rss/nachrichten-alle.xml"
    },
    {},
    {}
  )} ${validate_component(Page$1, "DataList").$$render(
    $$result,
    {
      title: "WIWO",
      feedURL: "https://www.wiwo.de/contentexport/feed/rss/finanzen"
    },
    {},
    {}
  )} ${validate_component(Page$1, "DataList").$$render(
    $$result,
    {
      title: "FAZ",
      feedURL: "https://www.faz.net/rss/aktuell/finanzen/finanzmarkt"
    },
    {},
    {}
  )} ${validate_component(Page$1, "DataList").$$render(
    $$result,
    {
      title: "HANDELSBLATT",
      feedURL: "https://www.handelsblatt.com/contentexport/feed/finanzen"
    },
    {},
    {}
  )} ${validate_component(Page$1, "DataList").$$render(
    $$result,
    {
      title: "DER AKTIONÄR",
      feedURL: "https://www.deraktionaer.de/aktionaer-news.rss"
    },
    {},
    {}
  )} ${validate_component(Page$1, "DataList").$$render(
    $$result,
    {
      title: "FINANZNACHRICHTEN.DE",
      feedURL: "https://www.finanznachrichten.de/rss-aktien-nachrichten/"
    },
    {},
    {}
  )} </div> `;
});
export {
  Page as default
};
