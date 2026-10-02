interface Movid {
  title: string;
  runtime: number;
}

interface TvShow {
  title: string;
  numberOfEpisodes: number;
  episodeRuntime: number;
}

const getTotalRuntime = (media: Movid | TvShow): number => {
  if ("runtime" in media) {
    return media.runtime;
  }
  return media.numberOfEpisodes * media.episodeRuntime;
};

console.log(getTotalRuntime({ title: "암살자들", runtime: 131 })); // Output: 148
console.log(
  getTotalRuntime({
    title: "가을동화",
    numberOfEpisodes: 16,
    episodeRuntime: 52,
  }),
); // Output: 2914
