import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CountryState } from "./content.reducer";

export const selectCountries = (state: AppState) => state.countryState;
export const allCountries =createSelector(
    selectCountries,
    (state: CountryState) => state.countries
);
export const allFiltered =createSelector(
    selectCountries,
    (state: CountryState) => state.filteredCountries
);
