// an algorithm for decrpyting a ROT13 cipher

function rot13(str) {
  const patt = /[A-Z]/

  let res = ''

  str = str.toUpperCase()

  for (let i = 0; i < str.length; i++) {
    let $c = str.charAt(i)
    if (!patt.test($c)) {
      res += $c
      continue
    }

    let $p = str.charCodeAt(i) - 13

    if ($p < 65) {
      $p = 90 - (64 - $p)

    }
    res += String.fromCharCode($p)
  }

  return res;
}
