export interface Gallery {
  _id: string
  title: string
  slug: string
  coverImage: any
}

export interface About {
  name: string
  bio: string
  profileImage: any
  instagram?: string
  facebook?: string
}

export interface Testimonial {
  _id: string
  clientName: string
  message: string
  clientImage?: any
}