import { defineType, defineField } from "sanity"

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Get in Touch"
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true }
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string"
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string"
    }),

    defineField({
      name: "whatsapp",
      title: "WhatsApp Number (without +)",
      type: "string"
    }),

    defineField({
      name: "locations",
      title: "Studio Locations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "city", title: "City Name", type: "string" },
            { name: "address", title: "Full Address", type: "text" }
          ]
        }
      ]
    }),

    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Paste iframe embed src URL only"
    })

  ]
})