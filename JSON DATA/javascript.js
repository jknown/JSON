// fetch("./JSON.json")
//   .then((res) => res.json())
//   .then((res) => {
//     jsonData = res;
//   });

var jsonData = JSON.parse(JSON.stringify(data));

console.log(jsonData);

// Object.keys(jsonData).forEach((key) => {
//   console.log(key);
// });

var value = [];

Object.keys(jsonData).forEach((key) => {
  value[key] = [];
});

var categories = [];

Object.keys(jsonData).forEach((key) => {
  Object.keys(jsonData[key]).forEach((idx) => {
    categories = Object.keys(jsonData[key][idx]);
  });
});

console.log(categories);

Object.keys(jsonData).forEach((key) => {
  Object.keys(categories).forEach((idx) => {
    value[key][categories[idx]] = [];
  });
});

Object.keys(jsonData).forEach((key) => {
  Object.keys(jsonData[key]).forEach((ind) => {
    if (value[key]["date"].includes(jsonData[key][ind]["date"]) == false) {
      Object.keys(categories).forEach((idx) => {
        value[key][categories[idx]][ind] = jsonData[key][ind][categories[idx]];
      });
    }
  });
});

console.log(value);

function create() {
  var select = "강원도";
  var select2 = "temperature";

  var dataSet = {
    categories: value[select]["date"],
    series: [
      {
        name: select2,
        data: value[select][select2],
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

  const data = dataSet;

  const Chart = toastui.Chart;

  var chart = Chart.lineChart({ el, data, options });
}

console.log("b" + "a" + +"a" + "a");

//왜 banana가 나올까
