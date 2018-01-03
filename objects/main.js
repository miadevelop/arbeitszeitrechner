"use strict";
function main() {


    var vormittag_kommt = inputform.vormittag_kommt.value;
    var vormittag_geht = inputform.vormittag_geht.value;

    var nachmittag_kommt = inputform.nachmittag_kommt.value;
    var nachmittag_geht = inputform.nachmittag_geht.value;
    var gesamtZeit=0;

    var TimeSpanVormittag = new TimeSpan(vormittag_kommt, vormittag_geht);

    inputform.vormittag_zeit.value = TimeSpanVormittag.getHoursDecimal()


    var TimeSpanNachmittag = new TimeSpan(nachmittag_kommt, nachmittag_geht);

    inputform.nachmittag_zeit.value = TimeSpanNachmittag.getHoursDecimal()


    gesamtZeit= TimeSpanVormittag.getHoursDecimal()+ TimeSpanNachmittag.getHoursDecimal();

    document.getElementById("demo").innerHTML = "Die Gesamtarbeitszeit beträgt " + gesamtZeit +" Dezimalstunden" ;

}
