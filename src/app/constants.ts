import { InjectionToken } from '@angular/core';

export const DEFAULT_SEASON_LIST = [2015, 2016, 2017, 2018, 2019, 2020];
export const F1_SEASON_LIST_TOKEN = new  InjectionToken<Array<number>>('Available seasons');

export const FLAGS_CDN_URL = 'https://cdn.ipregistry.co/flags/emojitwo';
