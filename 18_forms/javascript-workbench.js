<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  // Your code here.
  var code = document.getElementById("code");
  var func = new Function("args", code.value);
  var returnVal = func();
  var output = document.getElementById("output");
  output.textContent = returnVal;
</script>
