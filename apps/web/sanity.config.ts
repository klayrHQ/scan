import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'
import {sanityTheme} from "./sanity.theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s0i2hzjh"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export default defineConfig({
  basePath: "/studio",
  name: 'liskscan',
  title: 'liskscan',
  projectId,
  dataset,
  theme: sanityTheme,
  schema: {
    types: schemaTypes,
  },
})
