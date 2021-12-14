const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("this is error", undefined);
    callback(undefined, "hello");
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
