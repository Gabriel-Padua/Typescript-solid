import CalcularSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";
import GeraRelatorio from "./GeraRelatorio";
import Pagamento from "./Pagamento";
import QuadroColaboradores from "./QuadroColaboradores";
import { Cargos } from "./enum/cargos";

const quadroColaboradores = new QuadroColaboradores();
const calcularSalario = new CalcularSalario();
const geradorDeRelatorios = new GeraRelatorio(
  quadroColaboradores.colaboradores,
  calcularSalario,
);
const pagamento = new Pagamento(calcularSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(geradorDeRelatorios.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);
