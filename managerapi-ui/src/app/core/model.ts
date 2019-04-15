export class Address {
  public_place: string;
  house_number: string;
  complement: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
}

export class Course {
  id: number;
  name: string;
  dateRegister: Date;
  workload: string;
}

export class Student {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  course = new Course();
  address = new Address();
}


