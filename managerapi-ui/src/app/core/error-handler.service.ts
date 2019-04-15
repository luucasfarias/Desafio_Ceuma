import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let message: string;
    if (typeof errorResponse === 'string') {
      message = errorResponse;
    } else if (errorResponse instanceof Response && errorResponse.status >= 400 && errorResponse.status <= 499) {
      message = 'Ocorreu um erro ao nesta solicitação';
      console.log('Error message: ', message);
    } else {
      message = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }
    this.toasty.error(message);
  }

}
