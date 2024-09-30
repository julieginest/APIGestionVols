/**** Imports ****/
import { pool } from "./bdd"
import {MaintenanceObject} from "../types/maintenance"
import {MaintenanceQuery} from "../types/maintenance"

export const maintenancesModel = {
    get: async (args: MaintenanceQuery): Promise<MaintenanceObject[]> =>{
        var where: string = ""
        
        if(args.Id){
            where+=`Id = "${args.Id}" AND `
        };
        if(args.title){
            where+=`title = "${args.title}" AND `
        };


        if(args.start){
            where+=`start = "${args.start}" AND `
        };
        if(args.end){
            where+=`end = "${args.end}" AND `
        };


        if(args.technicianID){
            where+=`technicianID = "${args.technicianID}" AND `
        };
        if(args.planeRegistration){
            where+=`planeRegistration = "${args.planeRegistration}" AND `
        };


        // if(args.pilotID){
        //     where+=`pilotID = "${args.pilotID}" AND `
        // };
        // if(args.planeRegistration){
        //     where+=`planeRegistration = "${args.planeRegistration}" AND `
        // };

        where += "TRUE"

        var conn;
        var rows: MaintenanceObject[];
        try{
            conn = await pool.getConnection();

            rows = await pool.query(`select * from Maintenances WHERE ${where}`);
        }catch(e){
            rows = []
        }finally{
            if(conn) conn.release();
        };


        return rows;

    },

    update: async (Id: number): Promise<MaintenanceObject[]> =>{
        
    }
};