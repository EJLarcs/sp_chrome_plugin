$(function() {
    console.log( "ready!" );
    $("img").click(function(e){
      console.log("Hello");
      var url = e.target.attributes.src.value;
      console.log(url);
      $.ajax({
      method: "POST",
      url: "http://localhost:3000/api/download",
      data:{url: url},
      contentType: "application/json;charset=utf-8",
      });
    });
});
