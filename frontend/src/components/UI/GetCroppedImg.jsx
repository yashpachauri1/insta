const GetCroppedImg = async (imageSrc, crop) => {
    const image = new Image();
    image.src = imageSrc;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = crop.width;
    canvas.height = crop.height;
  
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );
  
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            // Reject if blob is null
            console.error('Canvas is empty');
            return;
          }
          resolve(blob);
        },
        'image/jpeg', // Adjust the format as needed
        1 // Adjust the quality if needed
      );
    });
  };
  
export default GetCroppedImg;
