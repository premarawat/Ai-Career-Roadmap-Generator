import cloudinary from '../../config/cloudinary';

export const uploadToCloudinary = async (buffer: Buffer, folder: string): Promise<{ url: string; publicId: string }> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder, resource_type: 'auto' }, (error, result) => {
      if (error || !result) {
        return reject(new Error('Cloudinary upload failed'));
      }
      resolve({ url: result.secure_url, publicId: result.public_id });
    });

    stream.end(buffer);
  });
};
