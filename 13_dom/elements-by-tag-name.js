<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    var result = [];
    var currentNode = node;
    if (currentNode.tagName && currentNode.tagName.toLowerCase() == tagName.toLowerCase()) {
      result.push(currentNode);
    }
    if (currentNode.hasChildNodes()) {
      for (var i = 0; i < currentNode.childNodes.length; i++) {
        var childs = byTagName(currentNode.childNodes[i], tagName);
        childs.forEach(function(child) {
          result.push(child);
        });
      }
    }
    return result;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
