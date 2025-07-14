import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(process.env.PGDATABASE, // Add !
process.env.PGUSER, // Add !
process.env.PGPASSWORD, // Add !
{
    host: process.env.PGHOST,
    dialect: "postgres",
    port: Number(process.env.PGPORT), // also make sure to cast to number
});
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
}
catch (error) {
    console.error("Unable to connect to the database:", error);
}
export default sequelize;
