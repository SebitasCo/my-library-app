import { libro } from './libro';
import { listas } from './tiendalibro';
import { libros } from './libros';

import promptSync from 'prompt-sync';

const prompt = promptSync();


const lista1 = new listas('lista 1', 'Sección libros nuevos', libros);



function menu(): void {
    let opcion: string;
    do {
        console.log('\n Menú \n');
        console.log('1. Mostrar Libros');
        console.log('2. Eliminar Libro');
        console.log('3. Agregar Libro');
        console.log('4. Salir Del Programa \n ');
        opcion = prompt('Seleccione : ');

        switch (opcion) {
            case '1':
                function MostrarLibros(): void {
                    const libros = lista1.ObtenerLibros();
                    if (libros.length === 0) {
                        console.log('No hay libros en la sección.');
                    } else {
                        libros.forEach(librx => {
                            console.log(`
                                Título: ${librx.Titulo},
                                Autor: ${librx.Autor},
                                Género: ${librx.Genero},
                                Idioma: ${librx.Idioma},
                                Precio: ${librx.Precio},
                                Formato: ${librx.Formato},
                                ISBN: ${librx.ISBN},
                                Descripción: ${librx.Descripcion},
                                Estado: ${librx.Estado},
                                Ubicación: ${librx.Ubicacion},
                                Fecha de Publicación: ${librx.FechaPublicacion.toLocaleDateString()},
                                Editorial: ${librx.Editorial},
                                Número de Páginas: ${librx.Paginas},
                                Peso: ${librx.Peso} kg`);
                        });
                    }
                }
                break;
            case '2':
                function eliminarLibro(): void {
                    const Titulo = prompt('Ingrese el titulo del libro a eliminar: ');
                    lista1.EliminarLibro(Titulo);
                    console.log('Libro eliminado correctamente.');
                }
                break;
            case '3':
                function agregarLibro(): void {
                    const Titulo = prompt("Ingrese el título del libro: ");
                    const Autor = prompt("Ingrese el autor del libro: ");
                    const Genero = prompt("Ingrese el género del libro: ");
                    const Idioma = prompt("Ingrese el idioma del libro: ");
                    const Precio = parseFloat(prompt("Ingrese el precio del libro: "));
                    const Formato = prompt("Ingrese el formato del libro: ");
                    const ISBN = prompt("Ingrese el ISBN del libro: ");
                    const Descripcion = prompt("Ingrese la descripción del libro: ");
                    const Estado = prompt("Ingrese el estado del libro (nuevo/uso): ");
                    const Ubicacion = prompt("Ingrese la ubicación del libro: ");
                    const FechaPublicacion = new Date(prompt("Ingrese la fecha de publicación del libro: "));
                    const Editorial = prompt("Ingrese la editorial del libro: ");
                    const Paginas = parseInt(prompt("Ingrese el número de páginas del libro: "), 10);
                    const Peso = parseInt(prompt("Ingrese el peso del libro: "), 10);
                
                    const librx = new libro( Titulo, Autor,Genero,Idioma,Precio,Formato,ISBN,Descripcion,Estado,Ubicacion,FechaPublicacion,Editorial,Paginas,Peso);
                    lista1.AgregarLibro(librx);
                    console.log('Libro agregado correctamente.');
                }
                
                break;
            case '4':
                console.log('Saliste del programa...');
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
        }
    } while (opcion !== '4');
}

menu();
