import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../chunks/ssr.js";
function truncateDescription(description) {
  if (description.length > 20) {
    return description.substring(0, 30) + "...";
  }
  return description;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  let { title = "" } = $$props;
  let { feedURL = "" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.feedURL === void 0 && $$bindings.feedURL && feedURL !== void 0) $$bindings.feedURL(feedURL);
  return `<div class="list-container"><h2>${escape(title)}</h2> <ul>${each(data, (item) => {
    return `<li><a${add_attribute("href", item.link, 0)} target="_blank" rel="noopener noreferrer">${escape(item.title)} - ${escape(truncateDescription(item.description))}</a> </li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
