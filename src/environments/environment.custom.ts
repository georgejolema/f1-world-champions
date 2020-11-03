import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RacesInterceptor } from '../app/services/races.interceptor';

export const environment = {
  production: false,
  mocks: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RacesInterceptor,
      multi: true,
    },
  ],
};
