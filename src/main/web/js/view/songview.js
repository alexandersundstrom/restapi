function getIndividualSong(song) {
    editSong(song)
}

function clicked(event) {
    getSong(event[0].id, getIndividualSong);
}

function editSong(song) {
    var lyricsEditor;
    var chordsEditor;
    $("#editSong").show();
    var html = '<form>\n' +
        '  <div class="form-group">\n' +
        '    <label for="title">Title</label>\n' +
        '    <input type="text" value="' + song.title + '"class="form-control" id="title" placeholder="Title">\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="lyrics">Lyrics</label>\n' +
        '    <textarea class="form-control" id="lyrics" placeholder="Lyrics">' + song.lyrics + '</textarea>\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="chords">Chords</label>\n' +
        '    <textarea class="form-control" id="chords" placeholder="Chords">' + song.chords + '</textarea>\n' +
        '  </div>\n' +
        '  <button id="submit" class="btn btn-default">Update</button>\n' +
        '</form>';

    $("#editSong").html(html);
    $("#songsTable").hide();

    ClassicEditor
        .create(document.querySelector('#lyrics'))
        .then( editor => {
        lyricsEditor = editor;
} );
    ClassicEditor
        .create(document.querySelector('#chords'))
        .then( editor => {
        chordsEditor = editor;
} );

    $("#submit").click(function (event) {
        event.preventDefault();
        var editedSong = {
            id: song.id,
            title: $("#title").val(),
            lyrics:  lyricsEditor.getData(),
            chords:  chordsEditor.getData()
        };
        updateSong(editedSong, function() {getAllSongs(populateTable)})
        $("#songsTable").show();
        $("#editSong").hide();
    })
}

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

getAllSongs(populateTable);