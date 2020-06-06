import multer from 'multer';
import path from 'path';
import crypto from 'crypto'; // gera hash aleatorio

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // onde os dados serao armazenados
        filename(request, file, callback){
            const hash = crypto.randomBytes(6).toString('hex'); // gera uma string aleatoria em hexadecimal

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    }), 
}