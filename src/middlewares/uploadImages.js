const multer = require('multer');
const path = require('path');


const productsImages = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/products')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const uploadProducts = multer({
    storage : productsImages
})


module.exports = {
    uploadProducts
};
