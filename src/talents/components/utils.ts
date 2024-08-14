export function getProfileImage(img: string | undefined, id: number) {
  return `/images/talents/${img || `${id}.jpg`}`
}

