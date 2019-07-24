function changeVocals (str) {
    //code di sini
    var result = ''
    for(var i=0; i<str.length; i++){
        var change = 0
        if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' ||
        str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            change = str.charCodeAt(i)+1
            result += String.fromCharCode(change)
    } else {
      result += str[i]
    }
  }
  return result
}
  function reverseWord (str) {
    //code di sini
    str = str.split("").reverse().join("");
    return str
  }
  
  function setLowerUpperCase (str) {
    //code di
    var result =''
    for(let i=0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase()
        } else if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase()
        } 
    }
    return result 
  }
  
  function removeSpaces (str) {
    //code di sini
    str = str.replace(/\s/g, '');
    return str
  }
  
  function passwordGenerator (name) {
    //code di 
    if(name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } else {
        var removeSpace = removeSpaces(name)
        // console.log(removeSpace)
        var changeVocal = changeVocals(removeSpace)
        // console.log(changeVocal)
        var reverseWords = reverseWord(changeVocal)
        // console.log(reverseWords)
        var setLowerUpper = setLowerUpperCase(reverseWords)
        // console.log(setLowerUpper)
    }
    return setLowerUpper
  }
 

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'