export const getImageUrl = (path: string, type: "main" | "hero") => {
  const typeMapping = {
    hero: "w1400_and_h450_face",
    main: "w342"
  };
  return `https://image.tmdb.org/t/p/${typeMapping[type]}${path}`;
};
