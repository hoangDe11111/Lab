const convertTemperature = (temperature, unit) => {
  if (unit === "C") {
      return (temperature * 9/5) + 32 + "°F";
  } else if (unit === "F") {
      return (temperature - 32) * 5/9 + "°C";
  } else {
      return "Đơn vị nhiệt độ không hợp lệ";
  }
};

document.getElementById("data-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let temperatureInput = document.getElementById("temperature");
  let unitInput = document.getElementById("unit");

  let temperature = parseFloat(temperatureInput.value);
  let unit = unitInput.value;

  let convertedTemperature = convertTemperature(temperature, unit);

  let newRow = document.createElement("tr");

  [temperature, unit, convertedTemperature].forEach(data => {
      let cell = document.createElement("td");
      cell.textContent = data;
      newRow.appendChild(cell);
  });

  document.getElementById("result-table").appendChild(newRow);

  document.getElementById("data-form").reset();
});