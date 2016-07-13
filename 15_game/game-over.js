<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runGame function. Modify it...
  var lives = 3;
  function runGame(plans, Display) {
    function startLevel(n) {
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == "lost") {
          lives--;
          if (lives == 0) {
            console.log("You lost!");
          } else {
            startLevel(n);
          }
        }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log("You win!");
      });
    }
    startLevel(0);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>
