import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";

const Trainer = sequelize.define("Trainer", {
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


export async function seedTrainers() {
const BASE_URL = "https://galileoback-production.up.railway.app";

  const trainersData = [
    { branchId: 2, photo: `${BASE_URL}/images/vaxo_trainer.JPG` },
    { branchId: 2, photo: `${BASE_URL}/images/giorgi_trainer.JPG`},
    { branchId: 2, photo: `${BASE_URL}/images/vlad_trainer.jpeg`},
    { branchId: 2, photo: `${BASE_URL}/images/kristine_trainer.JPG`},
    { branchId: 2, photo: `${BASE_URL}/images/nika_trainer.JPG`},
    { branchId: 1, photo: `${BASE_URL}/images/salome.JPG`},
    { branchId: 1, photo: `${BASE_URL}/images/teo.JPG`},
    { branchId: 1, photo: `${BASE_URL}/images/zura.JPG`}];

  try {
    await Trainer.bulkCreate(trainersData);
    console.log("✅ Trainers seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding trainers:", error);
  }
}

export default Trainer;