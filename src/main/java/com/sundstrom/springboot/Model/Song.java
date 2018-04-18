package com.sundstrom.springboot.Model;


public class Song {

    private Integer id;
    private String title;
    private String lyrics;
    private String chords;

    public Song(Integer id, String title, String lyrics, String chords) {
        this.id = id;
        this.title = title;
        this.lyrics = lyrics;
        this.chords = chords;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLyrics() {
        return lyrics;
    }

    public void setLyrics(String lyrics) {
        this.lyrics = lyrics;
    }

    public String getChords() {
        return chords;
    }

    public void setChords(String chords) {
        this.chords = chords;
    }
}
