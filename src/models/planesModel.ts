/**** Imports ****/
import { db } from "./bdd"
import {PlaneCreation, PlaneQuery} from "../types/plane"
import { PlaneObject } from "../types/plane";

/**** Model ****/
export const planeModel = {
    get: async (filter: PlaneQuery): Promise<PlaneObject[]> => {
        var query = "SELECT * FROM `Planes` WHERE ";
        var args : (number | string)[] = [];

        if(filter.brand){
            query+="(`brand` = ?) AND "
            args.push(filter.brand)
        };
    
        if(filter.model){
            query+="(`model` = ?) AND "
            args.push(filter.model)
        };
        if(filter.registration){
            query+="(`registration` = ?) AND "
            args.push(filter.registration)
        };

        query += "TRUE"

        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
    update: async (registration: string, changes: PlaneQuery): Promise<PlaneObject> => {
        var query = "UPDATE `Planes` SET ";
        var args : (number | string)[] = [];

        if(changes.brand){
            query+="`brand` = ?, "
            args.push(changes.brand)
        };
    
        if(changes.model){
            query+="`model` = ?, "
            args.push(changes.model)
        };
        

        query = query.slice(0,-2) + "WHERE `registration` = ?"
        args.push(registration)

        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
    create: async (params: PlaneCreation): Promise<PlaneObject[]> => {
        var query = "INSERT INTO `Planes` WHERE (`registration`,`brand`,`model`) VALUES(?, ?, ?)";
        var args : (number | string)[] = [];
        args.push(params.registration)
        args.push(params.brand)
        args.push(params.model)

        


        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
    delete: async (registration: string): Promise<PlaneObject> => {
        var query = "DELETE FROM `Planes` WHERE `registration`= ?";
        var args : string[] = [registration];


        console.log(query)

        return await db.customQuery(
            query,
            args
        )
    },
}