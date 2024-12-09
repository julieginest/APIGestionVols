/**** Imports ****/
import { db } from "./bdd"
import {MaintenanceCreation, MaintenanceObject} from "../types/maintenance"
import {MaintenanceQuery} from "../types/maintenance"

export const maintenancesModel = {
    get: async (filter: MaintenanceQuery): Promise<MaintenanceObject[]> =>{
        var query = "SELECT * FROM `Maintenances` WHERE ";
        var args : (number | string)[] = [];
        
        if(filter.Id){
            query+="(`Id` = ?) AND "
            args.push(filter.Id)
        };
        if(filter.title){
            query+="(`title` = ?) AND "
            args.push(filter.title)
        };
        
        
        if(filter.start){
            query+="(`start` = ?) AND "
            args.push(filter.start)
        };
        if(filter.end){
            query+="(`end` = ?) AND "
            args.push(filter.end)
        };
        
        
        if(filter.technicianID != null){
            query+="(`technicianID` = ?) AND "
            console.log("yaas")
            args.push(filter.technicianID)
        };
        if(filter.planeRegistration){
            query+="(`planeRegistration` = ?) AND "
            args.push(filter.planeRegistration)
        };


        query += "TRUE"

        console.log(query)

        return await db.customQuery(
            query,
            args
        )

    },

    update: async (Id: number, changes:MaintenanceQuery): Promise<any> =>{
        var query = "UPDATE `Maintenances` SET ";
        var args : (number | string)[] = [];


        if(changes.title){
            query+="`title` = ?, "
            args.push(changes.title)
        };
        
        
        if(changes.start){
            query+="`start` = ?, "
            args.push(changes.start)
        };
        if(changes.end){
            query+="`end` = ?, "
            args.push(changes.end)
        };
        
        
        if(changes.technicianID){
            query+="`technicianID = ?, "
            args.push(changes.technicianID)
        };
        if(changes.planeRegistration){
            query+="`planeRegistration` = ?, "
            args.push(changes.planeRegistration)
        };
        
        
        
        query = query.slice(0,-2) +  " WHERE Id = ?"
        args.push(Id)

        const updated = await db.customQuery(
            query + " RETURNING *",
            args
        )
        return updated[0]
    },


    create: async (params:MaintenanceCreation): Promise<any> =>{
        var query = "INSERT INTO `Maintenances` (`title`, `planeRegistration`, ";
        var queryValues = " VALUES (?, ?, "
        var args : (number | string)[] = [];


        args.push(params.title)
        args.push(params.planeRegistration)
        
        
        if(params.start){
            query+="`start`, "
            queryValues+="?, "
            args.push(params.start)
        };
        if(params.end){
            query+="`end`, "
            queryValues+="?, "
            args.push(params.end)
        };
        
        
        if(params.technicianID){
            query+="`technicianID`, "
            queryValues+="?, "
            args.push(params.technicianID)
        };
        
        
        
        query =  query.slice(0,-2) + ")"
        queryValues =  queryValues.slice(0,-2) + ")"
        

        const created = await db.customQuery(
            query + " RETURNING *",
            args
        )
        return created[0]
    },
    delete: async (Id: number): Promise<any> =>{
        var query = "DELETE FROM `Maintenances` WHERE `Id`= ?";
        var args : number[] = [Id];


        console.log(query)

        const deleted = await db.customQuery(
            query + " RETURNING *",
            args
        )
        return deleted[0]
    },
};