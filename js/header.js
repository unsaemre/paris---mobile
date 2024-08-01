// Search
var search = $(".search");

$("#search").on("click", function () {
  search.slideDown(100, "linear", function () {});
  $("body, .search_bg").addClass("active");
});
$("i").on("click", function () {
  search.slideUp(100, "linear", function () {});
  $("body, .search_bg").removeClass("active");
});

var sub = $("#sub");
var item = $(".sub");

// sub
$(".sub").hide();

sub.mouseenter(function () {
  $(this).children(".sub").stop().slideDown("fast");
});
sub.mouseleave(function () {
  $(this).children(".sub").stop().slideUp("fast");
});

$(".bars").click(function () {
  $(".gnb").animate({ left: 0 }, 300);
  $("body, .gnb_bg").addClass("active");
  $("html").animate({ scrollTop: 0 }, "fast");
});
$(".gnb_close").click(function () {
  $(".gnb").animate({ left: -280 }, 300);
  $("body, .gnb_bg").removeClass("active");
});
