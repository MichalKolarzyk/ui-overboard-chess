export class DateViewModel{
    date: Date;
    constructor(value: string){
        this.date = new Date(value);
    }

    getDate = () => {
        const month = this.date.getMonth()+1 < 10 ? `0${this.date.getMonth()+1}` : this.date.getMonth()+1
        return `${this.date.getDate()}.${month}.${this.date.getFullYear()}`
    }

    getHours = () => {
        return this.date.getHours();
    }

    getMinutes = () => {
        const minutes = this.date.getMinutes();
        if(minutes < 10){
            return `0${minutes}`
        }
        return minutes;
    }
}