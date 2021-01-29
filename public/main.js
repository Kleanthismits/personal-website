$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".materialboxed").materialbox();
  $(".tabs").tabs();
  $(".tooltipped").tooltip();
  $(".scrollspy").scrollSpy();
  $("#current_year").text(new Date().getFullYear());
  $("body").click((e) => {
    var source_class = $(e.target).attr("class");
    switch (source_class) {
      case "scroll_source":
        scrollToElement(e.target.id + "-section");
        break;
      default:
        break;
    }
  });
  $("#years-dev").text(calculateYearDiff());
});

function calculateYearDiff() {
  let now = Date.now();
  let begin = new Date(2019, 3, 1);
  let nowNew = new Date(now);

  let years = yearsDiff(begin, now);
  console.log(years);
  let months = years * 12 + (nowNew.getMonth() - begin.getMonth());

  let monthsMod = months % 12;
  if (monthsMod > 7) {
    return years;
  } else if (monthsMod < 4) {
    return years - 1;
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
  if (scroll_target.offset()) {
    //get the vertical distance of the element from the top of the page
    var verticalPositionOfElement = scroll_target.offset().top;
    console.log(verticalPositionOfElement);
    $(window).scrollTop(verticalPositionOfElement - 70);
  }
}
