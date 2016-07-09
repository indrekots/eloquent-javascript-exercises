function skipSpace(string) {
  var p = /#.*?\n|\s/;
  var match;
  while (match = p.exec(string)) {
    string = string.slice(0, match.index) + string.slice(match.index + match[0].length)
  }
  return string;
}
