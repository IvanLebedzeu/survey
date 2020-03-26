$(document).ready(function() {
  $("#formOne").submit(function(event) {


    

    var personName = $("input#name").val();
    var dob = $("#dob").val();
    var books = $("#books").val();
    var music = $("input:radio[name=music]:checked").val();
    var favoriteColor = $("#color").val();
    //$("#output").text(result);

    
    //$("#myModal").modal();
    $(".fullname").append(personName);
    $(".birth").append(dob);
    $(".favoriteBook").append(books);
    $(".musicStyle").append(music);
    $(".favoriteColor").append(favoriteColor);

  
    $("#aboutYou").show();
    event.preventDefault(); 
  });

 

});