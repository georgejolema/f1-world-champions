import { InjectionToken } from '@angular/core';
import { IconDefinition, faTrophy, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export type Icons = {[key: string]: IconDefinition};

export const DEFAULT_SEASON_LIST = [2015, 2016, 2017, 2018, 2019, 2020];
export const F1_SEASON_LIST_TOKEN = new  InjectionToken<Array<number>>('Available seasons');

export const FLAGS_CDN_URL = 'https://cdn.ipregistry.co/flags/emojitwo';

export const icons: Icons = {
  trophy: faTrophy,
  ellipsis: faEllipsisH,
};
