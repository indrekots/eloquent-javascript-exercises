<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    // Your code here
    var table = document.createElement('table');
    var heading = document.createElement('tr');

    Object.keys(data[0]).forEach(function(key) {
      heading.appendChild(createTextElement('th', key));
    });
    table.appendChild(heading);

    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      tr.appendChild(createTextElement('td', data[i].name));
      var height = createTextElement('td', data[i].height)
      height.style.textAlign = "right";
      tr.appendChild(height);
      tr.appendChild(createTextElement('td', data[i].country));
      table.appendChild(tr);
    }

    function createTextElement(tagName, content) {
      var elem = document.createElement(tagName);
      if (content) {
        elem.appendChild(document.createTextNode(content));
      }
      return elem;
    }
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
