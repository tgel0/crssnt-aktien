import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
/* empty css                                                  */
const css = {
  code: ".stat-card.svelte-ixwaes{border:1px solid #ccc;padding:20px;margin:10px;border-radius:5px;text-align:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  export let title = \\"\\";\\n  export let number = 0;\\n<\/script>\\n\\n<div class=\\"stat-card\\">\\n  <h3>{title}</h3>\\n  <p>{number}</p>\\n</div>\\n\\n<style>\\n  .stat-card {\\n    /* Add styling for the card here */\\n    border: 1px solid #ccc;\\n    padding: 20px;\\n    margin: 10px;\\n    border-radius: 5px;\\n    text-align: center;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAWE,wBAAW,CAET,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { number = 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0) $$bindings.number(number);
  $$result.css.add(css);
  return `<div class="stat-card svelte-ixwaes"><h3>${escape(title)}</h3> <p>${escape(number)}</p> </div>`;
});
export {
  Page as default
};
