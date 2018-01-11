export class Config {

  port: string;

  constructor() {
    this.port = process.env.PORT || '8080';
  }
}
