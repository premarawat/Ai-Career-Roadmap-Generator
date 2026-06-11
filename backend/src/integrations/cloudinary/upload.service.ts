import multer from 'multer';
import { Request } from 'express';
import { extname } from 'path';

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req: Request, file, cb) => {
    const allowed = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
    const extension = extname(file.originalname).toLowerCase();
    if (!allowed.includes(extension)) {
      return cb(new Error('Unsupported file format')); 
    }
    cb(null, true);
  }
});
