// STEP3: generar la interface de respuesta de la petición
// que vamos a implementar: ng g interface interfaces/people-list-response

export interface PeopleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

export interface People {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  name: string;
  url: string;
}
