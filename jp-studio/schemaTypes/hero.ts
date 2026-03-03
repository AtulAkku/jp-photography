import { defineType, defineField } from "sanity"

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "headlines",
      title: "Hero Headlines",
      type: "array",
      of: [
        {
          type: "string",
        }
      ],
      validation: (Rule) => Rule.min(1).required(),
      description: "Add multiple headline lines."
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text"
    }),

    defineField({
      name: "backgroundImage",
      title: "Fallback Background Image",
      type: "image",
      options: { hotspot: true }
    }),

    defineField({
      name: "videoUrl",
      title: "Background Video URL",
      type: "url"
    })
  ]
})