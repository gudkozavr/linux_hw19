const waitFoxTime = (msec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ожидание завершено");
    }, msec);
  });
};
waitFoxTime(2000).then((data) => {
  console.log(data);
});
