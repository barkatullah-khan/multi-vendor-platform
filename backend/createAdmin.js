const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const adminModel = require('./models/adminModel'); // Adjust path if your model is located elsewhere

// Replace with your actual MongoDB connection string if different
const DB_URI = 'mongodb+srv://Barkat_wazir:barkat123@cluster0.mqn43bw.mongodb.net/multivendor?retryWrites=true&w=majority'; 

const createAdmin = async () => {
    try {
        // 1. Connect to MongoDB
        await mongoose.connect(DB_URI);
        console.log('Database connected successfully...');

        // 2. Clear out any existing admin with this email to avoid duplicates/conflicts
        await adminModel.deleteOne({ email: 'admin@gmail.com' });

        // 3. Hash the password "123456" properly using bcrypt (10 salt rounds)
        const hashedPassword = await bcrypt.hash('123456', 10);

        // 4. Create the new admin document
        await adminModel.create({
            name: 'Admin',
            email: 'admin@gmail.com',
            password: hashedPassword,
            image: 'admin.jpg',
            role: 'admin'
        });

        console.log('--------------------------------------------------');
        console.log('SUCCESS: Admin created / updated successfully!');
        console.log('Email: admin@gmail.com');
        console.log('Password: 123456');
        console.log('--------------------------------------------------');
        
        process.exit(0);
    } catch (error) {
        console.error('Error creating admin:', error.message);
        process.exit(1);
    }
};

createAdmin();