import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import color from 'colors';
import connectDB from './database/config.js';
import User from './models/UserModel.js';
import Order from './models/OrderModel.js';
import Product from './models/ProductModel.js';
import users from './data/users.js';
import products from './data/products.js';

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.create(users);
    const adminUserId = createdUsers[0]._id
    const productsToAdd = products.map((product) => {
      return {...product, user:adminUserId}
    })
    await Product.create(productsToAdd);
    console.log('db populated successfully'.bgGreen)
    process.exit();
    
  } catch (error) {
    console.log(`some error happend during importing data to db ${error}`.red.inverse)
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log('destryed data successfully'.green)
    process.exit();
  } catch (error) {
    console.log('some error happend during destrying data'.bgRed)
    process.exit(1);
  }
}

if (process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}