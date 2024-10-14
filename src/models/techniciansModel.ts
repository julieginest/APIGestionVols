/**** Imports ****/
import { db } from "./bdd"
import {TechnicianCreation, TechnicianQuery} from "../types/technician"
import { TechnicianObject } from "../types/technician";

/**** Model ****/
export const technicianModel = {
    get: async (filter: TechnicianQuery): Promise<TechnicianObject[]> => {
        var query = "SELECT * FROM `Technicians` WHERE ";
        var args : (number | string)[] = [];

        if(filter.Id){
            query+="(`Id` = ?) AND "
            args.push(filter.Id)
        };
    
        if(filter.firstName){
            query+="(`firstName` = ?) AND "
            args.push(filter.firstName)
        };
        if(filter.surName){
            query+="(`surName` = ?) AND "
            args.push(filter.surName)
        };

        query += "TRUE"

        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
    update: async (Id: string, changes: TechnicianQuery): Promise<TechnicianObject> => {
        var query = "UPDATE `Technicians` SET ";
        var args : (number | string)[] = [];

        if(changes.firstName){
            query+="`firstName` = ?, "
            args.push(changes.firstName)
        };
    
        if(changes.surName){
            query+="`surName` = ?, "
            args.push(changes.surName)
        };
        

        query = query.slice(0,-2) + " WHERE `Id` = ?"
        args.push(Id)

        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
    create: async (params: TechnicianCreation): Promise<TechnicianObject[]> => {
        var query = "INSERT INTO `Technicians` WHERE (`firstName`,`surName`) VALUES(?, ?)";
        var args : (number | string)[] = [];
        args.push(params.firstName)
        args.push(params.surName)

        


        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
    delete: async (Id: number): Promise<TechnicianObject> => {
        var query = "DELETE FROM `Technicians` WHERE `Id`= ?";
        var args : number[] = [Id];


        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
}