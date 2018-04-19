package com.sundstrom.springboot.Services;

import com.sundstrom.springboot.Database.SongRepository;
import com.sundstrom.springboot.Model.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class SongService {

    @Autowired
    SongRepository songRepository;

    public List<Song> getSongs() {
        List<Song> songs = new ArrayList<>();
        songRepository.findAll().forEach(songs::add);

        Collections.sort(songs, (o1, o2) -> {
            if (o1.getId() > o2.getId()) {
                return 1;
            } else if (o1.getId().equals(o2.getId())) {
                return 0;
            } else {
                return -1;
            }
        });
        return songs;
    }

    public Song getSong(Integer id) {
        return songRepository.findById(id).get();
    }

    public void addSong(Song song) {
        songRepository.save(song);
    }

    public void updateSong(Song updateSong) {
        songRepository.save(updateSong);
    }

    public void deleteSong(Integer id) {
        songRepository.deleteById(id);
    }
}
