import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/DefaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'day-one-with-sanity',

  projectId: 'fyp5rw86',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), defaultDocumentNode],

  schema: {
    types: schemaTypes,
  },
})
