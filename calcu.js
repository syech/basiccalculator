function tambah() {
  event.preventDefault();
  var tmp1 = parseInt(document.getElementById("nilaiA").value);
  var tmp2 = parseInt(document.getElementById("nilaiB").value);
  tmp1 = tmp1 + tmp2;
  alert(tmp1);
}
function krg() {
  event.preventDefault();
  var tmp1 = parseInt(document.getElementById("nilaiA").value);
  var tmp2 = parseInt(document.getElementById("nilaiB").value);
  tmp1 = tmp1 - tmp2;
  alert(tmp1);
}
function kl() {
  event.preventDefault();
  var tmp1 = parseInt(document.getElementById("nilaiA").value);
  var tmp2 = parseInt(document.getElementById("nilaiB").value);
  tmp1 = tmp1 * tmp2;
  alert(tmp1);
}
function bg() {
  event.preventDefault();
  var tmp1 = parseInt(document.getElementById("nilaiA").value);
  var tmp2 = parseInt(document.getElementById("nilaiB").value);
  tmp1 = tmp1 / tmp2;
  alert(tmp1);
}
