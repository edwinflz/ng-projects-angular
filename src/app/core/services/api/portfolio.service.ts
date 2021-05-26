import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as ENV } from '@environment';
import { Project } from '@core/entities/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  fetchAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(ENV.urlAssets.project);
  }
}
