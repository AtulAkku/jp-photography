import { getGalleryWithCategories } from "@/lib/queries"
import GalleryContent from "./GalleryContent"

export default async function Page() {
  const galleries = await getGalleryWithCategories()
  return <GalleryContent galleries={galleries} />
}