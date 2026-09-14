const categoryModel = require("../../models/categoryModel");
const { responseReturn } = require("../../utils/response");

class categoryController {
  get_category = async (req, res) => {
    let { page, searchValue, parPage } = req.query;

    try {
      // Parse integers and validate numeric inputs
      const pageNum = parseInt(page);
      const limitNum = parseInt(parPage);

      if (searchValue && !isNaN(pageNum) && !isNaN(limitNum)) {
        const skipPage = limitNum * (pageNum - 1);

        const categorys = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .skip(skipPage)
          .limit(limitNum)
          .sort({ createdAt: -1 });

        const totalCategory = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .countDocuments();

        return responseReturn(res, 200, { totalCategory, categorys });
      } else if (!isNaN(pageNum) && !isNaN(limitNum)) {
        const skipPage = limitNum * (pageNum - 1);

        const categorys = await categoryModel
          .find({})
          .skip(skipPage)
          .limit(limitNum)
          .sort({ createdAt: -1 });

        const totalCategory = await categoryModel.find({}).countDocuments();

        return responseReturn(res, 200, { totalCategory, categorys });
      } else {
        // Fallback when page/parPage are empty strings or undefined
        const categorys = await categoryModel.find({}).sort({ createdAt: -1 });
        return responseReturn(res, 200, { categorys });
      }
    } catch (error) {
      return responseReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new categoryController();