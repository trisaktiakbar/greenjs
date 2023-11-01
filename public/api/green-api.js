import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs";

const SERVER_ROOT = "https://grumpy-pig-stole.cyclic.app";

function getKNNModel(data) {
  return SERVER_ROOT + "/plant?data=" + data;
}

async function loadModel(modelUrl) {
  const model = await tf.loadLayersModel(modelUrl);
  return model;
}

function minMaxNormalizationAll(arrayOfArrays) {
  return arrayOfArrays.map((arr) => {
    arr[0] = minMaxNormalization(arr[0], "suhu_minimum");
    arr[1] = minMaxNormalization(arr[1], "suhu_maksimum");
    arr[2] = minMaxNormalization(arr[2], "suhu_rata_rata");
    arr[3] = minMaxNormalization(arr[3], "kelembaban_udara");
    arr[4] = minMaxNormalization(arr[4], "penyinaran_matahari");
    arr[5] = minMaxNormalization(arr[5], "curah_hujan");
    return arr;
  });
}

function minMaxNormalization(data, feature) {
  let min, max;
  if (feature === "suhu_minimum") {
    min = 20;
    max = 29.7;
  } else if (feature === "suhu_maksimum") {
    min = 23.2;
    max = 35.8;
  } else if (feature === "suhu_rata_rata") {
    min = 24.1;
    max = 33.2;
  } else if (feature === "kelembaban_udara") {
    min = 52;
    max = 97;
  } else if (feature === "penyinaran_matahari") {
    min = 0;
    max = 11.3;
  } else if (feature === "curah_hujan") {
    min = 0;
    max = 218.8;
  }

  const normalizedData = (data - min) / (max - min);
  return normalizedData;
}

function inverseMinMaxNormalization(normalizedData, feature) {
  let min, max;
  if (feature === "suhu_minimum") {
    min = 20;
    max = 29.7;
  } else if (feature === "suhu_maksimum") {
    min = 23.2;
    max = 35.8;
  } else if (feature === "suhu") {
    min = 24.1;
    max = 33.2;
  } else if (feature === "kelembaban_udara") {
    min = 52;
    max = 97;
  } else if (feature === "penyinaran_matahari") {
    min = 0;
    max = 11.3;
  } else if (feature === "curah_hujan") {
    min = 0;
    max = 218.8;
  }

  const originalData = normalizedData * (max - min) + min;
  return originalData;
}

function inverseMinMaxNormalizationAll(data) {
  let arrayOfArrays = [data];
  return arrayOfArrays.map((arr) => {
    arr[0] = inverseMinMaxNormalization(arr[0], "suhu_minimum");
    arr[1] = inverseMinMaxNormalization(arr[1], "suhu_maksimum");
    arr[2] = inverseMinMaxNormalization(arr[2], "suhu_rata_rata");
    arr[3] = inverseMinMaxNormalization(arr[3], "kelembaban_udara");
    arr[4] = inverseMinMaxNormalization(arr[4], "curah_hujan");
    arr[5] = inverseMinMaxNormalization(arr[5], "penyinaran_matahari");
    return arr;
  });
}

function transformArrayOfObjectsToArray(inputArray) {
  return inputArray.map((item) => {
    return [item.suhu, item.kelembaban_udara, item.penyinaran_matahari, item.curah_hujan];
  });
}

function transformObjectsToArray(obj) {
  var result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

function fetchModel(feature, timestep = 30) {
  return fetch(SERVER_ROOT + "/weather?feature=" + feature + "&timestep=" + timestep)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Ada masalah dengan permintaan. Kode status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

export { getKNNModel, transformObjectsToArray, loadModel, fetchModel, minMaxNormalization, inverseMinMaxNormalization, inverseMinMaxNormalizationAll, transformArrayOfObjectsToArray, minMaxNormalizationAll };
