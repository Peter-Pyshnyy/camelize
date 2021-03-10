let arr = "odin-dwa".split("-");
alert(arr.join(""));

function camelize(str) {
  return str.split("-").join("");
}
alert(camelize(["odin-dwa1"]));

function camelize2(str) {
  let arr;
  arr = str.split("-");
  return arr.join("");
}
alert(camelize2(["odin-dwa2"]));
