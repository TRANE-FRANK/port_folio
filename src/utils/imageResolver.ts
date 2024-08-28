// src/utils/imageResolver.ts
const images = import.meta.glob("/src/assets/images/projects/*", {
  eager: true,
})

export function resolverImage(name: string): string {
  const imagePath = `/src/assets/images/projects/${name}`
  const image = images[imagePath]
  if (image) {
    return (image as { default: string }).default || ""
  }
  return "https://via.placeholder.com/400"
}
