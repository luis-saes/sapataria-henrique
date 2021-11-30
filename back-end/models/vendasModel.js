//função auxiliar, de exemplo
exports.calculateAge = (date) => {
  let today = new Date();
  let birthDate = new Date(date);

  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    --age;

  return age;
};

//salario, preco
exports.changeToPrecision2 = (aNumber) => {
  return (Math.round(Number(aNumber) * 100) / 100).toFixed(2);
};
