import sequelize from "../config/sql.js";
import Branch from "./Branch.js";
import Trainer from "./Trainer.js";
import TrainerTranslation from "./TrainerTranslation.js";

// Set associations
Trainer.hasMany(TrainerTranslation, {
  foreignKey: "trainerId",
  as: "translations",
  onDelete: "CASCADE",
});

TrainerTranslation.belongsTo(Trainer, {
  foreignKey: "trainerId",
  as: "trainer",
});


Trainer.belongsTo(Branch, {
  foreignKey: "branchId",
  as: "branch",
  onDelete: "CASCADE",
});
Branch.hasMany(Trainer, {
  foreignKey: "branchId",
  as: "trainers",
});

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // or { force: true } in dev
    console.log("✅ All models were synced successfully.");
  } catch (error) {
    console.error("❌ Error syncing models:", error);
  }
};

export default syncModels;