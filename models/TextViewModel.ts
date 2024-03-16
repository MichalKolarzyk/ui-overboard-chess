export class TextViewModel{
    maxLength: number;
    text?: string;

    constructor(text: string, maxLength: number){
        this.maxLength = maxLength;
        this.text = text;
    }

    ToString(){
        if(this.text === null || this.text === undefined){
            return "";
        }
        return this.text.length >= this.maxLength 
            ? `${this.text.substring(0, this.maxLength)}...`
            : this.text 
    }
}