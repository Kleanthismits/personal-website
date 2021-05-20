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
  let now = Date.now();
  let begin = new Date(2019, 3, 1);
  let nowNew = new Date(now);

  let years = yearsDiff(begin, now);
  let months = years * 12 + (nowNew.getMonth()+1 - begin.getMonth());

  let monthsMod = months % 12;

  if (monthsMod > 7) {
    return years+1;
  } else if (monthsMod < 4) {
    return years;
  } else {
    return years + 0.5;
  }
}

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

function scrollToElement(elementId) {
  //get the element
  var scroll_target = $("#" + elementId);
  console.log(scroll_target);
  if (scroll_target.offset()) {
    //get the vertical distance of the element from the top of the page
    var verticalPositionOfElement = scroll_target.offset().top;
    console.log(verticalPositionOfElement);
    $(window).scrollTop(verticalPositionOfElement - 70);
  }
}
