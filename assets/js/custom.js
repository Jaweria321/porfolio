$(document).on("click", ".side-bar-link", function(event) {
    event.preventDefault();
    $(".side-bar-link").removeClass("active");
    $(this).addClass("active");
    console.log(event.target.href)
    window.location.href = event.target.href;
  });