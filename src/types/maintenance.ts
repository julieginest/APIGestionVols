export interface MaintenanceObject{
    Id: number,
    title: string,
    technicianID: number,
    planeRegistration: string,
    start: string,
    end: string,

}

export interface MaintenanceQuery{
    Id?: number | null,
    title?: string | null,
    technicianID?: number | null,
    planeRegistration?: string | null,
    start?: string | null,
    end?: string | null,

}


export interface MaintenanceCreation{
    title: string,
    technicianID?: number | null,
    planeRegistration: string,
    start?: string | null,
    end?: string | null,
}