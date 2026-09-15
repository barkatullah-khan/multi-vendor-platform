const formidable = require('formidable');
const { responseReturn } = require('../../utils/response');
const cloudinary = require('cloudinary').v2;
const categoryModel = require('../../models/categoryModel');
const slugify = require('slugify');


class categoryController {

    add_category = async (req, res) => {
        const form = formidable({});
        
        form.parse(req, async (err, fields, files) => {
            if (err) {
                responseReturn(res, 404, { error: 'Image upload failed' });
            } else {
                let { name } = fields;
                let { image } = files;

                // Clean up the name string
                name = name.trim();
                
                // Generate SEO-friendly slug
                const slug = slugify(name, { lower: true });

                // Configure Cloudinary credentials
                cloudinary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.api_key,
                    api_secret: process.env.api_secret
                });

                try {
                    // Upload image to Cloudinary folder named 'categorys'
                    const result = await cloudinary.uploader.upload(image.filepath, { folder: 'categorys' });

                    if (result) {
                        // Save category data into MongoDB database
                        const category = await categoryModel.create({
                            name,
                            slug,
                            image: result.url
                        });

                        responseReturn(res, 201, { message: 'Category added successfully', category });
                    } else {
                        responseReturn(res, 404, { error: 'Image upload failed' });
                    }
                } catch (error) {
                    responseReturn(res, 500, { error: 'Internal server error' });
                }
            }
        });
    }
 //End of of the Method add_category

get_category=async (req,res)=>{
    console.log(req.query)
}


}




  



module.exports = new categoryController();