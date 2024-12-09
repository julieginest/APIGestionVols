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
        console.log(args)
        const results =  await db.customQuery(
            query,
            args
        )
        console.log("results",results)

        return results
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
        

        query = query.slice(0,-2) + " WHERE `registration` = ?"
        args.push(registration)

        console.log(query)

        const updated = await db.customQuery(
            query + " RETURNING *",
            args
        )
        return updated[0]
    },
    create: async (params: PlaneCreation): Promise<PlaneObject[]> => {
        var query = "INSERT INTO `Planes` (`registration`,`brand`,`model`) VALUES(?, ?, ?)";
        var args : (number | string)[] = [];
        args.push(params.registration)
        args.push(params.brand)
        args.push(params.model)

        


        console.log(query)

        const created = await db.customQuery(
            query + " RETURNING *",
            args
        )
        return created[0]
    },
    delete: async (registration: string): Promise<PlaneObject> => {
        var query = "DELETE FROM `Planes` WHERE `registration`= ?";
        var args : string[] = [registration];


        console.log(query)

        const deleted = await db.customQuery(
            query + " RETURNING *",
            args
        )
        return deleted[0]
    },
}