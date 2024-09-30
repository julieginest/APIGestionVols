/**** Imports ****/
import { pool } from "./bdd"
import {PlaneQuery} from "../types/plane"
import { PlaneObject } from "../types/plane";

/**** Model ****/
export const planeModel = {
    get: async (args: PlaneQuery): Promise<PlaneObject[]> => {
        var where : string = "";
        var conn;
        var rows : PlaneObject[];

        if(args.brand){
            where = where + '`brand` = \'' + args.brand + '\' AND ';
        };
    
        if(args.model){
            where = where + '`model` = \'' + args.model + '\' AND ';
        };
        if(args.registration){
            where = where + '`registration` = \'' + args.registration + '\' AND ';
        };
        where += "TRUE";

        try{
            conn = await pool.getConnection();

            rows = await pool.query(`select * from Planes WHERE ${where}`);
        }catch(e){
            rows = []
        }finally{
            if(conn) conn.release();
        };


        return rows;
    }
}