module.exports = function reverse (n) {
  let arr = Array.from(String(n))

  if (arr[0] === '-') {
    arr.shift()
  }
  
  result = arr.reduce( (res, el) => res = el + res, '')
  return Number(result)
}
