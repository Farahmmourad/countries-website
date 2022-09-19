import { createAction, props, StateObservable } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/content/countries.service';
import { Country } from 'src/app/content/Country';


export const loadCountries = createAction(
    '[ListCountries Component] load Countries'
);

export const loadCountriesSuccess = createAction (
    '[ListCountries Component] load Countries Success',
    props<{ countries : Country[]}>()
);

export const loadCountriesFailure = createAction (
    '[ListCountries Component] load Countries Failure',
    props<{ error : string}>()
);