/*
Klasse: Hour()
Quelle: http://javascript.jstruebig.de/javascript/888
Eine Klasse um mit Stunden zu rechnen.

Version:

1.0 - 11.7.2010

new Hour(String)

String hat das Format hh:mm:ss wobei jeder Teil optional ist, der String wird gegebenfalls von rechts aufgefüllt.

Beispiel:

var t1 = new Hour('1:45:0');

alert(t1); // gibt: 01:45:00
alert(t1*1); // gibt: 10.75

Funktionen:

add(Hour)   addiert zwei Hour Objekte. Rückgabe: Hour Objekt
sub(Hour)   subtrahiert zwei Hour Objekte. Rückgabe: Hour Objekt
hour()      gibt die Stunden als Dezimalzahl zurück.

set(number) rechnet eine Sekundenzahl in eine Stundenangabe um und setzt das Objekt auf diesen Wert.

toString() gibt den formatieren String aus
valueOf() gibt die Sekunden zurück

*/
function Hour() {
    var wert = string2seconds(arguments[0]);

    // ist der Kontext ein String, dann ist das Objekt ein formatierter String
    this.toString = function () {
        return '' + seconds2string(wert);
    };

    // ist der Kontext kein String, dann ist das Objekt eine Zahl
    this.valueOf = function () {
        return wert;
    };

    this.set = function (s) {
        wert = s;
        return this;
    };

    // private functions

    function seconds2string(n) {
        var n = wert;
        var sign = n < 0 ? '-' : '';
        n = Math.abs(n);
        var h = parseInt(n / 3600);
        var m = parseInt((n / 60) % 60);
        var sec = parseInt(n % 60);

        return sign + frmt(h) + ':' + frmt(m) + ':' + frmt(sec);
    }

    function string2seconds(n) {
        //alert(n);
        if (!n) return 0;
        var tmp = n.toString().split(':');
        if (!tmp.length) tmp[0] = 0;
        if (tmp.length < 2) tmp[1] = 0;
        if (tmp.length < 3) tmp[2] = 0;
        while (tmp[2] > 59) {
            tmp[2] -= 60;
            ++tmp[1];
        }
        while (tmp[1] > 59) {
            tmp[1] -= 60;
            ++tmp[0];
        }
        return (tmp[0] * 3600 + tmp[1] * 60 + 1 * tmp[2]);
    }

    function frmt(n) {
        return n < 10 ? '0' + n : n;
    }
}

Hour.prototype = {
    add: function (time) {
        return new Hour().set(this + time);
    },
    sub: function (time) {
        return new Hour().set(this - time);
    },
    hour: function () {
        var tmp = this.toString().split(':');
        return tmp[0] * 1 + tmp[1] / 60 + tmp[2] / 3600;
    }
};

String.prototype.hour = function () {
    return new Hour(this);
}
