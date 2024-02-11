export class DateTime{
    date: Date;
    constructor(value: string){
        this.date = new Date(value);
    }

    getDate = () => {
        const month = this.date.getMonth()+1 < 10 ? `0${this.date.getMonth()+1}` : this.date.getMonth()+1
        return `${this.date.getDate()}.${month}.${this.date.getFullYear()}`
    }
}