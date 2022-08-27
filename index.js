console.log("Hello world !")

/**
 * Exam1 : Nhập ngày tháng năm
 * 
 * Input: Cho ngày , tháng , năm
 * 
 * Process: tạo biến day, month ,year, yesterday, tomorrow
 *          ngày tháng năm hợp lệ
 * 
 *          ngày cuối tháng , tháng cuối năm
 *          ngày đầu  tháng , tháng đầu năm
 *          ngày đầu tháng 
 *          ngày đầu năm 
 *          ngày cuối năm
 * 
 * 
 * Output:xác định ngày hôm qua and ngày mai
 */


var day =5;
var month =6;
var year = 2022;
var dayYesterday ;
var monthYesterday ;
var yearYesterday ;

var dayTomorrow;
var monthTomorrow;
var yearTomorrow;



if (month === 1 || month ===3 || month ===5 || month === 7 || month === 8 || month === 10 || month ===  12) {
    if (day === 1 && month === 1) {
        dayTomorrow  = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow);

        dayYesterday = 31;
        monthYesterday = 12;
        yearYesterday = year - 1;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday);

    } else if (day === 31 && month === 12) {
        dayTomorrow  =  1;
        monthTomorrow = 1;
        yearTomorrow = year + 1
        
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)

        dayYesterday = 30;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)
    } else if (day === 1 ) {
        dayTomorrow  = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow);

        dayYesterday = 31;
        monthYesterday = month - 1;
        yearYesterday = year ;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday);

    } else if (day === 31) {
        dayTomorrow  =  1;
        monthTomorrow = month + 1;
        yearTomorrow = year
        
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)

        dayYesterday = 30;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)
    } else if (day > 1 && day < 31) {
        dayTomorrow = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)


        dayYesterday = day - 1;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)


    } else {
        console.log("Ngày không hợp lệ ! ")
    }

} else if (month === 4 || month === 6 || month === 9 || month === 11  ) {
   
    if (day === 1 ) {
        dayTomorrow  = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow);

        dayYesterday = 30;
        monthYesterday = month - 1;
        yearYesterday = year - 1;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday);


    } else if (day === 30) {
        dayTomorrow  =  1;
        monthTomorrow = month + 1;
        yearTomorrow = year
        
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)

        dayYesterday = 29;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)
    } else if (day > 1 && day < 30) {
        dayTomorrow = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)


        dayYesterday = day - 1;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)


    } else {
        console.log("Ngày không hợp lệ ! ")
    }


} else if (month ===2 ) {
    console.log(28)
    if (day === 1 ) {
        dayTomorrow  = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow);

        dayYesterday = 28;
        monthYesterday = month - 1;
        yearYesterday = year - 1;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday);


    } else if (day === 28) {
        dayTomorrow  =  1;
        monthTomorrow = month + 1;
        yearTomorrow = year
        
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)

        dayYesterday = 27;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)
    } else if (day > 1 && day < 28) {
        dayTomorrow = day + 1;
        monthTomorrow = month;
        yearTomorrow = year;
        console.log("Ngày mai:", dayTomorrow,"Tháng", monthTomorrow, "Năm", yearTomorrow)


        dayYesterday = day - 1;
        monthYesterday = month;
        yearYesterday = year;
        console.log("Ngày hôm qua", dayYesterday,"Tháng", monthYesterday, "Năm", yearYesterday)


    } else {
        console.log("Ngày không hợp lệ ! ")
    }






} else {
    console.log("Tháng không hợp lệ")
}


/** 
 * Exam2 : 
 * 
 * Input :ngày , tháng , năm
 * 
 * Process: b1: Tạo biến  month ,year
 *          b2: kiểm tra tháng
 *          1,3,5,7,8,10,12 => 31 ngày ;
 *          
 *           b3: kiểm tra năm nhuận 
 *          year chia hết cho 400 là năm nhuận
 * 
 * 
 * 
 * 
 * Output : Tháng đó có bao nhiêu ngày
 */


var day1 ;
var month2 = 5;
var year2 = 2000;

if (month2 === 1 || month2 ===3 || month2 ===5 || month2 === 7 || month2 === 8 || month2 === 10 || month2 ===  12) {
        console.log("Tháng có 31 ngày")

} else if (month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11) {
    console.log("Tháng có 30 ngày")
} else if (month2 ===2) {
    if (year % 400) {
        console.log("Tháng có 29 ngày ")
    } else {
        console.log("Tháng có 28 ngày ")
    }
} else {
    console.log(" Error !")
}


/**
 * 
 * Exam 3 : 
 * 
 * 
 * 
 * Input:cho số có 3 chữ số
 * 
 * 
 * Process:1,tạo biến units, hundreds, dozens
 *          2,   Lấy hàng đơn vị 
 *              lấy hàng chục lấy
 *              lấy hàng trăm
 *          3, đọc nó 
 *          1 = Một 
 *          2 = hai 
 *          
 * 
 * 
 * Output: đọc nó
 * 
 * 
 * 
 */


var numbers = 100;
var units = numbers % 10;
console.log(units)
var dozens = numbers % 100 - units;
console.log(dozens)
var hundreds = numbers - dozens - units;
console.log(hundreds)


if ( units == 1) {
    units= "Một"
} else if (units==2) {
    units ="Hai"
}  else if (units==3) {
    units ="Ba"
}  else if (units==4) {
    units ="Bốn"
}  else if (units==5) {
    units ="Năm"
}  else if (units==6) {
    units ="Sáu"
}  else if (units==7) {
    units ="Bẩy"
}  else if (units==8) {
    units ="Tám"
}  else if (units==9) {
    units ="Chín"
} else {
    units= ""
}


if (dozens ==10) {
    dozens = " linh"
} else if (dozens == 20) {
    dozens = "Hai mươi"
} else if (dozens == 30) {
    dozens = "Ba mươi"
} else if (dozens == 40) {
    dozens = "Bốn mươi"
} else if (dozens == 50) {
    dozens = "Năm mươi"
} else if (dozens == 60) {
    dozens = "Sáu mươi"
} else if (dozens == 70) {
    dozens = "Bẩy mươi"
} else if (dozens == 80) {
    dozens = "Tám mươi"
} else if (dozens == 90) {
    dozens = "Chín mươi"
} else {
    dozens = ""
}

if (hundreds ==100) {
    hundreds = "Một trăm"
} else if (hundreds == 200) {
    hundreds = "Hai trăm"
} else if (hundreds == 300) {
    hundreds = "Ba trăm"
} else if (hundreds == 400) {
    hundreds = "Bốn trăm"
} else if (hundreds == 500) {
    hundreds = "Năm trăm"
} else if (hundreds == 600) {
    hundreds = "Sáu trăm"
} else if (hundreds == 700) {
    hundreds = "Bẩy trăm"
} else if (hundreds == 800) {
    hundreds = "Tám trăm"
} else if (hundreds == 900) {
    hundreds = "Chín trăm"
}


console.log(hundreds, dozens,units)



