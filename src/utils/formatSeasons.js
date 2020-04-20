export const formatSeasons = allEpisodes => {
  const seasons = {};
  allEpisodes.forEach(e => {
    if (!seasons.hasOwnProperty(`Season ${e.season}`)) {
      seasons[`Season ${e.season}`] = [];
    }
    seasons[`Season ${e.season}`].push(e);
  });
  console.log(seasons);
  return seasons;
};


//trying stretch


export const addNumbers = (x,y) => {
  return x+ y
}