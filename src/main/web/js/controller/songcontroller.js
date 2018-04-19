function editIndividualSong(song) {
    getSongForm(song);

    $("#cancel").click(function (event) {
        event.preventDefault();
        $("#songsTable").show();
        $("#editSong").hide();
    });

    $("#submit").click(function (event) {
        event.preventDefault();
        var songToStore = {
            id: song ? song.id: null,
            title: $("#title").val(),
            lyrics: lyricsEditor.getData(),
            chords: chordsEditor.getData()
        };
        if (song) {
            updateSong(songToStore, function () {
                getAllSongs(generateSongTable)
            })
        } else {
            createSong(songToStore, function () {
                getAllSongs(generateSongTable)
            });
        }

        $("#songsTable").show();
        $("#editSong").hide();
    });

    if (song && song.id) {
        $("#delete").click(function (event) {
            event.preventDefault();
            deleteSong(song.id, function () {
                getAllSongs(generateSongTable)
            });
            $("#songsTable").show();
            $("#editSong").hide();
        })
    }
}

function clickEditSong(event) {
    getSong(event[0].id, editIndividualSong);
}