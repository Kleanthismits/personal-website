$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".materialboxed").materialbox();
  $(".tabs").tabs();
  $(".tooltipped").tooltip();
  $(".scrollspy").scrollSpy();
  $("#current_year").text(new Date().getFullYear());
  $("body").click((e) => {
    e.preventDefault();
    var source_class = $(e.target).attr("class");
    switch (source_class) {
      case "scroll_source":
        scrollToElement(e.target.id + "-section");
        break;
      default:
        break;
    }
  });
});
function scrollToElement(elementId) {
  //get the element
  var scroll_target = $("#" + elementId);
  if (scroll_target.offset()) {
    //get the vertical distance of the element from the top of the page
    var verticalPositionOfElement = scroll_target.offset().top;
    $(window).scrollTop(verticalPositionOfElement - 70);
  }
}
