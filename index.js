class Formatter {
  //add static methods here
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(string) {
    let result = []
    let small = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let strSplit = string.split(' ')
    strSplit.forEach(function(word) {
      if(word === string[0]) {
        console.log(this)
        result.push(Formatter.capitalize(word))
      } else if (small.includes(word)) {
        result.push(word)
      } else{
        result.push(Formatter.capitalize(word))
      }
    })
    return result.join(' ');
  }
}