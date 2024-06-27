import { libro} from "./libro";

export const libros: libro[] = [
    new libro('1984', 'George Orwell', 'Ciencia Ficción', 'Español', 14.99, 'Tapa blanda', 'ISBN7', 'Una distopía clásica', 'Nuevo', 'Estantería 7', new Date('1949-06-08'), 'Editorial Secker and Warburg', 328, 0.7),
    new libro('Orgullo y prejuicio', 'Jane Austen', 'Clásico', 'Inglés', 12.99, 'Rústica', 'ISBN8', 'Una novela romántica clásica', 'Nuevo', 'Estantería 8', new Date('1813-01-28'), 'Editorial Thomas Egerton', 432, 0.6),
    new libro('Crónica de una muerte anunciada', 'Gabriel García Márquez', 'Novela', 'Español', 9.99, 'Tapa blanda', 'ISBN9', 'Una obra maestra de la literatura latinoamericana', 'Nuevo', 'Estantería 9', new Date('1981-05-05'), 'Editorial La Oveja Negra', 128, 0.4)
];