function getAllSongs() {
    $.ajax({
        url: 'http://localhost:8080/songs/',
        data: null,
        success: function (response) {
          populateTable(response)
        },
        error: function (error) {
        },
        dataType: 'json',
        type: 'GET'
    });
}

function clicked(event) {
    console.info(event[0].id);
}

getAllSongs();


function populateTable(response) {
    var html = '<div class="panel panel-default">\n' +
        '  <div class="panel-body">\n' +
        '    <h3>Songs</h3>\n' +
        '  </div>\n' +
        '  <div class="panel-footer"><table class="table">';

    html += ' <tr>\n' +
        '    <th>Id</th>\n' +
        '    <th>Title</th> \n' +
        '    <th>Lyrics</th>\n' +
        '    <th>Chords</th>\n' +
        '  </tr>';

    response.forEach(function (song) {
        html += '<tr id="' + song.id + '" onclick="clicked($(this))">\n' +
            '    <td>' + song.id + '</td>\n' +
            '    <td>' + song.title + '</td> \n' +
            '    <td>' + song.lyrics + '</td>\n' +
            '    <td>' + song.chords + '</td>\n' +
            '  </tr>';


    })

    html += '</table></div></div></div>';

    $("#songsTable").html(html);
}