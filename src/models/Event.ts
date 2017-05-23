export class Event
{
    public id: number;
    public name: string;
    public description: string;
    public start_date: string;
    public end_date: string;
    public img_path: string;

    constructor(Id:number, Name:string, Description:string, Start_date:string, End_date:string, Img_path:string){
    	this.id = Id;
    	this.name = Name;
    	this.description = Description;
    	this.start_date = Start_date;
    	this.end_date = End_date;
    	this.img_path = Img_path;
    }
}