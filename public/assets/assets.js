import logo from './logo.png'
import home_icon from './home.png'
import bell_icon from './bell.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import clock_icon from './clock_icon.png'
import img_playlist_1 from './img_playlist_1.jpg'
import img_playlist_2 from './img_playlist_2.jpg'
import img_playlist_3 from './img_playlist_3.jpg'
import img_playlist_4 from './img_playlist_4.jpg'
import img_playlist_5 from './img_playlist_5.jpg'
import img_song_1 from './img_song_1.jpg'
import img_song_2 from './img_song_2.jpg'
import img_song_3 from './img_song_3.jpg'
import img_song_4 from './img_song_4.jpg'
import song_1 from  './song_1.mp3'
import song_2 from  './song_2.mp3'
import song_3 from  './song_3.mp3'
import song_4 from  './song_4.mp3'

export const assets = {
    logo,
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    clock_icon
}

export const playlistsData = [
    {   
        id:0,
        name: "AFRO VIBES HITS",
        desc:"Les meilleurs song Afrobeats du moment",
        image: img_playlist_1
    },
    {   
        id:1,
        name: "Best of Booba",
        desc:"Retrouvez dans cette playlist les hits intemporels du roi du Rap Fr",
        image: img_playlist_2
    },
    {   
        id:2,
        name: "RAP Fr",
        desc:"Les meilleurs rappeurs francais du moment",
        image: img_playlist_3
    },
    {   
        id:3,
        name: "RAP Ivoire",
        desc:"De DIDI B à HIMRA en passant par Suspect 95 Retrouvez dans cette playlist les hits du RAP Ivoire",
        image: img_playlist_4
    },
    {   
        id:4,
        name: "RAP Triste",
        desc:"Melancolique? Cette playlist est faite pour vous",
        image: img_playlist_5
        
    }
]

export const songsData = [
    {
        id:0,
        name: "Yorobo Drill ACT3",
        singer: "Himra",
        image: img_song_1,
        file:song_1,
        duration:"2:49"
    },
    {
        id:1,
        name: "Coup du marteau",
        singer: "Tamsir ft. Team Paiya, PSK, Taze boy, Ste Milano, Renard barakissa",
        image: img_song_2,
        file:song_2,
        duration:"2:54"
    },
    {
        id:2,
        name: "Monaco",
        singer: "Guy2bezbar",
        image: img_song_3,
        file:song_3,
        duration:"2:21"
    },
    {
        id:3,
        name: "Adesanya",
        singer: "Jeune Vili ft. Diane Dddd",
        image: img_song_4,
        file:song_4,
        duration:"3:20"
    }
]