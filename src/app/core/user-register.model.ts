export class UserRegisterModel {
    constructor(
        public username: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: any,
        public birthday: any,
        public gender: string
    ) {}
}