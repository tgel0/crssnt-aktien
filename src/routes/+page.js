export const prerender = true;

export async function load({ fetch }) {
  const buildInfoResponse = await fetch('/api/build-info');
  const { buildTime } = await buildInfoResponse.json();
  
  return {
    buildTime
  };
}