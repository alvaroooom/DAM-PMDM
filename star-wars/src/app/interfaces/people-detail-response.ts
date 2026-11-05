// STEP3: defino con la web JSON to TS (https://transform.tools/json-to-typescript) las interfaces que forman parte de la respuesta para obtener los datos de un personaje a partir de su ID

// la otra opción es usar la extensión de VSCode Quicktype for JSON

export interface PeopleDetailResponse {
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
