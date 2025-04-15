import connectDB from './config/db.js';

const startServer = async () => {
  const db = await connectDB();

  // Simple test query to verify it's working
  const [rows] = await db.execute('SELECT NOW() AS time');
  console.log('📅 Current MySQL Time:', rows[0].time);
};

startServer();
