<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
    var active = 0;
    var divs = node.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
      var button = document.createElement("button");
      button.id = "tab-"+i;
      button.textContent = divs[i].getAttribute("data-tabname");
      button.addEventListener('click', function(event) {
        active = event.target.id.slice(4);
        for (var j = 0; j < divs.length; j++) {
          if (j == active) {
            divs[j].style.display = "block";
          }
          else {
            divs[j].style.display = "none";
          }
        }
      });
      document.body.insertBefore(button, node);
      if (i == active) {
        divs[i].style.display = "block";
      }
      else {
        divs[i].style.display = "none";
      }
    }
  }
  asTabs(document.querySelector("#wrapper"));
</script>
