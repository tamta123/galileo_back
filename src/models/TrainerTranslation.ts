import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";
import Trainer from "./trainer.js";

const TrainerTranslation = sequelize.define("TrainerTranslation",{
    language:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
      description:{
        type:DataTypes.STRING,
        allowNull:false
    },
})

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

export default TrainerTranslation;