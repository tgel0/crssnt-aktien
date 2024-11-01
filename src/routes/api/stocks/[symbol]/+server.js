export const prerender = true;

export async function GET({ params }) {

    const { symbol } = params;
    
    try {

      const response = await fetch(`https://us-central1-crssnt-test-1603789358418.cloudfunctions.net/crssntFeedParser/stocks/${symbol}`);
      
      const data = await response.json();
      
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch stock data' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }