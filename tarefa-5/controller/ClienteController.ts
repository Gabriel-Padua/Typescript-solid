import Cliente from "../entities/Cliente";
import IClienteRepository from "../repositories/interfaces/iClienteRepository";

export default class ClienteController {
  constructor(private repository: IClienteRepository) {}

  adicionaCliente(cliente: Cliente) {
    this.repository.adicionaCliente(cliente);
  }
  listaClientes() {
    return this.repository.listaClientes();
  }
}
