function setHeader(xhr) {

    xhr.setRequestHeader('Authorization', token);
}

function getAllSongs() {
    $.ajax({
        url: 'http://localhost:8080/songs/',
        data: null,
        success: function (response) {
            var html = '<div class="panel panel-default">\n' +
                '  <div class="panel-body">\n' +
                '    Songs\n' +
                '  </div>\n' +
                '  <div class="panel-footer"><table class="table">';

            //TODO ADD HEADERS
            html += ' <tr>\n' +
                '    <th>Id</th>\n' +
                '    <th>Title</th> \n' +
                '    <th>Lyrics</th>\n' +
                '    <th>Chords</th>\n' +
                '  </tr>';

            response.forEach(function (song) {
                html += ' <tr>\n' +
                    '    <td>' + song.id + '</td>\n' +
                    '    <td>' + song.title + '</td> \n' +
                    '    <td>' + song.lyrics + '</td>\n' +
                    '    <td>' + song.chords + '</td>\n' +
                    '  </tr>'
            })

            //TODO ADD ALL SONGS

            html += '</table></div></div></div>';

            $("#songsTable").html(html);
            console.info('response', response);

        },
        error: function (error) {
        },
        dataType: 'json',
        type: 'GET'
    });
}

getAllSongs();
