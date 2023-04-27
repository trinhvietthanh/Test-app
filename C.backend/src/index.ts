import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { myDataSource } from "./app-data-source";


// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/products",  (req: Request, res: Response) => {
  
});

app.get("/products.")

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
