import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import "./config/sql.js";  


const app = express();

async function init() {
  try {
    serverStart();
  } catch (error) {
    console.log(error);
  }
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
