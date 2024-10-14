import {planeModel} from "../models/planesModel";

export const  GetAll =  (async (req: any, res: any) => {
    res.json(await planeModel.get({}));
})

export const GetById = (async (req: any, res: any) => {
    const row = await planeModel.get({registration: req.params.registration});
    res.json(row[0]);
})

export const Filtered = async (req: any, res: any) => {
    console.log(JSON.stringify(req.query))
    res.json(await planeModel.get({
            brand:req.query.brand,
            model:req.query.model,
        
        
    }));
}

