const Image = require("../models/Image");
const Product = require("../models/Product");
ObjectId = require("mongodb").ObjectId;


module.exports.upload = async (req, res) => {
    console.log(req.file);
    await Image.create({
        main_image: req.file.path
    })
}