import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountriesFailure,
} from './content.actions';
import { CountriesService } from 'src/app/content/countries.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class ContentEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private countriesService: CountriesService
  ) {}

  
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      switchMap(() =>
        
        from(this.countriesService.getCountries()).pipe(
          
          map((countries) =>  
             loadCountriesSuccess({ countries : countries })),
          
          catchError((error) => of(loadCountriesFailure({ error })))
        )
      )
    )
  );

  // Run this code when the addTodo or removeTodo action is dispatched
//   saveTodos$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(addTodo, removeTodo),
//         withLatestFrom(this.store.select(selectAllTodos)),
//         switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
//       ),
//     // Most effects dispatch another action, but this one is just a "fire and forget" effect
//     { dispatch: false }
//   );
}