export interface Dipendente {
  id: number;
  nome: string;
  cognome: string;
  codiceFiscale: string;
  numeroTelefono: number;
  email: string;
  dataAssunzione: string;
  dataInserimento?: string;
  cessato: boolean;
  bu_id: number;
  utente_inserimento_id?: number;
  contratto?: string;
}
