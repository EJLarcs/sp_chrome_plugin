chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      // $("h1[class^='title']").replaceWith("Janey is awesome!");
      $("img").click(function(e){
        var url = e.target.attributes.src.value;
        $.ajax({
          url: "http://localhost:3000/api/download",
          method: "POST",
          data: {url: url},
          error: function(){
            console.log("There is a problem");
            console.log(arguments)
          },
          complete: function(){
            console.log("Things work");
          }
        });

      });

      console.log(firstHref);
      // gets first href and logs it as a string
    }
  }
);
