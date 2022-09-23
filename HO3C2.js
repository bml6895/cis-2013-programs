var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge = prompt("Enter current age in years");
floatDays = parseFloat(floatAge * 365.25);
floatMonths = parseFloat(floatAge * 12);
intWeeks = parseInt(floatAge/7);
intFortnights = parseInt(floatDays/14);
alert("Your age in Months = " + floatMonths);
alert("Your age in Fortnights = " + intFortnights);
alert("Your age in Weeks = " + intWeeks);
alert("Your age in Days = " + floatDays);

