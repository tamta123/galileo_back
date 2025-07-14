import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize(
  "railway",                   // database name
  "postgres",                  // username
  "cNerLgzndajXTngFrclAKtxfttshIOgc", // password
  {
    host: "postgres.railway.internal", 
    dialect: "postgres",
    port: 5432,
  }
);



try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;