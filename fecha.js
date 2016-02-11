// JavaScript Document
var days = new Array(8);
days[1] = "Domingo";
days[2] = "Lunes";
days[3] = "Martes";
days[4] = "Miércoles";
days[5] = "Jueves";
days[6] = "Viernes";
days[7] = "Sábado";
var months = new Array(13);
months[1] = "enero";
months[2] = "febrero";
months[3] = "marzo";
months[4] = "abril";
months[5] = "mayo";
months[6] = "junio";
months[7] = "julio";
months[8] = "agosto";
months[9] = "septiembre";
months[10] = "octubre";
months[11] = "noviembre";
months[12] = "diciembre";
var dateObj = new Date(document.lastModified)
var wday = days[dateObj.getDay() + 1]
var lmonth = months[dateObj.getMonth() + 1]
var date = dateObj.getDate()
var fyear = dateObj.getYear()
if (fyear < 2000) 
fyear = fyear + 1900
document.write(wday + ", " + date + " de " + lmonth + " "  + "de " + fyear)