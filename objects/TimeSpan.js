"use strict";
function TimeSpan(Time1, Time2) {
    this.Time1 = new Hour(Time1);
    this.Time2 = new Hour(Time2);

    this.Hour;
    this.Minute;
    this.Seconds;
    this.HourDecimal;


    this.getHour = function () {
        this.Hour = new Hour(this.Time2).sub(this.Time1);
        return this.Hour;
    }

    this.getMinutesDecimal = function () {
        this.Minute = new Hour(this.Time2).sub(this.Time1).valueOf() / 60;
        return this.Minute;
    }

    this.getSecondsDecimal = function () {
        this.Seconds = new Hour(this.Time2).sub(this.Time1).valueOf();
        return this.Seconds;
    }

    this.getHoursDecimal = function () {
        this.HourDecimal = new Hour(this.Time2).sub(this.Time1).valueOf() / 3600;
        return this.HourDecimal;
    }

}