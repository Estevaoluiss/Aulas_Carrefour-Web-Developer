function validacao(arr, num) {
  try {
    // primeira validação se existe um array e se é numerico
    // 1. Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    if (!arr && !num) throw new referenceError('envie os paramentros')

    //2. Se o array não for do tipo 'object', lance um erro do tipo TypeError
    if (typeof arr !== 'object')
      throw new tyepError('Arry precisa ser do tipo object')

    //3. Se o número não for do tipo 'number', lance um erro do tipo TypeError
    if (typeof num !== 'number')
      throw new tyepError('Arry precisa ser do tipo number')

    //4. Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    if (arr.length !== num) throw new rangeError('Tamanho é invalido')

    return arr
  } catch (e) {
    //6. Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
    if (e instanceof ReferenceError) {
      console.log('Este erro é um referenceError')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erro é um TypeError')
      console.log(e.message)
    } else if (e instanceof rangeError) {
      console.log('Este erro é um rangeError')
      console.log(e.message)
    } else {
      console.log('tipo de erro não esperado ' + e)
    }
  }
}

console.log(validacao())
