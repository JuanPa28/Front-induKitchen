import {DetalleDto} from "./detalle.dto";
import {ClienteDto} from "./cliente.dto";

export class CarritoDto {
    id: string;
    cliente: ClienteDto;
    detalles: DetalleDto[];

    constructor() {
        this.detalles = [];
    }
}