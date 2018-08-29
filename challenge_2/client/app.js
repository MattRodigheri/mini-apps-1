
 $( document ).ready(function() {

    $( "form" ).click(function( event ) {
      event.preventDefault();
    });

  $( ".submit" ).click(function(event) {
    var data = $( "textarea" ).val();
    $.ajax({
      type : "POST",
      url: 'http://localhost:3000/samples',
      data : JSON.stringify(data),//fix this #
      success : function(result) {
        console.log("Success: ", result);
        $.ajax({
          type : "GET",
          url: 'http://localhost:3000/samples',
          success: function(result){
            console.log("Success: ", result);
          },
          error: function(error) {
            console.log("ERROR: ", error);
          }
        });
      },
      error : function(error) {
        console.log("ERROR: ", error);
      }
    });
  });
});
