import type { CollectionConfig } from 'payload'

export const Todos: CollectionConfig = {
  slug: 'todos',
  labels: {
    singular: 'Tarea',
    plural: 'Tareas',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
  ],
}
