export class Empresa{

    constructor(
        public habilitado: string = 'T',
        public nombre?: string,
        public codigo?: string,
        public id_tipo_empresa?: string,
        public alias?: string,
        public condicion_pago?: string
        
    ){}

}