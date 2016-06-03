// Your JS goes here
//red and black

var gotBody = document.getElementById("body")
var div_wrapper = document.createElement("div")
var div_pink  = document.createElement("div");
var div_mint = document.createElement("div");

div_wrapper.style.backgroundColor=-webkit-linear-gradient(top, white, #000);
gotBody.appendChild(div_wrapper)




for (var i = 0; i < 63; i++) {
  if (i % 2 === 1){
  var div_pink = document.createElement("div");
  div_pink.style.width = "11.1%";
  div_pink.style.height = "11.1%";
  div_pink.style.backgroundColor = "#FF8EA5";
  div_pink.style.float = "left";
  div_pink.style.paddingBottom = "11.1%";
  div_pink.style.margin = "0px";

  div_wrapper.appendChild(div_pink);

  } else {
    var div_mint = document.createElement("div");
    div_mint.style.width = "11.1%";
    div_mint.style.height = "11.1%";
    div_mint.style.backgroundColor = "#82FFBB";
    div_mint.style.float = "left";
    div_mint.style.paddingBottom = "11.1%";
    div_mint.style.margin = "0px";

    div_wrapper.appendChild(div_mint);

  }
};
