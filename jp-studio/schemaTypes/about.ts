import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Photographer Name',
      type: 'string'
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text'
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image'
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url'
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url'
    })
  ]
})