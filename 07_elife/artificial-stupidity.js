function SmartPlantEater() {
  this.energy = 20;
  this.direction = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 80 && space)
    return {type: "reproduce", direction: space};
  var plantCount = view.findAll("*");
  var plant = view.find("*");
  if (plant && this.energy <= 90 && plantCount.length >= 2)
    return {type: "eat", direction: plant};
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s";
  return {type: "move", direction: this.direction};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
