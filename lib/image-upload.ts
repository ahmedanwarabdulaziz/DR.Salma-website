// Image upload using ImgBB (free image hosting)
const IMGBB_API_KEY = '2c0d3c0d3c0d3c0d3c0d3c0d3c0d3c0d'; // You'll need to get your own API key

export async function uploadImageToImgBB(file: File): Promise<string> {
  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', IMGBB_API_KEY);

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return data.data.url;
    } else {
      throw new Error(data.error?.message || 'Upload failed');
    }
  } catch (error) {
    console.error('Error uploading to ImgBB:', error);
    // Return a placeholder image if upload fails
    return 'https://via.placeholder.com/800x400?text=Dr.+Salma+Blog';
  }
}

// Alternative: Upload to a different free service
export async function uploadImageToFreeService(file: File): Promise<string> {
  try {
    // Using a simple base64 approach for now
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return 'https://via.placeholder.com/800x400?text=Dr.+Salma+Blog';
  }
} 