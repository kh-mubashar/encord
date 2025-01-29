import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchLandingPage() {
  const entry = await client.getEntries({
    content_type: 'landingPage',
    include: 2, // Fetch linked entries (e.g., features)
  });

  return entry.items[0]?.fields;
}
