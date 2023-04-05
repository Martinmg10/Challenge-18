let rpm = parseInt(prompt("Ingrese RPM"));

if (rpm < 1000) {

    alert("Debes bajar el cambio");
}
else if (rpm >=1000 && rpm <=3000) {
    alert("Debes mantener el cambio");
}
else if (rpm >=3000 ) {
    alert("Debes subir el cambio");
}
