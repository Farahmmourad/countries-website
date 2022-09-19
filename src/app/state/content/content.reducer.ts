import { createReducer, on } from "@ngrx/store";
import { loadCountries, loadCountriesFailure, loadCountriesSuccess } from './content.actions';
import { Country } from '../../content/Country';
import { CountriesService } from "src/app/content/countries.service";

export interface CountryState{
    countries : Country[];
    error : string;
    status : 'pending' | 'loading' | 'error' |'success';
}

export const intialState : CountryState = {
    countries : [],
    error : '',
    status : 'pending'
};

export const countriesReducer = createReducer(
    intialState,
    on(loadCountries,( state ) =>  ({ ...state, status: 'loading' })),
    on(loadCountriesSuccess, (state, {countries}) => ({
        ...state,
        countries: countries,
        error: '',
        status: 'success',
      })),
      // Handle todos load failure
      on(loadCountriesFailure, (state,  {error}) => ({
        ...state,
        error: error,
        status: 'error',
      }))
)