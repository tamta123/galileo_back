import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";

const Trainer = sequelize.define("Trainer", {
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Trainer;