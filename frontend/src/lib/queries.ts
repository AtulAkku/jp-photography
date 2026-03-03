import { client } from "@/lib/sanity"

export async function getHomeData() {
  return await client.fetch(`
    {
      "hero": *[_type == "hero"][0]{
        headlines,
        subtitle,
        backgroundImage,
        videoUrl
      },
      "galleries": *[_type == "gallery" && featured == true]{
        _id,
        title,
        "slug": slug.current,
        coverImage
      },
      "testimonials": *[_type == "testimonial"]{
        _id,
        clientName,
        message,
        clientImage
      },
      "about": *[_type == "about"]{
        _id,
        name,
        bio,
        profileImage,
        instagram,
        facebook
      }
    }
  `)
}

export async function getGalleryWithCategories() {
  return await client.fetch(`
    *[_type == "gallery"]{
      _id,
      title,
      description,
      "slug": slug.current,
      category->{
        _id,
        title
      },
      media[]{
        ...,
        asset->
      }
    }
  `)
}

export async function getContactPageData() {
  return client.fetch(`
    *[_type == "contactPage"][0]{
      title,
      subtitle,
      coverImage,
      phone,
      email,
      whatsapp,
      locations,
      mapEmbedUrl
    }
  `)
}