import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    // defineField({
    //   name: 'images',
    //   title: 'Gallery Images',
    //   type: 'array',
    //   of: [{ type: 'image', options: { hotspot: true } }]
    // }),
    defineField({
        name: 'media',
        title: 'Gallery Media (Images or Short Videos)',
        type: 'array',
        of: [{
                type: 'image',
                options: { hotspot: true }
            },
            {
                type: 'file',
                name: 'video',
                title: 'Short Video (Max 20MB)',
                options: {
                    accept: 'video/mp4'
                }
            }
        ]
    }),    
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    }),
    defineField({
        name: 'highlightVideo',
        title: 'Highlight Video (YouTube/Vimeo URL)',
        type: 'url',
        description: 'Upload video to YouTube (Unlisted) and paste link here',
        validation: Rule =>
            Rule.uri({
                scheme: ['http', 'https'],
            })
    })
  ]
})