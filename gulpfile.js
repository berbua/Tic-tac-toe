//dołączamy do konfiguracji moduły
const gulp = require("gulp");

//opis, konfiguracja tasków
gulp.task("nazwa_taska", function() {
  //tutaj jakies czynnosci taska np.:
  console.log("Tekst który pojawi się w konsoli");
});

//głowny task odpalany gdy w konsoli użyjemy polecenia "gulp" bez podania nazwy tasku
//odpalamy w nim to co chcemy odpalać domyślnie
gulp.task("default", ["nazwa_taska", "inna_nazwa_taska"]);
