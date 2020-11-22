const baseURL = "https://localhost:44320/Car/";

export const readData = async (setRows) => {
  fetch(`${baseURL}GetAllCars`)
    .then((response) => response.json())
    .then((result) => {
      setRows(result);
    })
    .catch((error) => console.log("error", error));
};

export const deleteCar = async (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  var raw = JSON.stringify({
    id: id,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`${baseURL}DeleteCar`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  readData();
};

export const updateCar = async (carData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(carData),
  };
  fetch(`${baseURL}UpdateCar`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const addCar = async (carData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  carData.id = "" + Math.floor(Math.random() * 90000) + 10000;
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(carData),
  };
  fetch(`${baseURL}AddCar`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
