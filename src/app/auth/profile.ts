export class Profile {
    constructor(public id: string,
        public firstName: string,
        public lastName: string,
        public fullName: string,
        public email: string,
        public username: string,
        public user_role: string,
        public dashboard: string,
        public verified: number) { }
}
