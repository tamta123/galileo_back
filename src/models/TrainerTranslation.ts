import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";
import Trainer from "./Trainer.js";

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



export default TrainerTranslation;