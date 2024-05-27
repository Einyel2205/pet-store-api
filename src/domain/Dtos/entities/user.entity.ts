export class UserEntity{ //1 Creación de la clase 

    constructor( //2 definimos el constructor
        //3 definición de los atributos 
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string[],
        public img?: string
    ){}

    

}
