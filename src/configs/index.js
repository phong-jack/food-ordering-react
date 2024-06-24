const getHomeUrl = () => {
  const host = import.meta.env.VITE_HOST || "localhost";
  const port = import.meta.env.VITE_PORT || "3005";

  return `http://${host}:${port}`;
};

export const HOME_URL = getHomeUrl();
