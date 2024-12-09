//********** Imports **********//
import express from "express";
import cors from "cors";
import * as middlewares from "./middlewares";

require("dotenv").config();

/**** Controllers ****/
import  planes_routes from "./routes/planes";
import maintenances_routes from "./routes/maintenances";
import technicians_routes from "./routes/technicians";

//********** Server **********//
const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
// Initializing express.
const app = express();
// Enable CORS
app.use(cors(options));
// Middleware to parse json throught requests.
app.use(express.json());


app.use("/planes", planes_routes);
app.use("/maintenances", maintenances_routes);
app.use("/technicians", technicians_routes);
app.use("/status", (req: any, res: any) => {
  console.log("Démarré")
  res.json("OK")
});
app.use("/", (req: any, res: any) => {
  res.json("App up")
});
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);




export default app;
