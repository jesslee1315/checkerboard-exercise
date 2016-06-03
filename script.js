// Your JS goes here
//red and black

var gotBody = document.getElementById("body")

var div_random_colors = document.createElement("div");
// var div_red = document.createElement("div");




for (var i = 0; i < 63; i++) {
  // if (i % 2 === 1){
  var div_random_colors = document.createElement("div");
  div_random_colors.style.width = "11.1%";
  div_random_colors.style.height = "11.1%";
  div_random_colors.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  div_random_colors.style.float = "left";
  div_random_colors.style.paddingBottom = "11.1%";
  div_random_colors.style.margin = "0px";


  gotBody.appendChild(div_random_colors);
};

//   } else {
//     var div_red = document.createElement("div");
//     div_red.style.width = "11.1%";
//     div_red.style.height = "11.1%";
//     div_red.style.backgroundColor = "red";
//     div_red.style.float = "left";
//     div_red.style.paddingBottom = "11.1%";
//     div_red.style.margin = "0px";
//
//     gotBody.appendChild(div_red);
//   }
// };
