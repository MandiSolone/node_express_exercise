import express from "express";
import config from "./config/index";
// TODO: import router from routes/
import apiRouter from "./routes"; 
import morgan from "morgan"; 

const app = express();

//Middlewear that parses incoming request data to JSON. Attaches JSON to body parameter of the request object 
app.use(express.json());

// TODO: use the imported router to handle all requests
app.use("/api", apiRouter);
app.use(morgan("common"));  

//Default Error Handler 
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
