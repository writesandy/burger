
$( document ).ready(function() {


$(".create-form").on("submit", function (event){
    event.preventDefault();
    var newBurger = $("#bgr").val().trim();

    $.ajax({
        method: "POST",
        url: "/burgers",
        data: { burgerName: newBurger }
    }).then(
        function(fromTheServer) {
            // console.log(fromTheServer);

            location.reload();
        })
    })

    $(".change-burger").on("click", function (event) {
        event.preventDefault();
        console.log($(this).data("id"))
        var burgerEaten = $(this).data("id")
        $.ajax({
            method: "PUT",
            url:"/burgers/" +burgerEaten,

        }).then(
          function(frmTheServer) {
              console.log("return from the great beyond!")
                location.reload();
            })
    })

});








// $(".delete-burger").on("click", function(event){
//     var id = $(this).data("id");

//     $.ajax("/?burger_name" +id, {
//     type: "DELETE"
// }).then(
//     function() {
//         console.log("deleted burger", id);
//         location.reload();
//     }
// );
// });
