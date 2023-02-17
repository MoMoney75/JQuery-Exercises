//PART 1
console.log("Lets get ready to party with jQuery!");

$("img").addClass("image-center");

$("p").eq(5).remove();

let randNum = Math.floor(Math.random() * 100);
$("h1").css("font-size", randNum);

$("ol").append("<li>This is my new LI!!!</li>");

$("aside").children().remove();
$("aside").append(
  "<p>I apologize for having that ridiculous list, was not my idea</p>"
);

let button = document.getElementById("btn");
let redCol = $("#red").val();
let blueCol = $("#blue").val();
let greenCol = $("#green").val();

$("button").on("click", function (e) {
  e.preventDefault();
  $("body").css("backgroundColor", "`rgb(${redCol},${greenCol},${blueCol})`");
});

$("img").on("click", function (e) {
  e.target.remove();
});
