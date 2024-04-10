function nextLayer() {
  var name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    document.getElementById("layer1").style.display = "none";
    document.getElementById("layer2").style.display = "block";
    document.getElementById("greeting").innerText = "Eid Mubarak! "+name+ ". May Allah's blessings bring you joy, peace, and prosperity. Wishing you a blessed and joyous Eid filled with love and laughter!";
  } else {
    alert("Please enter your name.");
  }
}
