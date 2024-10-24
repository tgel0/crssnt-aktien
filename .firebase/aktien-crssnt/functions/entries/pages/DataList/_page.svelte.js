import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: ".list-container.svelte-2vmjjk{max-width:800px;margin:0 auto;padding:1rem}h2.svelte-2vmjjk{font-size:1.25rem;font-weight:600;margin-bottom:1rem;padding-bottom:0.5rem;border-bottom:1px solid #eaeaea}ul.svelte-2vmjjk{list-style:none;padding:0;margin:0}li.svelte-2vmjjk{padding:0.5rem 0;border-bottom:1px solid #eaeaea}a.svelte-2vmjjk{color:#333;text-decoration:none;font-size:0.95rem;line-height:1.2}@media(max-width: 768px){.list-container.svelte-2vmjjk{padding:0.75rem}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n\\n  export let data = [];\\n  export let title = \\"\\";\\n  export let feedURL = \\"\\";\\n  export let numberOfItems = 10\\n  export let length = 90;\\n\\n  onMount(async () => {\\n    const baseUrl = \\"https://us-central1-crssnt-test-1603789358418.cloudfunctions.net/crssntFeedParser/rss/\\"\\n    const response = await fetch(baseUrl + feedURL);\\n    const jsonData = await response.json();\\n    // console.log(data)\\n    // title = jsonData.title;\\n    data = jsonData.items.slice(0, numberOfItems);\\n  });\\n\\n  function truncateText(text, length) {\\n    if (text.length > length) {\\n      return text.substring(0, length);  // + '...'\\n    }\\n    return text;\\n  }\\n\\n<\/script>\\n\\n<div class=\\"list-container\\">\\n  <h2>{title}</h2>\\n  <ul>\\n    {#each data as item}\\n    <li>\\n      <a href={item.link} target=\\"_blank\\" rel=\\"noopener noreferrer\\"> \\n        {truncateText(item.title, length)} <!-- - {truncateText(item.description)} -->\\n      </a>\\n    </li>\\n    {/each}\\n  </ul>\\n</div>\\n\\n<style>\\n  .list-container {\\n    max-width: 800px;\\n    margin: 0 auto;\\n    padding: 1rem;\\n  }\\n\\n  h2 {\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n    margin-bottom: 1rem;\\n    padding-bottom: 0.5rem;\\n    border-bottom: 1px solid #eaeaea;\\n  }\\n\\n  ul {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n  }\\n\\n  li {\\n    padding: 0.5rem 0;\\n    border-bottom: 1px solid #eaeaea;\\n  }\\n\\n  a {\\n    color: #333;\\n    text-decoration: none;\\n    font-size: 0.95rem;\\n    line-height: 1.2;\\n  }\\n\\n  @media (max-width: 768px) {\\n    .list-container {\\n      padding: 0.75rem;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AAyCE,6BAAgB,CACd,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IACX,CAEA,gBAAG,CACD,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC3B,CAEA,gBAAG,CACD,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CAEA,gBAAG,CACD,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC3B,CAEA,eAAE,CACA,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GACf,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAgB,CACd,OAAO,CAAE,OACX,CACF"}`
};
function truncateText(text, length) {
  if (text.length > length) {
    return text.substring(0, length);
  }
  return text;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let { title = "" } = $$props;
  let { feedURL = "" } = $$props;
  let { numberOfItems = 10 } = $$props;
  let { length = 90 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.feedURL === void 0 && $$bindings.feedURL && feedURL !== void 0) $$bindings.feedURL(feedURL);
  if ($$props.numberOfItems === void 0 && $$bindings.numberOfItems && numberOfItems !== void 0) $$bindings.numberOfItems(numberOfItems);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0) $$bindings.length(length);
  $$result.css.add(css);
  return `<div class="list-container svelte-2vmjjk"><h2 class="svelte-2vmjjk">${escape(title)}</h2> <ul class="svelte-2vmjjk">${each(data, (item) => {
    return `<li class="svelte-2vmjjk"><a${add_attribute("href", item.link, 0)} target="_blank" rel="noopener noreferrer" class="svelte-2vmjjk">${escape(truncateText(item.title, length))} </a> </li>`;
  })}</ul> </div>`;
});
export {
  Page as default
};
