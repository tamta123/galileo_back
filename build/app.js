import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./config/sql.js";
import syncModels from "./models/index.js";
import sequelize from "./config/sql.js";
const app = express();
app.use("/images", express.static("public/images"));
async function init() {
    try {
        await syncModels();
        // await initBranches(); // seed branches once
        // await seedTrainers()
        //  await seedTrainerTranslations()
        serverStart();
    }
    catch (error) {
        console.log("❌ Failed to initialize:", error);
    }
    const [result] = await sequelize.query("SELECT current_database();");
    console.log("Connected to DB:", result);
}
function serverStart() {
    app.use(bodyParser.json());
    app.use(cors());
    app.get("/", (_req, res) => {
        res.send("Server is running 🚀");
    });
    app.listen(process.env.PORT || 3000, () => {
        console.log(`✅ Server is running on port ${process.env.PORT || 3000}`);
    });
}
init();
