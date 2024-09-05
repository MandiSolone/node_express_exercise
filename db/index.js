//connection object we can create queries from 

import config from "../config";
import mysql from "mysql"; //a default built in component

const connection = mysql.createPool(config.mysql); 

export default connection; 