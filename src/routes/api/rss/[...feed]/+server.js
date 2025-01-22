export const prerender = true;

export async function GET({ params, url }) {
    

    const feedUrl = params.feed;
    // const fullUrl = request.url;
    // const feedUrlStartIndex = fullUrl.indexOf('/api/rss/') + '/api/rss/'.length;
    // const feedUrl = fullUrl.substring(feedUrlStartIndex);
    // console.log("fullUrl:", fullUrl)

    // const feedUrl = url.searchParams.get('feed');
    // const numberOfItems = url.searchParams.get('numberOfItems');
    const numberOfItems = "10"
    
    try {

      // console.log(`https://us-central1-crssnt-test-1603789358418.cloudfunctions.net/crssntFeedParser/rss/${feedUrl}`)

      const response = await fetch(`https://us-central1-crssnt-test-1603789358418.cloudfunctions.net/crssntFeedParser/rss/${feedUrl}?numberOfItems=${numberOfItems}`);
      
      const data = await response.json();
      
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch RSS feed' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }