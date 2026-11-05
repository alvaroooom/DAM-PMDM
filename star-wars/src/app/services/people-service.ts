import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PeopleListResponse } from '../interfaces/people-list-response';
import { Observable } from 'rxjs';
import { PeopleDetailResponse } from '../interfaces/people-detail-response';

// STEP4: crear el servicio que hará la petición sobre Star Wars
@Service()
export class PeopleService {
    http = inject(HttpClient);

    getAll(): Observable<PeopleListResponse> {
        return this.http.get<PeopleListResponse>('https://swapi.dev/api/people');
    }

    // STEP4: declaro, en mi servicio, un nuevo método que me obtiene la información
    // de un personaje a partir del ID de ese personaje.

    getOne(id: string): Observable<PeopleDetailResponse> {
        return this.http.get<PeopleDetailResponse>(`https://swapi.dev/api/people/${id}`);
    }
}
