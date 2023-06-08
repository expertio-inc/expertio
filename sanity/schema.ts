import { type SchemaTypeDefinition } from "sanity"

import navLinks from "./schemas/nav-links"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navLinks],
}
