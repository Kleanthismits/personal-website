$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".materialboxed").materialbox();
  $(".tabs").tabs();
  $(".tooltipped").tooltip();
  $(".scrollspy").scrollSpy();
  $(".dropdown-trigger").dropdown();
  $("#current_year").text(new Date().getFullYear());
  $(".fixed-action-btn").floatingActionButton();
  $(".scroll_source").click((e) => {
    e.preventDefault();
    var source_class = $(e.target).attr("class");
    scrollToElement(e.target.id + "-section");
  });
  $("#years-dev").text(calculateYearDiff());

  if ($(window).width() < 641) {
    $("codersrank-work-experience").attr("logos", "false");
    $("codersrank-skills-chart").attr("labels", "false");
  } else {
    $("codersrank-work-experience").attr("logos", "true");
    $("codersrank-skills-chart").attr("labels", "true");
  }

  $(window).resize((e) => {
    if ($(window).width() < 641) {
      $("codersrank-work-experience").attr("logos", "false");
      $("codersrank-skills-chart").attr("labels", "false");
    } else {
      $("codersrank-work-experience").attr("logos", "true");
      $("codersrank-skills-chart").attr("labels", "true");
    }
  });
});

function calculateYearDiff() {
  let begin = new Date(2019, 3, 1);
  let now = new Date();

  let years = now.getFullYear() - begin.getFullYear();
  let months = years * 12 + (now.getMonth()+1 - begin.getMonth());
  let fullYears = Math.floor(months/12);

  let monthsRemainder = months % 12;

  if (monthsRemainder > 7) {
    return fullYears + 1;
  } else if (monthsRemainder < 4) {
    return fullYears;
  } else {
    return fullYears + 0.5;
  }
}

function scrollToElement(elementId) {
  //get the element
  var scroll_target = $("#" + elementId);
  if (scroll_target.offset()) {
    //get the vertical distance of the element from the top of the page
    var verticalPositionOfElement = scroll_target.offset().top;
    $(window).scrollTop(verticalPositionOfElement - 70);
  }
}
