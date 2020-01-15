class Formatter {
  //add static methods here
  static capitalize(str){
    let splitStr = str.split("")
    let letter = splitStr.shift()
    splitStr.unshift(letter.toUpperCase())
    return splitStr.toString().replace(/,/g, '')
  }

  static sanitize(str){
    let temp = str.replace(/[^\w\s\'\-]/g, '')
    return temp
   

  }

  static titleize(str){
    str = str.split(' ')
    // console.log(str)
    let newArr = []
    for(let word of str){
      newArr.push(word[0].toUpperCase() + word.substr(1))
    }

    for(let i=1;i<newArr.length;i++){
      switch(newArr[i]){
        case "A":
          newArr[i] = 'a'
          break;
        case "An":
          newArr[i] = 'an'
          break;
        case "But":
          newArr[i] = 'but'
          break;
        case "Of":
          newArr[i] = "of"
          break;
        case "And":
          newArr[i] = "and"
          break;
        case "For":
          newArr[i] = "for"
          break;
        case "At":
          newArr[i] = "at"
          break;
        case "By":
          newArr[i] = "by"
          break;
        case "From":
          newArr[i] = "from"
          break;
        case "The":
          newArr[i] = "the"
      }
    }

    return newArr.join(" ")
  }
}