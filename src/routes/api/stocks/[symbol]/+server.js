export async function GET({ params }) {
    const { symbol } = params;
    
    try {
      const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`);
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