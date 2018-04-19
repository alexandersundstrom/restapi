var lyricsEditor;
var chordsEditor;

function editIndividualSong(song) {
    getSongForm(song);
    $("#cancel").click(function (event) {
        event.preventDefault();
        $("#songsTable").show();
        $("#editSong").hide();
    });

    $("#submit").click(function (event) {
        event.preventDefault();
        var editedSong = {
            id: song.id,
            title: $("#title").val(),
            lyrics: lyricsEditor.getData(),
            chords: chordsEditor.getData()
        };
        updateSong(editedSong, function () {
            getAllSongs(generateSongTable)
        })
        $("#songsTable").show();
        $("#editSong").hide();
    })

}

function clickEditSong(event) {
    getSong(event[0].id, editIndividualSong);
}

function clickCreateSong(event) {
    getSongForm();
    $("#cancel").click(function (event) {
        event.preventDefault();
        $("#songsTable").show();
        $("#editSong").hide();
    });

    $("#submit").click(function (event) {
        event.preventDefault();
        var newSong = {
            title: $("#title").val(),
            lyrics: lyricsEditor.getData(),
            chords: chordsEditor.getData()
        };
        createSong(newSong, function () {
            getAllSongs(generateSongTable)
        });
        $("#songsTable").show();
        $("#editSong").hide();
    })
}

function getSongForm(song) {
    var title = '', lyrics = '', chords = '';
    if (song) {
        title = song.title;
        lyrics = song.lyrics;
        chords = song.chords;
    }

    $("#editSong").show();
    var html = '<form>\n' +
        '  <div class="form-group">\n' +
        '    <label for="title">Title</label>\n' +
        '    <input type="text" value="' + title + '"class="form-control" id="title" placeholder="Title">\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="lyrics">Lyrics</label>\n' +
        '    <textarea class="form-control" id="lyrics" placeholder="Lyrics">' + lyrics + '</textarea>\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="chords">Chords</label>\n' +
        '    <textarea class="form-control" id="chords" placeholder="Chords">' + chords + '</textarea>\n' +
        '  </div>\n' +
        '  <button id="submit" class="btn btn-primary">Update</button>\n' +
        '<button id="cancel" class="btn btn-default">Cancel</button>\n' +
        '</form>';

    $("#editSong").html(html);
    $("#songsTable").hide();

    ClassicEditor
        .create(document.querySelector('#lyrics'))
        .then(editor => {
        lyricsEditor = editor;
        });
    ClassicEditor
        .create(document.querySelector('#chords'))
        .then(editor => {
        chordsEditor = editor;
        });
}

function generateSongTable(response) {
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
        html += '<tr id="' + song.id + '" onclick="clickEditSong($(this))">\n' +
            '    <td>' + song.id + '</td>\n' +
            '    <td>' + song.title + '</td> \n' +
            '    <td>' + song.lyrics + '</td>\n' +
            '    <td>' + song.chords + '</td>\n' +
            '  </tr>';


    })

    html += '</table></div></div></div>';

    html += '<div class="row"><div class="col-md-12 col-xs-12">' +
        '<button id="createSong" onclick="clickCreateSong($(this))" class="btn btn-primary">Add a new song</button>' +
        '</div></div>'

    $("#songsTable").html(html);
}
