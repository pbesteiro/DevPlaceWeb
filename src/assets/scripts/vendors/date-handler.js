const months = {
  1: {
    large: "Enero",
    short: "Ene",
  },
  2: {
    large: "Febrero",
    short: "Feb",
  },
  3: {
    large: "Marzo",
    short: "Mar",
  },
  4: {
    large: "Abril",
    short: "Abr",
  },
  5: {
    large: "Mayo",
    short: "May",
  },
  6: {
    large: "Junio",
    short: "Jun",
  },
  7: {
    large: "Julio",
    short: "Jul",
  },
  8: {
    large: "Agosto",
    short: "Ago",
  },
  9: {
    large: "Septiembre",
    short: "Sep",
  },
  10: {
    large: "Octubre",
    short: "Oct",
  },
  11: {
    large: "Noviembre",
    short: "Nov",
  },
  12: {
    large: "Diciembre",
    short: "Dic",
  },
};

const days = {
  Mon: {
    large: "lunes",
    short: "lun",
  },
  Tue: {
    large: "martes",
    short: "mar",
  },
  Wed: {
    large: "miercoles",
    short: "mie",
  },
  Thu: {
    large: "jueves",
    short: "jue",
  },
  Fri: {
    large: "viernes",
    short: "vie",
  },
  Sat: {
    large: "sabado",
    short: "sab",
  },
  Sun: {
    large: "domingo",
    short: "dom",
  },
};

const dateSpliter = (date) => {
  const utcDate = setToLocalTimeZone(date);
  const dateObj = moment(utcDate);

  return {
    input: `${dateObj.format("YYYY")}-${dateObj.format("M")}-${dateObj.format(
      "D"
    )}`,
    month: {
      number: dateObj.format("MM"),
      name: months[dateObj.format("M")],
    },
    day: {
      number: dateObj.format("DD"),
      name: days[dateObj.format("ddd")],
    },
    year: dateObj.format("YYYY"),
    hours: dateObj.format("hh"),
    minutes: dateObj.format("mm"),
    seconds: dateObj.format("ss"),
  };
};

const setToLocalTimeZone = (dateTime) => {
  const LocalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment(dateTime).tz(LocalTimeZone).format();
};

const inputDateTimeLocal = (date) => {
  const localTime = setToLocalTimeZone(date);
  return moment(localTime).format(moment.HTML5_FMT.DATETIME_LOCAL);
};