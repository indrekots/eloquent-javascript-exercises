<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  var input = document.getElementById("field");
  var suggestions = document.getElementById("suggestions");

  suggestions.addEventListener("click", function(event) {
    var txt = event.target.textContent;
    input.value = txt;
  });

  input.addEventListener("input", function() {
    suggestions.textContent = "";
    var value = input.value;
    if (value) {
      terms.forEach(function(term) {
        if (term.indexOf(value) == 0) {
          var txtElem = document.createElement("div");
          txtElem.textContent = term;
          suggestions.appendChild(txtElem);
        }
      });
    }
  });
</script>
