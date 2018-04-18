package com.sundstrom.springboot.Services;

import com.sundstrom.springboot.Model.Song;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class SongService {

    public List<Song> getSongs() {
           return Arrays.asList(
            new Song(1, "Closer Part 1", "Some lyrics", "Some chords"),
            new Song(2, "Closer Part 2", "Some lyrics", "Some chords")
           );
    }
}
