ChemicalizeMarvinJs.createEditor("#marvin-test").then(function(marvin) {
  function showDialog() {
    marvin.exportStructure("smiles").then(function(smiles) {
      alert("Current molecule: " + smiles);
    });
  }
  marvin.importStructure("name", "benzene");
  document.getElementById("action-button").addEventListener("click", showDialog);
});

//===== Search Option Button Functionality ======
document.getElementById("name-search-btn").addEventListener("click", function() {
  document.getElementById("name-search-input").style.display = "block";
  document.getElementById("chem-sketch").style.display = "none";
});

document.getElementById("draw-structure-btn").addEventListener("click", function() {
  document.getElementById("chem-sketch").style.display = "inline-block";
  document.getElementById("name-search-input").style.display = "none";
});
