import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NamespaceService {
  private namespace$: BehaviorSubject<string> = new BehaviorSubject(
    environment.defaultNamespace
  );

  constructor() {}

  getNamespace(): Observable<string> {
    return this.namespace$.asObservable();
  }

  setNamespace(newNamespace: string): void {
    this.namespace$.next(newNamespace);
  }
}
