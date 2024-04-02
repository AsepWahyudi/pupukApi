import express from "express";
import uploadfile from "../controller/uploadfile-controller.js"; 
import multer from "multer";
 
const uploads = multer({ dest: 'uploads/' });
const uploadscsv = multer({ dest: 'uploads/csv/' });

const publicRouter = new express.Router(); 
publicRouter.post('/api/upload', uploads.single('file'), uploadfile.upload); 
publicRouter.post('/api/upload/harian/tebus', uploads.single('file'), uploadfile.uploadtebus); 
publicRouter.post('/api/upload/harian/salur', uploads.single('file'), uploadfile.uploadsalur); 
publicRouter.post('/api/upload/bulan/f5', uploadscsv.single('file'), uploadfile.uploadbulanf5); 
publicRouter.post('/api/upload/bulan/f6', uploadscsv.single('file'), uploadfile.uploadbulanf6); 
publicRouter.get('/api/profile', uploadfile.profile); 
publicRouter.get('/api/location', uploadfile.location); 


export {
    publicRouter
}