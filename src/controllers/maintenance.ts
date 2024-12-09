import {maintenancesModel} from "../models/maintenancesModel";
import { MaintenanceCreation, MaintenanceObject } from "../types/maintenance";
import { httpErrorFromSql } from "../types/errors";
import {errorReplaceHolder} from "../types/db"
import {err as errHandle} from "../errorHandler/CRUD"



const replaceHolder: errorReplaceHolder = {
    object:"maintenance",
    FK: "`planeRegistration` or `technicianID`",
    UNIQUE: "`Id`",
    NOT_NULL: "`title` or `planeRegistration` or `start`",
}





export const  GetAll =  (async (req: any, res: any) => {
    try{
    res.status(200).json(await maintenancesModel.get({}));
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
})

export const GetById = (async (req: any, res: any) => {
    var RequestedId = Number(req.params.Id)
    try{
        const rows = await maintenancesModel.get({Id: RequestedId});
        if(rows[0]){
            const row = rows[0]
            res.status(200).json(row)
        }else{
            // res.json({})
            res.status(204).json(
                {
                    "errorId": "M-404",
                    "message": `No record with \`Id\` = ${RequestedId}`
                }
            )
        }
        

    } catch (E){
        errHandle(E,res,replaceHolder)
    }
    
        
  
    
})

export const Filtered = async (req: any, res: any) => {
    console.log(JSON.stringify(req.query))
    try{
        let response = await maintenancesModel.get({
            title: req.query.title,
            technicianID: Number(req.query.technicianID) || null,
            planeRegistration: req.query.planeRegistration,
            start: req.query.start,
            end: req.query.end,
            
            
        })
        res.status(200).json(response)
    } catch (E) {
        errHandle(E,res,replaceHolder)
    }
;
}

export const Create = async (req: any, res: any) => {
    
    //CHECKING MISSING FIELDS
    var missingFileds : string[] = [];
    req.query.title ? false : missingFileds.push("title");
    req.query.planeRegistration ? false : missingFileds.push("planeRegistration");
    
    
    if(missingFileds.length == 0){ //IF NO MISSING FIELDS
        var record :MaintenanceCreation  = {
                title: req.query.title,
                technicianID: Number(req.query.technicianID) || undefined,
                planeRegistration: req.query.planeRegistration,
                start: req.query.start,
                end: req.query.end,
            };
    
            try{
                await maintenancesModel.create(record);
                res.status(201).json(record)
            }catch(err){
                errHandle(err,res,replaceHolder)
                // const parsedError = err as httpErrorFromSql;
                // res.status(parsedError.HTTPcode).json(
                //     {
                //         errorId: `M-${parsedError.HTTPcode}`,
                //         message: parsedError.message.replace(
                //             "{FK}",errorReplaceHolder.FK
                //         ).replace(
                //             "{UNIQUE}",errorReplaceHolder.UNIQUE
                //         ).replace(
                //             "{object}",errorReplaceHolder.object
                //         ).replace(
                //             "{NOT_NULL}",errorReplaceHolder.NOT_NULL
                //         )
                //         ,
                //     }
                // )
            }
    } else{
        res.status(422).json(
            {
                "errorId": "M-422",
                "message": `Missing field(s) ${missingFileds.join(" & ")}`
            }
        )
    }
    
    
        

    

    
}

export const Update = async (req: any, res: any) => {
    

    
    try{

        await maintenancesModel.update(
            Number(req.params.Id),
            {
                title: req.query.title,
                technicianID: Number(req.query.technicianID) || null,
                planeRegistration: req.query.planeRegistration,
                start: req.query.start,
                end: req.query.end,
                
                
            });
            res.status(200).json("OK")
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
}


export const Delete = async (req: any, res: any) =>{
    try{
    console.log(await maintenancesModel.delete(
        Number(req.params.Id),
    ))
    res.status(200).json("done")
} catch (E){
        errHandle(E,res,replaceHolder)
    }
}


