export interface TechnicianObject{
    Id: number,
    firstName: string,
    surName: string,
}
export interface TechnicianQuery{
    Id?: number | null,
    firstName?: string | null,
    surName?: string | null
}