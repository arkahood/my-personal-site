// $(".about").click(function(){
//   $(document).scrollTo(".hire");
// });
$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $(".hire").offset().top
    }, 1000);
});
$(".contact").click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 1000);
});
$(".dark").click(function(){

  var e = document.body;
  $("#hre").toggleClass("dark-mode");
  if($("#intro").hasClass("white")){
    //$("#hre").classList.toggle("dark-mode");
    $("#intro").removeClass("white");
    $("#intro").addClass("dark-mode1");
  }else{
    $("#intro").removeClass("dark-mode1");
    $("#intro").addClass("white");
  }
  ///////////////////////////////
  if($("#achievments").hasClass("white1")){
    //$("#hre").classList.toggle("dark-mode");
    $("#achievments").removeClass("white1");
    $("#achievments").addClass("dark-mode2");
  }else{
    $("#achievments").removeClass("dark-mode2");
    $("#achievments").addClass("white1");
  }
  ///////////////////////////////////////////
  $("#foot").toggleClass("dark-mode");
//  $(".ach").classList.toggle("dark-mode1");
$(".hrcustom").toggleClass("dark-mode4");

});
