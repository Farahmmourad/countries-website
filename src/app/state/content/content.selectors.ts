import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Country } from "src/app/content/Country";
import { CountryState } from "./content.reducer";

export const selectCountries = (state: AppState) => state.countryState;
export const allCountries =createSelector(
    selectCountries,
    (selectCountries: CountryState) => selectCountries.countries
);
