import {technicianModel} from "../models/techniciansModel";
import {errorReplaceHolder} from "../types/db"
import {err as errHandle} from "../errorHandler/CRUD"

const replaceHolder: errorReplaceHolder = {
    object:"technician",
    FK:"",
    UNIQUE:"",
    NOT_NULL:"",
}

export const  GetAll =  (async (req: any, res: any) => {
    try{
    res.status(200).json(await technicianModel.get({}));
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
})

export const GetById = (async (req: any, res: any) => {
    try{
    const row = await technicianModel.get({Id: Number(req.params.Id)});
    res.status(200).json(row[0]);
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
})

export const Filtered = async (req: any, res: any) => {
    console.log(JSON.stringify(req.query))
    try{
    res.status(200).json(await technicianModel.get({
            Id: Number(req.query.Id),
            firstName:req.query.firstName,
            surName:req.query.surName,
        
        
    }));
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
}

export const Create = async (req: any, res:any) =>{
    if(req.query.firstName  && req.query.surName){
        try{
            await technicianModel.create({
            firstName: req.query.firstName,
            surName: req.query.surName,
            })
            res.status(201).json("OK")
        } catch (E){
            errHandle(E,res,replaceHolder)
        }
    }else{
        res.json("KO")
    }
}
export const Update = async (req: any, res:any) =>{
    try{
        await technicianModel.update(
                Number(req.params.Id),
                {
                    firstName: req.query.firstName,
                    surName: req.query.surName,
                }
            )

        res.status(200).json("done")
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
}

export const Delete = async (req: any, res:any) =>{
    try{    
    await technicianModel.delete(
                Number(req.params.Id),
            )

        res.status(200).json("done")
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
    
}

