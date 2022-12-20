// if else
// var a= prompt("Nhap gia tri cua a")
// a=Number(a)
// var b =prompt("Nhap gia tri cua b")
// b = Number(b)
// if(a>b){
//     console.log('a lon hon b')
// }
// else if( a<b){
//     console.log('a be hon b')
// }
// else{
//     console.log ('a = b')
// }


// swich case
// var x = Number(prompt('nhap x'));
// switch(x){
//     case 1:
//         console.log(' x =1')
//         break;
//     case 2:
//         console.log('x=2')
//         break;
//     case 3: 
//         console.log('x=3')
//         break;
//     default:
//         console.log('Khong xac dinh')
// }

//for

// var n =Number(prompt('Nhap N'));
// var tong = 0;
// for(var i=1; i<=n; i++){
//     tong +=i;
// }
// console.log('tong la' ,tong)

//
//  var myObj = {
//     hoTen: 'Nguyen Dinh Phuc',
//     tuoi: '20',
//     NoiSinh: 'TP.HCM'
//  }
//  for (var key in myObj){
//     console.log(myObj[key])
//  }

//  var myAray=['PHP','java','html','css' ]
//  for(var key in myAray){
//     console.log(key)
//  }
//  for(var key of myAray){
//     console.log(myAray[key])
//  }
//  for(var key in myAray){
//     console.log(myAray[key])
//S

/// Phuong trinh bac 1
// var a = Number(prompt('Nhap he so a'))
// var b = Number(prompt('Nhap he so b'))
// if (a===0)
//     if(b===0){
//         console.log("Phuong trinh vo so nghiem")
//     }
//     else
//         console.log('Phuong trinh vo nghiem')
// else
//     console.log('Phuong trinh co nghiem x =', -b/a)


//Phuong trinh bac 2
// var a = Number(prompt('Nhap he so a'))
// var b = Number(prompt('Nhap he so b'))
// var c = Number(prompt('Nhap he so c'))
// var delta= b**2 -4*a*c;
// if(delta<0){
//     console.log('Phuong trinh vo nghiem')
// }
// if(delta===0){
//     console.log('Phuong trinh co nghiem kep x =' -b/(2*a))
// }
// if(delta>0){
//     console.log('Phuong trinh co 2 nghiem la x1= ', (b+Math.sqrt(delta)) / (2*a), 'x2= ', (b-Math.sqrt(delta)) / (2*a))
// }


//Funtion
// function xuatThongTin(para){
//     console.log(para)
// }
// xuatThongTin("Chao ban")

// function testThamSo(){
//     console.log('so luong tham so truyen:', arguments.length)
//     for(var val of arguments){
//         console.log(val)
//     }
//     console.log(arguments)
// }
// testThamSo('hi', 'hello', 'xin chao' )

// function tinhTong(a, b){
//     return a + b
// }
// console.log(tinhTong(10,20))

// function tinhToan (a,b){
//     var x= a + b
//     function tong(){
//         console.log('Ham tinh tong cac so')
//     }
//     tong()
//     console.log('Ham tinh toan cac phep tinh so hoc');
// }
// tinhToan(3,4);

// //tao funtion khac
// var tinhHieu = function(a,b){
//     return a-b
// }
// console.log(tinhHieu(20,10))

// // tao funtion khac khong can funtion
// var tinhHieu1 = (a,b) => a-b
// console.log(tinhHieu(200, 100))


// // Giá trị của NaN
//  var x = 12 / 'abc'
//  console.log(x)
//  console.log(typeof x)
// console.log(isNaN(x))// Kiểm tra 1 giá trị là số

// // Hàm to String-chuyển số thành chuỗi
// var a = 123
// console.log(typeof a.toString())

// //Hàm to fixed- làm tròn số thập phân sau đó chuyển chuỗi thành string

// var k = 123.567
// console.log(k.toFixed())
// console.log(typeof k.toFixed())

// // parseInt => chuyển thành sô nguyên

// var s1 ='123';
// console.log(parseInt(s1))
// console.log(typeof parseInt(s1))

// //parseFloat-Chuyển thành số thực
// var s2 = '123.456'
// console.log(parseFloat(s2))
// console.log(typeof parseFloat(s2))
// console.log(typeof Number(s2 ))



// Tạo đối tượng
var obj1 = {
    hoTen: 'Nguyen Van Hung',
    tuoi: 20,
    noiSinh: 'Long An'
}
console.log(typeof obj1);

// Tạo đối tượng chứa thuộc tính các ký tự đặc biệt
var obj2 = {
    'ho-Ten': 'Nguyen Van Hung',
    tuoi: 29,
    'noi-Sinh': 'Long An'
}
console.log( obj2)

// Tạo đối tượng có thuộc tính là giá trị của biến
var myKey = 'Tuoi';
var obj3= {
    'ho-Ten': 'Nguyen van hung',
    [mykey]: 20,
    'noi-Sinh': 'Long An'
}
console.log(obj3);
// Tạo đối tượng có thuộc tính là funtion
var obj4 = {
    hoTen: 'Nguyen Van Hung',
    tuoi: 20,
    XuatThongTin: function() {
        console.log(`Ho ten: ${this.hoTen} - Tuoi: ${this.tuoi}`)
    }
}
console.log(obj4);
obj4.XuatThongTin();

var obj5 = {
    'hoTen': 'Nguyen Van Hung',
    tuoi: 20,
}
obj5.noiSinh = 'HaNoi';
obj5['hocBong'] = 120000;
console.log(obj5);

//xoá thuộc tính của đối tượng
delete obj5.tuoi;
console.log(obj5)

//Tạo các đối tượng có cùng bản thiết kế
function Sinhvien(hoTen,tuoi) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
}
var sv1 = new Sinhvien('Le Hung', 20);
console.log(sv1)

var sv2 = new Sinhvien('Minh Kiet', 22);
console.log(sv2);

var result = 0
var number=[45,5,78,99,55]

//
// Ngày 22/11/2022


