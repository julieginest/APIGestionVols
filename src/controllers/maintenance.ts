import * as func from "../models/maintenancesModel";

export const  GetAll =  (async (req: any, res: any) => {
    res.json(await func.maintenancesModel.get({}));
})

export const GetById = (async (req: any, res: any) => {
    const row = await func.maintenancesModel.get({Id: req.Id});
    res.json(row[0]);
})

export const Filtered = (async (req: any, res: any) => {
    res.json(await func.maintenancesModel.get({
            title: req.params.title,
            technicianID: req.params.technicianID,
            planeRegistration: req.params.planeRegistration,
            start: req.params.start,
            end: req.params.end,
        
        
    }));
})

