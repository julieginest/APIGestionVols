import {technicianModel} from "../models/techniciansModel";

export const  GetAll =  (async (req: any, res: any) => {
    res.json(await technicianModel.get({}));
})

export const GetById = (async (req: any, res: any) => {
    const row = await technicianModel.get({Id: Number(req.params.Id)});
    res.json(row[0]);
})

export const Filtered = async (req: any, res: any) => {
    console.log(JSON.stringify(req.query))
    res.json(await technicianModel.get({
            Id: Number(req.query.Id),
            firstName:req.query.firstName,
            surName:req.query.surName,
        
        
    }));
}

