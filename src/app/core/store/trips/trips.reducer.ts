import { createReducer, on } from '@ngrx/store';
import { TripsState } from '../../models/trips.model';
import {
  carriagesLoadedSuccess,
  loadingFinished,
  loadingStarted,
  ordersLoadedSuccess,
  rideLoadedByIdSuccess,
  routeLoadedByIdSuccess,
  routesLoadedSuccess,
  searchLoadedSuccess,
  stationsLoadedSuccess,
  usersLoadedSuccess,
} from './trips.actions';

const inititalTripState: TripsState = {
  stations: [],
  routes: [],
  carriages: [],
  orders: [],
  rides: [],
  users: [],
  searchResponses: [],
  loading: false,
};

export const tripsReducer = createReducer(
  inititalTripState,
  on(searchLoadedSuccess, (state, { search }): TripsState => {
    return { ...state, searchResponses: [...state.searchResponses, search] };
  }),
  on(stationsLoadedSuccess, (state, { stations }): TripsState => {
    return { ...state, stations,loading:false };
  }),
  on(routesLoadedSuccess, (state, { routes }): TripsState => {
    return { ...state, routes };
  }),
  on(carriagesLoadedSuccess, (state, { carriages }): TripsState => {
    return { ...state, carriages };
  }),
  on(ordersLoadedSuccess, (state, { orders }): TripsState => {
    return { ...state, orders };
  }),
  on(usersLoadedSuccess, (state, { users }): TripsState => {
    return { ...state, users };
  }),
  on(routeLoadedByIdSuccess, (state, { route }): TripsState => {
    return { ...state, routes: [...state.routes, route] };
  }),
  on(rideLoadedByIdSuccess, (state, { ride }): TripsState => {
    return { ...state, rides: [...state.rides, ride] };
  }),
  on(rideLoadedByIdSuccess, (state, { ride }): TripsState => {
    return { ...state, rides: [...state.rides, ride] };
  }),
  on(loadingStarted, (state): TripsState => {
    return { ...state, loading: true };
  }),
  on(loadingFinished, (state): TripsState => {
    return { ...state, loading: false };
  })
);
