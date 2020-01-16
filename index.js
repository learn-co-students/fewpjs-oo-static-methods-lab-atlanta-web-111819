class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let nonCapitalize = ['the','a','an','but','of','and','for','at','by','from']
    let words = string.split(' ')
    let newString = []



    function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }

    words.forEach(word => {
      if(words[0] === word){
        newString.push(capitalize(word))
      }else if(nonCapitalize.includes(word)){
        newString.push(word)
      }else{
        newString.push(capitalize(word))
      }
    })

    
    return newString.join(' ')


  }
  


}