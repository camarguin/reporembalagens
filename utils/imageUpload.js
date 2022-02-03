// import axios from "axios"

export const imageUpload = async (img) => {
  const url = 'https://api.imgbb.com/1/upload'
  const formData = new FormData()
  formData.append('key', '740ea5b60389fceed5ccee68cb5229d8')
  formData.append("image", img)

  const settings = {
    method: "POST",
    body: formData
  }

  try {
    const response = await fetch(url, settings)
    const data = await response.json()
    return data
  } catch (err) {
    return console.log(err)
  }
  // for (const item of img) {
  //   console.log('item:', item)
  // }
}