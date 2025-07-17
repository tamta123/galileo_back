import sequelize from "../config/sql.js";
import Trainer from "./Trainer.js";
import TrainerTranslation from "./TrainerTranslation.js";

// (Later you’ll import other models like GroupClass, etc.)

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // or { force: true } in dev
    console.log("✅ All models were synced successfully.");
  } catch (error) {
    console.error("❌ Error syncing models:", error);
  }
};

export default syncModels;