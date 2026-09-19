const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const productModel = require("../../models/productModel");
const { responseReturn } = require("../../utils/response");

class productController {
  add_product = async (req, res) => {
    // 1. Initialize formidable with multiples set to true to accept multiple image files
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return responseReturn(res, 500, { error: err.message });
      }
      cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret
            });

      // 2. Destructure fields sent from the frontend form
      let { name, description, category, brand, price, stock, discount, shopName } = fields;

      // 3. Normalize images: ensure 'images' is always an array (handles 1 or multiple files)
      let images = files.images;
      if (!images) {
        images = [];
      } else if (!Array.isArray(images)) {
        images = [images];
      }

      try {
        let allImageURL = [];

        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.uploader.upload(images[i].filepath, {
            folder: 'products'
          });
          allImageURL.push(result.secure_url);
        }

        // 5. Clean up field values (Formidable v3 sometimes wraps fields in arrays)
        const productName = Array.isArray(name) ? name[0] : name;
        const productDescription = Array.isArray(description) ? description[0] : description;
        const productCategory = Array.isArray(category) ? category[0] : category;
        const productBrand = Array.isArray(brand) ? brand[0] : brand;
        const productPrice = Array.isArray(price) ? price[0] : price;
        const productStock = Array.isArray(stock) ? stock[0] : stock;
        const productDiscount = Array.isArray(discount) ? discount[0] : discount;
        const productShopName = Array.isArray(shopName) ? shopName[0] : shopName;

        // 6. Generate a URL-friendly slug from the product name
        const slug = productName.trim().toLowerCase().split(' ').join('-');

        // 7. Save the product data and uploaded image secure URLs into MongoDB
        const product = await productModel.create({
          name: productName,
          slug,
          description: productDescription,
          category: productCategory,
          brand: productBrand,
          price: productPrice,
          stock: productStock,
          discount: productDiscount,
          shopName: productShopName,
          images: allImageURL,
          sellerId: req.id 
        });

        // 8. Return success response back to Redux/Frontend
        return responseReturn(res, 201, { 
          message: "Product added successfully!", 
          product 
        });

      } catch (error) {
        return responseReturn(res, 500, { error: error.message });
      }
    });
  }
}

module.exports = new productController();