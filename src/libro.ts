
export class book {
    constructor(
      public Titulo: string,
      public Autor: string,
      public Genero: string,
      public Idioma: string,
      public Precio: number,
      public Formato: string,
      public ISBN: string,
      public Descripcion: string,
      public Estado: string,
      public Ubicacion: string,
      public FechaPublicacion: Date,
      public Editorial: string,
      public Paginas: number,
      public Peso: number
    ) {}
  }