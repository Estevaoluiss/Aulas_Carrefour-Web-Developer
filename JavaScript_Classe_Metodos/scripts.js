class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this._agencia = agencia
    this._numero = numero
    this._saldo = 0
    this.tipo = tipo
  }
  get saldo() {
    return this._saldo
  }
  set saldo(valor) {
    this._saldo = valor
  }
  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação negada'
    }
    this._saldo = this._saldo - valor
  }
  depositar(valor) {
    this._saldo = this._saldo + valor
    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, saldo)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
    this._credito = 0
  }
  get creditoSaldo() {
    return this._credito
  }
  set creditoSaldo(valor) {
    this._credito = valor
  }
  credito(valor) {
    let limite = 1000

    if (this._credito >= limite) {
      return 'cartao negado'
    }
    this._credito = this._credito + valor
    return this._credito
  }
}
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupança'
  }
}
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'Universitaria'
  }
  sacar(valor) {
    if (valor > 500) {
      return 'Operação negada'
    }
    this._saldo = this._saldo - valor
  }
}
