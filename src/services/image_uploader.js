const url = process.env.REACT_APP_CLOUDINARY_URL;

export async function uploadImage(file) {
  const formData = new FormData();
  let imageUrl;
  formData.append('file', file);
  formData.append('upload_preset', 'devcard-profile');
  await fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      imageUrl = data.secure_url;
    })
    .catch(console.error);
  return imageUrl;
}
