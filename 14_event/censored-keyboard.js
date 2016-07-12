<input type="text">
<script>
  var field = document.querySelector("input");
  field.addEventListener('keydown', function(event) {
    var char = event.keyCode;
    if (char == 81 || char == 87 || char == 88) {
      event.preventDefault();
    }
  });
</script>
