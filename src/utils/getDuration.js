export const getDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end - start;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays;
};
