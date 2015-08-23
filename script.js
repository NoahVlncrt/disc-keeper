var holeScore = 1;
var hole = 1;
var roundScore = 0;
var totalScore = 0;
var par = 0;
var game = document.getElementById("mainGame");
var end = document.getElementById("endGame");

var load = function() {
  end.style.display = 'none';
  document.getElementById("score").innerHTML = holeScore;
  document.getElementById("hole").innerHTML = hole;
  document.getElementById("par").innerHTML = par;
  document.getElementById("roundScore").innerHTML = roundScore;
  document.getElementById("totalScore").innerHTML = totalScore;
}

var loadEnd = function() {
  document.getElementById("endPar").innerHTML = roundScore;
  document.getElementById("endShots").innerHTML = totalScore;
}

var loadmin = function() {
  document.getElementById("score").innerHTML = holeScore;
  document.getElementById("totalScore").innerHTML = totalScore;
}

var buttonVal = function() {
  document.getElementById("par3").disabled = false;
  document.getElementById("par4").disabled = false;
}

var par3 = function() {
  par = 3;
  document.getElementById("par4").disabled = true;
}

var par4 = function() {
  par = 4;
  document.getElementById("par3").disabled = true;
}

var add = function() {
  holeScore += 1;
  totalScore += 1;
  loadmin();
}

var subtract = function() {
  holeScore -= 1;
  totalScore -= 1;
  loadmin();
}

var checkEnd = function() {
  if (hole >= 19) {
    game.style.display = 'none';
    end.style.display = 'block';
    loadEnd();
  };
}

var next = function() {
  hole += 1;
  roundScore += holeScore - par;
  checkEnd();
  holeScore = 0;
  buttonVal();
  document.getElementById("hole").innerHTML = hole;
  document.getElementById("roundScore").innerHTML = roundScore;
  document.getElementById("score").innerHTML = holeScore;
}

var debug = function() {
  holeScore = 0;
  totalScore = 0;
  hole = 1;
  roundScore = 0;
  par = 0;
  load();
}