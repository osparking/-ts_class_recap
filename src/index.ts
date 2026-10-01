interface Video {
    title: string;
    artist: string;
    resolution: string;
}

interface Audio {
    title: string;
    artist: string;
}

class VideoPlayList {
  public videos: Video[] = [];
}

class AudioPlayList {
  public audios: Audio[] = [];
}