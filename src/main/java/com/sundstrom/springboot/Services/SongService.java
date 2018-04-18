package com.sundstrom.springboot.Services;

import com.sundstrom.springboot.Database.SongRepository;
import com.sundstrom.springboot.Model.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongService {

    @Autowired
    SongRepository songRepository;

    public List<Song> getSongs() {
        List<Song> songs = new ArrayList<>();
        songRepository.findAll().forEach(songs::add);
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
