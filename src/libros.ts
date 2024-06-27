import { book } from "./libro";

export const libros: book[] = [
    new book('El señor de los anillos', 'J.R.R. Tolkien', 'Fantasía', 'Español', 25.99, 'Tapa dura', 'ISBN1', 'Una novela de fantasía épica', 'Nuevo', 'Estantería 1', new Date('1954-07-29'), 'Editorial Minotauro', 432, 0.8),
    new book('El hobbit', 'J.R.R. Tolkien', 'Fantasía', 'Inglés', 18.99, 'Rústica', 'ISBN2', 'Una novela de fantasía épica', 'Usado', 'Estantería 2', new Date('1937-09-21'), 'Editorial Allen & Unwin', 310, 0.5),
    new book('El amor en los tiempos del cólera', 'Gabriel García Márquez', 'Romance', 'Español', 15.99, 'Tapa blanda', 'ISBN3', 'Una novela de amor y pasión', 'Nuevo', 'Estantería 3', new Date('1985-01-01'), 'Editorial La Oveja Negra', 464, 0.7),
    new book('La isla del tesoro', 'Robert Louis Stevenson', 'Aventuras', 'Español', 10.99, 'Rústica', 'ISBN4', 'Una novela de aventuras clásica', 'Usado', 'Estantería 4', new Date('1883-01-01'), 'Editorial Penguin Books', 240, 0.4),
    new book('El principito', 'Antoine de Saint-Exupéry', 'Infantil', 'Francés', 8.99, 'Tapa dura', 'ISBN5', 'Una novela infantil clásica', 'Nuevo', 'Estantería 5', new Date('1943-04-06'), 'Editorial Gallimard', 96, 0.3),
    new book('Cien años de soledad', 'Gabriel García Márquez', 'Realismo mágico', 'Español', 12.99, 'Tapa blanda', 'ISBN6', 'Una novela de realismo mágico', 'Usado', 'Estantería 6', new Date('1967-05-05'), 'Editorial La Oveja Negra', 448, 0.6)
];