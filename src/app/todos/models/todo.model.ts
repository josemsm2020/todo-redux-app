export class Todo {
    public id:number;        
    public texto:string;
    public completado:boolean;

    constructor(texto: string){        
        this.texto = texto;
        //this.id = new Date().getTime(); //Se quita porque estaba dejando el mismo id a todos los "todo"               
        this.id = Math.random(); //Puede suceder que alguno de los id coincida, pero para este ejercicio en la clase se opta por esta solución               
        this.completado = false;
    }
}
