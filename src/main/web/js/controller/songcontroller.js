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

function clickEditSong(event) {
    getSong(event[0].id, editIndividualSong);
}