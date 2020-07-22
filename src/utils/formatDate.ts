const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};

export default formatDate;
