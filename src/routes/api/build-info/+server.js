export const prerender = true;

export function GET() {
  return new Response(
    JSON.stringify({
      buildTime: new Date().toISOString()
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}