// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eaten").on("click", function (event) {
    
    var id = $(this).data("id");
    var newAte = $(this).data("newate");
    
    var newAteState = {
      ate: newAte
    };
    // Send the PUT request.
    $.ajax("/api/burgz/" + id, {
      type: "PUT",
      data: newAteState
    }).then(function () {
      console.log("changed eaten to", newAte);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let newburger = {
      name: $("#ca").val().trim(),
      ate: $("[name=ate]:checked").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/api/burgz", {
      type: "POST",
      data: newburger,
    }).then(function () {
      console.log("created new burga");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".delete").on("click", function (event) {
   
    var id = $(this).data("id");
    $.ajax("/api/burgz/" + id, {
      type: "DELETE",
    }).then(
      function () {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
