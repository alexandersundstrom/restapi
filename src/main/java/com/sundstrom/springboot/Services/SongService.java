package com.sundstrom.springboot.Services;

import com.sundstrom.springboot.Model.Song;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class SongService {

    List<Song> songs = new ArrayList<>(Arrays.asList(
            new Song(1, "Closer Part 1", "Some lyrics", "Some chords"),
            new Song(2, "Closer Part 2", "Some lyrics", "Some chords")
    ));

    public List<Song> getSongs() {
           return songs;
    }

    public Song getSong(Integer id) {
        return songs.stream().filter(song -> song.getId().equals(id)).findFirst().get();
    }

    public void addSong(Song song) {
        songs.add(song);
    }

    public void updateSong(Integer id, Song updateSong) {
        for (Song song: songs) {
            if (song.getId().equals(id)) {
                songs.set(songs.indexOf(song), updateSong);
            }
        }
    }

    public void deleteSong(Integer id) {
        for (Song song: songs) {
            if (song.getId().equals(id)) {
                songs.remove(songs.indexOf(song));
                break;
            }
        }
    }
}
