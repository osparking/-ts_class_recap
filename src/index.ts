interface Video {
    title: string;
    artist: string;
    resolution: string;
}

interface Audio {
    title: string;
    artist: string;
}

class PlayList<T> {
  public items: T[] = [];
  public add(item: T): void {
    this.items.push(item);
  }
}

const audioPlayList = new PlayList<Audio>();
audioPlayList.add({ title: "왜 불러", artist: "송창식" });

const videoPlayList = new PlayList<Video>();
videoPlayList.add({ title: "강남스타일", artist: "싸이", resolution: "1080p" });