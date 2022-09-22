import { createReducer, on } from "@ngrx/store";
import { filterByName, filterByRegion, loadCountries, loadCountriesFailure, loadCountriesSuccess } from './content.actions';
import { Country } from '../../content/Country';

export interface CountryState{
    countries : Country[];
    filteredCountries : Country[];
    error : string;
    status : 'pending' | 'loading' | 'error' |'success';
}

export const intialState : CountryState = {
    countries : [],
    filteredCountries : [],
    error : '',
    status : 'pending'
};

export const countriesReducer = createReducer(
    intialState,
    on(loadCountries,( state ) =>  ({ ...state, status: 'loading' })),
    on(loadCountriesSuccess, (state, {countries}) => ({
        ...state,
        countries: countries,
        filteredCountries : countries,
        error: '',
        status: 'success',
      })),
      
      on(loadCountriesFailure, (state,  {error}) => ({
        ...state,
        error: error,
        status: 'error',
      })),
      on(filterByRegion, (state, {region}) =>(
        {
          ...state,
          filteredCountries : state.countries.filter(n => { return n.region === region})
        }
      )),
      on(filterByName, (state, {name}) =>(
        {
          ...state,
          filteredCountries : state.countries.filter(n => { 
                if (n.name.common.includes(name)) 
                return n.name.common;
              return null;
            })
        }
      )),

)