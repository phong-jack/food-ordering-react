export const getTotalPageByCount = (resourceCount, limit) => {
  if (!resourceCount || !limit) {
    throw Error("Missing params for get pages");
  }

  return Math.ceil(+resourceCount / limit);
};
