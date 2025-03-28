import express from "express";
import dotenv from "dotenv";
import userroutes from "./src/routes/UserRoutes.js";
import connectDb from "./src/db/index.js";
import cors from "cors";
import Employeeroutes from './src/routes/EmployeeRoutes.js'
import Departmentroutes from './src/routes/DepartmentRoutes.js'
import diamondRoutes from './src/routes/Diamond.routes.js'

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

app.use("/api/user", userroutes);
app.use("/api/Employee", Employeeroutes);
app.use("/api/Department",Departmentroutes );
app.use("/api/diamonds", diamondRoutes);


connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  });
