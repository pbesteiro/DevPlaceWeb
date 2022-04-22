const getPesosArFormat = (price) => {
  const pesos = { style: 'currency', currency: 'ARS' };
  const formatPesosAr = new Intl.NumberFormat('es-AR', pesos);
  return formatPesosAr.format(price);
}

const getDollarUsFormat = (price) => {
  const dollar = { style: 'currency', currency: 'USD' };
  const formatDollar = new Intl.NumberFormat('en-US', dollar);
  return formatPesosAr.format(price);
}
