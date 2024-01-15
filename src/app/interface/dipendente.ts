export interface Dipendente {
  nome: string;
  cognome: string;
  dataAssunzione: string;
  businessUnit: { id: number; nome: string };
  email: string;
  codiceFiscale: string;
  dataNascita: string;
}
