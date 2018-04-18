package com.sundstrom.springboot.Database;

import com.sundstrom.springboot.Model.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository extends CrudRepository<Song, Integer> {
}
