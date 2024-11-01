const prerender = true;
async function GET({ params }) {
  const feedUrl = params.feed;
  try {
    const response = await fetch(`https://us-central1-crssnt-test-1603789358418.cloudfunctions.net/crssntFeedParser/rss/${feedUrl}?numberOfItems=10`);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch RSS feed" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
export {
  GET,
  prerender
};
