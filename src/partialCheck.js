(() => {
  let acceptOnlyNumberWithoutCheck = 123;

  // @ts-ignore
  acceptOnlyNumberWithoutCheck = "no erros";

  console.log(acceptOnlyNumberWithoutCheck);
})();
