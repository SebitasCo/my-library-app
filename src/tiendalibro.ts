import { libros } from "./libros";
import { libro } from "./libro";

export class listas {
    Nombre: string
    Descripcion: string
    Libros: libro[] = []

    constructor(Nombre: string, Descripcion: string,  Libros: libro[]) {
        this.Nombre = Nombre
        this.Descripcion = Descripcion
        this.Libros = Libros
    }

    ObtenerLibros(): libro[] {
        return this.Libros;
    }
    
    EliminarLibro(Titulo: string): void {
        for (let i = 0; i < this.Libros.length; i++) {
            if (this.Libros[i].Titulo === Titulo) {
                this.Libros.splice(i, 1);
                break; // 
            }
        }
    }

    AgregarLibro(libro: libro): void {
        this.Libros.push(libro);
    }

}
