export class DateViewModel{
    date: Date;
    constructor(date: Date){
        this.date = date;
    }

    static FromString(value: string) : DateViewModel{
        return new DateViewModel(new Date(value));
    }


    getDate = () => {
        if(this.date === null || this.date === undefined){
            return "";
        }

        const month = this.date.getMonth()+1 < 10 ? `0${this.date.getMonth()+1}` : this.date.getMonth()+1
        return `${this.date.getDate()}.${month}.${this.date.getFullYear()}`
    }

    getHours = () => {
        if(this.date === null || this.date === undefined){
            return "";
        }

        return this.date.getHours();
    }

    getMinutes = () => {
        if(this.date === null || this.date === undefined){
            return "";
        }

        const minutes = this.date.getMinutes();
        if(minutes < 10){
            return `0${minutes}`
        }
        return minutes;
    }
}