import {planeModel} from "../models/planesModel";
import {err as errHandle} from "../errorHandler/CRUD"
import {errorReplaceHolder} from "../types/db"
import { response } from "express";

const replaceHolder: errorReplaceHolder = {
    object:"plane",
    FK:"`registration`",
    UNIQUE:"`registration`",
    NOT_NULL:"`model` and `brand`",
}


export const  GetAll =  (async (req: any, res: any) => {
    try{
        const response = await planeModel.get({})
        res.status(200).json(response);
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
})

export const GetById = (async (req: any, res: any) => {
    try{
    const row = await planeModel.get({registration: req.params.registration});
    res.status(200).json(row[0]);
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
})

export const Filtered = async (req: any, res: any) => {
    console.log(JSON.stringify(req.query))
    try{
        res.status(200).json(await planeModel.get({
            brand:req.query.brand,
            model:req.query.model,
        
        
    }));
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
}

export const Create = async (req:any, res:any) =>{
    if(req.query.registration  && req.query.brand && req.query.model){
        try{
        await planeModel.create({
            registration:req.query.registration,
            brand:req.query.brand,
            model:req.query.model,

        })
        res.status(201).json("OK")
        } catch (E){
            errHandle(E,res,replaceHolder)
        }
    }else{
        res.json("KO")
    }
}

export const Update = async (req:any, res:any) =>{
    console.log(
        req.params.registration,

    )
    console.log(

        req.query.brand,
    )
    console.log(

        req.query.model,
    )
    try{
    await planeModel.update(
        req.params.registration,
        {
            brand:req.query.brand,
            model:req.query.model,
        }

    )
    res.status(200).json("done")
    } catch (E){
        errHandle(E,res,replaceHolder)
    }
}
export const Delete = async (req:any, res:any) =>{
    try{

    
    await planeModel.delete(
        req.params.registration,
    )
    res.status(200).json("done")
    } catch (E){
        errHandle(E,res,replaceHolder)
    }   
}