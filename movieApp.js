const $submitButton = $("#btn");

$submitButton.on("click", function (e) {
  e.preventDefault();
  let $movie = $("#movieTitle").val();
  let $rating = $("#rating").val();
  let $removeButton = $("<button>remove</button>");
  let $li = $("<li></li>");

  $("ol").append($li);
  $li.append(`MOVIE: ${$movie}, YOUR RATING IS: ${$rating}`);
  $li.append($removeButton);

  $("#movieTitle").val("");
  $("#rating").val("");

  $removeButton.on("click", function (e) {
    $li.remove();
  });
});
