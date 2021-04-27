function changeImage() {
  if (document.getElementById("imgClickAndChange").src.endsWith("1.jpeg")) {
    document.getElementById("imgClickAndChange").src = "2.jpeg";
    document.getElementById("paragraph").innerHTML = "This is the big chunk dad.";
  } else if (document.getElementById("imgClickAndChange").src.endsWith("2.jpeg")) {
    document.getElementById("imgClickAndChange").src = "3.jpeg";
    document.getElementById("paragraph").innerHTML = "This is the tiny naked baby cat.";
  } else {
    document.getElementById("imgClickAndChange").src = "1.jpeg";
    document.getElementById("paragraph").innerHTML = "This is the naked mom."
  }
}