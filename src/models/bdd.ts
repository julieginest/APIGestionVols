/**** Imports ****/
import mariadb from "mariadb";

require("dotenv").config();

/**** .env ****/
var BDD_HOST = process.env.BDD_HOST;
var BDD_PORT = Number(process.env.BDD_PORT);
var BDD_USER = process.env.BDD_USER;
var BDD_PASSWORD = process.env.BDD_PASSWORD;
var BDD_DATABASE = process.env.BDD_DATABASE;

/**** Pool ****/
export const pool = mariadb.createPool({
    host: BDD_HOST || "j.ginestiere.fr",
    port:  BDD_PORT || 3307,
    user: BDD_USER || "root",
    password: BDD_PASSWORD || "your_password",
    database : BDD_DATABASE || "Istres",
    connectionLimit: 5
})

export const db = {
    customQuery: async (query:string, args?:(string|number)[] | null): Promise<any> => {
        var conn;
        var response;
        
        try{
            conn  = await pool.getConnection();

            response = await pool.query(query,args);
        }catch(e){
            console.error(e)
        }finally{
            if(conn) conn.release();
        }
        return response;
    },

    
}