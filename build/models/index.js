import sequelize from"../config/sql.js";// (Later you’ll import other models like GroupClass, etc.)
const syncModels=async()=>{try{await sequelize.sync({alter:true});// or { force: true } in dev
console.log("\u2705 All models were synced successfully.")}catch(error){console.error("\u274C Error syncing models:",error)}};export default syncModels;