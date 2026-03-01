import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text'
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Image',
      type: 'image'
    })
  ]
})