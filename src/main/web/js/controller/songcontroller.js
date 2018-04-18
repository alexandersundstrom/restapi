function getAllSongs(callback) {
    $.ajax({
        url: 'http://localhost:8080/songs/',
        success: function (response) {
            callback(response)
        },
        error: function (error) {
        },
        dataType: 'json',
        type: 'GET'
    });
}

function getSong(id, callback) {
    $.ajax({
        url: 'http://localhost:8080/songs/' +id,
        success: function (response) {
            callback(response)
        },
        error: function (error) {
        },
        dataType: 'json',
        type: 'GET'
    });
}
