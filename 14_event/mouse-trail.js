<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  var trailArray = [];
  addEventListener("mousemove", function(event) {
    var trail;
    console.log(trailArray.length);
    if (trailArray.length < 20) {
      trail = document.createElement("div");
      trail.className = "trail";
      document.body.appendChild(trail);
      trailArray.push(trail);
    }
    else {
      trail = trailArray.shift();
      trailArray.push(trail);
    }

    trail.style.left = (event.pageX - 3) + "px";
    trail.style.top = (event.pageY - 3) + "px";
  });
</script>
