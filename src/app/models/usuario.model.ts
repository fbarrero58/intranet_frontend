export class Usuario{

    constructor(
        public correo: string,
        public password: string,
        public nombres?: string,
        public apellidos?: string,
        public cargo?: string,
        public celular?: string,
        public correo_personal?: string,
        public direccion?: string,
        public fecha_nacimiento?: string,
        public fecha_vinculacion?: string,
        public foto?: string,
        public id?: string,
        public id_rol?: string,
        public id_usuario?: string,
        public pais_origen?: string,
        public pais_residencia?: string,
        public perfil_profesional?: string,
        public rut?: string
    ){}

}