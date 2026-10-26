import Cliente from "../entities/Cliente";
import IClienteRepository from "./interfaces/iClienteRepository";

export default class InMemoryRepository implements IClienteRepository {
  private db: Cliente[];

  constructor() {
    this.db = [];
  }

  adicionaCliente(cliente: Cliente) {
    this.db.push(cliente);
  }
  listaClientes() {
    return this.db;
  }
}
