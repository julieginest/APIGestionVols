export interface PlaneObject {
    registration: string,
    brand: string,
    model: string,
}

export interface PlaneQuery {
    registration?: string | null,
    brand?: string | null,
    model?: string | null,
}