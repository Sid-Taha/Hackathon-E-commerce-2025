import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { comment } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, comment],
}
