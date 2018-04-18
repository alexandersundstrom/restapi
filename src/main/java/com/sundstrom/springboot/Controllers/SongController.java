package com.sundstrom.springboot.Controllers;

import com.sundstrom.springboot.Model.Song;
import com.sundstrom.springboot.Services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SongController {

    @Autowired
    private SongService songService;

    @RequestMapping("/songs")
    public List<Song> getSongs() {
        return songService.getSongs();
    }

    @RequestMapping("/songs/{id}")
    public Song getSong(@PathVariable Integer id) {
        return songService.getSong(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/songs")
    public void addSong(@RequestBody Song song) {
        songService.addSong(song);

    }

}
