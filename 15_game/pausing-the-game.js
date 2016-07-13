<link rel="stylesheet" href="css/game.css">

<body>
<script>
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    var paused = false;
    addEventListener("keyup", function(event) {
      if (event.keyCode == 27) {
        paused = !paused;
        if (!paused) runAnimation(tick);
      }
    });
    function tick(step) {
      if (paused) return false;
      level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        if (andThen)
          andThen(level.status);
        return false;
      }
    }
    runAnimation(tick);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>
