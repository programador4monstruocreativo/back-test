import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Categoría de prueba',
    plural: 'Categorías de prueba',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Prueba',
    defaultColumns: ['name', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
  ],
}
