export class Dipendente {
  constructor(
    public nome: string,
    public cognome: string,
    public dataAssunzione: string,
    public businessUnit: { id: number; nome: string },
    public email: string,
    public codiceFiscale: string,
    public dataNascita: string
  ) {}
}
