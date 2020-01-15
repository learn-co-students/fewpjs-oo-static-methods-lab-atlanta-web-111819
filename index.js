class Formatter {
  static capitalize(word) {
    return word[0].toUpperCase() + word.substring(1)
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(phrase) {
    const exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = phrase.split(" ")
    const output = []

    for(let i = 0; i < words.length; i++) {
      if (i === 0 || exemptWords.indexOf(words[i]) < 0) {
        output.push(Formatter.capitalize(words[i]))
      } else {
        output.push(words[i])
      }
    }

    return output.join(" ")
  }
}