function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2
  })
}
const nums = [2, 4, 6, 8, 10]
console.log(mapSemThis(nums)) // cria um novo array
console.log(nums) // array sem ser auterado
