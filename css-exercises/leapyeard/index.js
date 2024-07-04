const leapYeard = (anio) => {

  if (anio % 400 === 0) {
    console.log("Es bisiesto");
  } else if (anio % 100 === 0) {
    console.log("No es bisiesto");
  } else if (anio % 4 === 0) {
    console.log("Es bisiesto");
  } else {
    console.log("No es bisiesto");
  }
  
};

leapYeard(1985);
