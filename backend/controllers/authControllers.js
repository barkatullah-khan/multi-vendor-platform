const adminModel = require("../models/adminModel");
const sellerModel = require('../models/sellerModel');
const sellerCustomerModel = require('../models/chat/sellerCustomerModel');
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");

class authControllers {
  admin_login = async (req, res) => {
    console.log("➡️ Admin Login Hit with body:", req.body);
    // console.log("req.body", req.body);
    const { email, password } = req.body;

    try {
      // 1. Check if admin exists in database
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        // 2. Compare entered password with hashed password
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          // 3. Generate JWT token
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });

          // 4. Set the cookie
          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
          });

          // 5. Send success response
          responseReturn(res, 200, {
            token,
            message: "Login Success",
            userInfo: admin,
            role: admin.role,
          });
        } else {
          responseReturn(res, 404, { error: "Password Wrong" });
        }
      } else {
        responseReturn(res, 404, { error: "Email Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  seller_register = async (req, res) => {
    console.log("➡️ Seller Register Controller Hit!", req.body);
    const { email, name, password } = req.body;

    try {
      const getUser = await sellerModel.findOne({ email });

      if (getUser) {
        return responseReturn(res, 400, { error: 'Email Already Exists' });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: 'menual',
          shopInfo: {}
        });

        await sellerCustomerModel.create({
          myId: seller.id
        });

        const token = await createToken({
          id: seller.id,
          role: seller.role
        });

        // Fixed: Cookie flags added so browser saves cross-origin cookie
        res.cookie('accessToken', token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: false,
          sameSite: 'lax'
        });

        // Fixed: Added userInfo: seller for Redux store payload matching
        return responseReturn(res, 201, {
          token,
          message: 'Registration Success',
          userInfo: seller
        });
      }
    } catch (error) {
      console.log("❌ Controller Error:", error.message);
      return responseReturn(res, 500, { error: 'Internal Server Error' });
    }
  };

  // Seller_login Method
  seller_login = async (req, res) => {
    console.log("➡️ Seller Login Controller Hit!", req.body);
    const { email, password } = req.body;

    try {
      const seller = await sellerModel.findOne({ email }).select('+password');

      if (!seller) {
        return responseReturn(res, 404, { error: 'Email not found' });
      }

      const match = await bcrypt.compare(password, seller.password);
      if (!match) {
        return responseReturn(res, 400, { error: 'Password incorrect' });
      }

      const token = await createToken({
        id: seller.id,
        role: seller.role
      });

      res.cookie('accessToken', token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
      });

      return responseReturn(res, 200, {
        token,
        message: 'Login Success',
        userInfo: seller
      });

    } catch (error) {
      console.log("❌ Login Error:", error.message);
      return responseReturn(res, 500, { error: 'Internal Server Error' });
    }
  };

  // getUser Method (Moved inside the class correctly)
  getUser = async (req, res) => {
    const { id, role } = req;

    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        const seller = await sellerModel.findById(id);
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: 'internal server error' });
    }
  };
}

module.exports = new authControllers();