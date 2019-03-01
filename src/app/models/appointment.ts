export class Appointment {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public date: Date
    ) {}
}
