var jsonData = JSON.parse(JSON.stringify(data));

console.log(jsonData);

function create() {
  var categories = [];
  var value = [];
  var keys = [];

  keys = Object.keys(jsonData);

  Object.keys(keys).forEach((key) => {
    value[keys[key]] = [];
    Object.keys(jsonData[keys[key]]).forEach((idx) => {
      categories = Object.keys(jsonData[keys[key]][idx]);
      Object.keys(categories).forEach((ind) => {
        value[keys[key]][categories[ind]] = [];
      });
    });
  });

  Object.keys(keys).forEach((key) => {
    Object.keys(jsonData[keys[key]]).forEach((idx) => {
      categories = Object.keys(jsonData[keys[key]][idx]);
      Object.keys(categories).forEach((ind) => {
        value[keys[key]][categories[ind]][idx] =
          jsonData[keys[key]][idx][categories[ind]];
      });
    });
  });
  console.log(value);

  var select = "강원도";
  var select2 = "temperature";

  var dataSet = {
    categories: Object.keys(value[select]["date"]).map((key) => {
      return value[select]["date"][key];
    }),
    series: [
      {
        name: select2,
        data: Object.keys(value[select]["temperature"]).map((key) => {
          return value[select]["temperature"][key];
        }),
      },
    ],
  };

  console.log(dataSet);

  const options = {
    chart: {
      width: 900,
      height: 420,
    },
  };

  const el = document.getElementById("linecharts");

  console.log(el);

  var data = dataSet;

  const Chart = toastui.Chart;

  var chart = Chart.lineChart({ el, data, options });
}
