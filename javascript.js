let cels = () => {
  let cel = document.getElementById("cel").value;
  let far = (cel * 9) / 5 + 32;
  document.getElementById("far").value = far;
  let kel = Number(cel) + 273.15;
  document.getElementById("kel").value = kel;
};
let fars = () => {
  let far = document.getElementById("far").value;
  let cel = ((far - 32) * 5) / 9;
  document.getElementById("cel").value = cel;
  let kel = ((far - 32) * 5) / 9 + 273.15;
  document.getElementById("kel").value = kel;
};
let kelv = () => {
  let kel = document.getElementById("kel").value;
  let cel = (kel- 273.15);
  document.getElementById("cel").value = cel;
  let far = (kel  - 273.15) * 9/5 + 32;
  document.getElementById("far").value = far;
};
