/**** Imports ****/
import mariadb, { SqlError } from "mariadb";
import { httpError, httpErrorFromSql } from "../types/errors";

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
        const conn = await sqlSteps.newConnection();
        const emptyError : httpErrorFromSql = {
            name:"EMPTY",
            message:"The query did not reach any record",
            HTTPcode: 404,
            sqlErrno: 0,
        }
        let response: any[] = [];

        if(conn){
            response  = await sqlSteps.query(query, args)
            conn.release();
        }
        if(response.length == 0){
            throw(emptyError)
        }
        return response;
    },

    
}

const sqlSteps = {
    newConnection: async (): Promise<any> => {
        var conn;
        
        try{
            console.log("Connection...")
            conn  = await pool.getConnection();
            console.log("Connected")

            return conn;
        }catch(err){
            console.error("Connection error:")
            const parsedErr: SqlError = err as SqlError
            sqlErrorsHandler(parsedErr)
        }
    },

    query: async (query:string, args?:(string|number)[] | null): Promise<any> => {
        var response;
        
        
            try{
                response = await pool.query(query,args);
                return response
            }catch(err){
                console.error("SQL error:")
                const parsedErr: SqlError = err as SqlError
                sqlErrorsHandler(parsedErr)
            }
        
    },
}




const sqlErrorsHandler = (
    // step: "query" | "newConnection",
    thrownError: SqlError,
) => {

    var ErrVars: {message: string, HTTPcode: number};
        switch (thrownError.errno) {

            //4xx errors
            case 1452:
                ErrVars = {
                    message:"Your `{object}` references an unkown {FK}",
                    HTTPcode: 422,
                }
                break;
                
            case 1062:
                ErrVars = {
                    message:"Your `{object}` has dublicated entry ({UNIQUE}) that must be unique",
                    HTTPcode: 422,
                }
                break;
                
            case 1364:
                ErrVars = {
                    message:"Your `{object}` is missing one or several non null properties ({NOT_NULL})",
                    HTTPcode: 422,
                }
                break;

            case 1451:
                ErrVars = {
                    message:"Your `{object}` is linked to a record on an other table.",
                    HTTPcode: 422,
                }
                break;

                
                
            //5xx errors
            case 1064:
                ErrVars = {
                    message:"Internal SQL syntax error",
                    HTTPcode: 500,
                }
                break;
            case 1146:
                ErrVars = {
                    message:"Internal table reference error",
                    HTTPcode: 500,
                }
                break;
            case 1049:
                ErrVars = {
                    message:"Internal datbase error",
                    HTTPcode: 500,
                }
                break;

            default:
                ErrVars = {
                    message:"UNKNOWN ERROR",
                    HTTPcode: 500,
                }
        }
    


            console.log(thrownError);

            var err: httpErrorFromSql = {
                name:thrownError.code || "UNKNOWN",
                message:ErrVars.message,
                HTTPcode: ErrVars.HTTPcode,
                sqlErrno: thrownError.errno
            }
            throw(err);
            
            
            
        
    
    
}