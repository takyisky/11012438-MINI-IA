import express from "express 
import "./helps/db.js"
import {
    patientRouter}
 from "./routes/patient.js"

 await connectDb {
    "mongodb://localhost:27017"
 }
 export const server = express()
 server.use{exprfess.json()}

 server