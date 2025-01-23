const convertedData = (chart, type) => {
  const convertedChart = chart[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedChart;
};

export { convertedData };
