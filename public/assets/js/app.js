$(function() {
    $(".devour-burger").on('click', function () {
        var id = $(this).data('id');
        var isDevoured = {
            devoured: 1
        };

        console.log(id);

        $.AJAX("/api/burgers/" + id, {
            method: "PUT",
            data: isDevoured
        }).then(
            function () {
                location.reload();
                console.log("dev change");
            });
    });

    $('#add-burger').on('click', function(){
        var newBurger = {
            name: $('#text-area').val().trim(),
            devoured: 0
        };
        $.ajax(`/api/burger`, {
            method: 'POST',
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });

    $('.delete-btn').on('click', function(){
        var id = $(this).data('id');
        $.ajax('/api/burger/' + id, {
            method: 'DELETE'
        }).then(function(){
            location.reload();
        });
    });
});