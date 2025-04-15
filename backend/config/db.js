import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection;

const connectDB = async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    console.log("✅ MySQL Connected");
    return connection;
  } catch (err) {
    console.error("❌ MySQL Connection Error:", err);
    process.exit(1);
  }
};

export default connectDB;
