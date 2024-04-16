import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();
const envConnection = process.env.CLIENT_PORT;

export const connectDB = async function () {
  await connect(process.env.DATA_URL);
  console.log("mongodb connected");
};

export default envConnection;
// export const getUserObject = (id) => {
//   return new ObjectId(id);
// };
