import {maintenancesModel} from "../models/maintenancesModel";

export const  GetAll =  (async (req: any, res: any) => {
    res.json(await maintenancesModel.get({}));
})

export const GetById = (async (req: any, res: any) => {
    const row = await maintenancesModel.get({Id: Number(req.params.Id)});
    res.json(row[0]);
})

export const Filtered = async (req: any, res: any) => {
    console.log(JSON.stringify(req.query))
    res.json(await maintenancesModel.get({
            title: req.query.title,
            technicianID: Number(req.query.technicianID),
            planeRegistration: req.query.planeRegistration,
            start: req.query.start,
            end: req.query.end,
        
        
    }));
}

