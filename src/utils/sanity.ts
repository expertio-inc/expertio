import { createClient } from "next-sanity"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
})

export async function getNavLinks() {
  const navLinks = await client.fetch(`
    *[_type == "NavLinks"] {
      link,
      slug,
    }
  `)

  return navLinks
}
