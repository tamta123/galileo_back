import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/sql.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 4000;
(async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected successfully.");
    }
    catch (error) {
        console.error("❌ Unable to connect to the database:", error);
    }
})();
app.get("/", (req, res) => {
    res.send("Hello from Galileo backend 🚀");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
