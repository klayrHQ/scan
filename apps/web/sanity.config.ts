import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {sanityTheme} from "./sanity.theme";
import {sanityDeskStructure} from "./sanity.deskStructure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s0i2hzjh"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export default defineConfig({
  basePath: "/studio",
  name: 'liskscan',
  title: 'liskscan',

  projectId,
  dataset,

  plugins: [deskTool({
    structure: sanityDeskStructure,
  }), visionTool()],
  theme: sanityTheme,
  schema: {
    types: schemaTypes,
  },
})
