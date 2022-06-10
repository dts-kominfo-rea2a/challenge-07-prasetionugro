const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (kataFilter) => {
  try {
    const dataTheaterIXX = await promiseTheaterIXX();
    const dataTheaterVGC = await promiseTheaterVGC();
    const dataCombine = dataTheaterIXX.concat(dataTheaterVGC);

    const hasil = dataCombine.filter((element) => {
      return element.hasil === kataFilter;
    });

    return hasil.length;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
