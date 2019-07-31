/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  // code below here
  var separator = '&'
  var result = []
  var index = 0
  var temp = 0
  if(hero.length === 0){
    return "There's no heroes"
  }
  for(var i=0; i<hero.length;i++){
    if(hero[i] === separator){
      var tempData = ""
      for(var j=temp; j<i; j++){
        if(hero[j] !== separator){
          tempData += hero[j]
        }
      }

      result[index] = tempData
      index++
      temp = i
    }
  }

  if(temp < hero.length -1){
    tempData = ""

    for(var k=temp+1; k<hero.length; k++){
      tempData += hero[k]
    }
    result[index] = tempData
    for(var k=0; k<result.length;k++){
      if(result[k] === ''){
        result.splice(k, 1)
      }
    }
  }
  return result
}

// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""))
// There's no heroes
