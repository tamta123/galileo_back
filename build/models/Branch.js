import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";
const Branch = sequelize.define("Branch", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});
export async function initBranches() {
    const branches = [
        { name: "Tbilisi" },
        { name: "Kutaisi" },
    ];
    try {
        await Branch.bulkCreate(branches, { ignoreDuplicates: true });
        console.log("✅ Branches initialized");
    }
    catch (error) {
        console.error("❌ Failed to initialize branches:", error);
    }
}
export default Branch;
