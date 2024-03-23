package com.ssafy.backend.domain.song.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SongPopularChartDto {

    // 영상의 id값(MR)
    private String songVideoId;

    // 노래 제목
    private String songTitle;

    // 가수명
    private String songArtist;

    // 장르
    private String songGenre;

    // MR 영상 URL
    private String songUrl;

    // 썸네일 이미지 URL
    private String songThumbnail;

    // 노래 발매일
    private String songReleaseDate;

    // 조회수
    private Long SongView;

    // 노래길이
    private String songLength;

    // 노래 좋아요 유무
    private boolean myListDisplay;

}