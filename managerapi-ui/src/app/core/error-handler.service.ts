import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { NotAuthenticatedError } from 'app/security/ceuma-http';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService, private router: Router) { }

  handle(errorResponse: any) {
    let message: string;
    if (typeof errorResponse === 'string') {
      message = errorResponse;
    } else if (errorResponse instanceof NotAuthenticatedError) {
      message = 'Sua sessão expirou.';
      this.router.navigate(['/login']);
    }
    // tslint:disable-next-line:one-line
    else if (errorResponse instanceof Response && errorResponse.status >= 400 && errorResponse.status <= 499) {
      message = 'Ocorreu um erro nesta solicitação';
      console.log('Error message: ', message);

      if (errorResponse.status === 403) {
        message = 'Você não tem permissão para exclusão de alunos.';
      }
    } else {
      message = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }
    this.toasty.error(message);
  }

}
