import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let message: string;
    if (typeof errorResponse === 'string') {
      message = errorResponse;
    } else {
      message = 'Erro ao realizar este processo. Tente novamente.';
      console.log('Error message: ', message);
    }
    this.toasty.error(message);
  }

}
