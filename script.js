function showtime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";
    var day =
     [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"
    ]
    var month = 
    [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
var da=d.getDate();
var year=d.getFullYear();

    if (h >= 12) {
        session = "PM";
    }
    if (h > 12) {
        h = h - 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + " : " + m + " : " + s + " " + session;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showtime, 1000);
    


    var current=day[d.getDay()]+","+" "+da+" "+month[d.getMonth()]+" "+year;
    document.getElementsByTagName('h2')[0].innerText=current;

}
