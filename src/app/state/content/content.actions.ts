import { createAction, props } from '@ngrx/store';
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

export const filterByRegion = createAction(
    '[ListCountries Coponent] Filter By Region',
    props<{ region : string}>()
);

export const filterByName = createAction(
    '[ListCountries Coponent] Filter By Name',
    props<{ name : string }>()
)