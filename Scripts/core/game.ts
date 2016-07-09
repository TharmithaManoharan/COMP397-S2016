module objects{
export class Person{
	//private instance variables
	private _name: string;
	private _age: number;
	//constructors
	constructor(name, age){
		this._name=name;
		this._age=age;
	}
	//public methods
	public Speaks():void{
		console.log(this._name + " says hello!");
	}
}
}

function init():void {
    console.log("Game started now!");
}

window.addEventListener("load", init);