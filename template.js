//console.log("external js")



// Single Comment
/*
multi Comment
multi Comment
multi Comment
*/


/////////////////////////////////////////////////////////////////////////////////////////

//window.
//document
// console.log("merhabalar");
// //log
// window.console.log("windove merhabası");
// //wanings
// console.warn("console.warn");

// //info
// console.warn("bilgiler");

// //error
// console.error("console error");

//alert
//alert("alert");

/////////////////////////////////////////////////////////////////////////////////////////

// Varıable
// var , let , const
// Commen Rules
// var comnpanyName="isim";
// console.log(comnpanyName);

// var comnpanyName="isim";
// console.log(comnpanyName);      

// var comnpanyName4="isim";
// console.log(comnpanyName4);

// var _comnpanyName="isim";  //underscore
// console.log(_comnpanyName);

// var $_comnpanyName="isim";  
// console.log($_comnpanyName);

//let
// let companyName2="hello world";
// console.log(companyName2);
// console.warn(companyName2);


//const
// const comnpanyName3="hello";
// //comnpanyName3="hello22";  değişmez
// console.error(comnpanyName3);


/////////////////////////////////////////////////////////////////////////////////////////

// operator
// let data1=12;
// let data2=7;

// console.log(data1+data2);
// console.log(data1-data2);
// console.log(data1*data2);
// console.log(data1/data2);

// let result1=data1+data2;
// console.log(result1);

//karşılaştırma operatörleri
// console.log(data1<data2);
// console.log(data1>data2);
// console.log(data1==data2);
// console.log(data1!=data2);

//atama operatörleri
// const data33=10, data44="34";
// console.log(data33==data44);
//alert(data33===data44);   === içeriine ve türüne bakıyor
 
//mantıksal operatörler
// const data5=true, data6=false;
// console.log(data5 && data6);   //false
// console.log(data5 || data6);    //true

/////////////////////////////////////////////////////////////////////////////////////////
//prompt
// const userdata=prompt("lütfen adınızn giriniz ....");
// alert(userdata);
/////////////////////////////////////////////////////////////////////////////////////////
//MATH
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.pow(5,2));
// console.log(5**2);
// console.log(Math.abs(-5));
// console.log(Math.min(-5,5,78,645,1,6));
// console.log(Math.max(-5,5,78,645,1,6));

// console.log(Math.floor(2.9));   //2
// console.log(Math.ceil(2.6));    //3
// console.log(Math.round(4.5));   //5
// console.log(Math.round(4.6));   //5
// console.log(Math.round(4.4));   //4

// console.log(Math.sin(8.5));
// console.log(Math.cos(8.5));
// console.log(Math.asin(-1));
// console.log(Math.acos(-1));
// console.log(Math.tan(-1));
// console.log(1/Math.tan(-1));

// console.log(Math.random()*1+10);
// console.log(Math.random(1)+10);
// console.log(Math.random()*10+1);

// console.log(Math.floor(Math.random()*10+1));  


// ESCAPE CHARACTERS
// console.log("Görüntü Oluşturucu \n uygulamasını açın ve istenirse \nMicrosoft hesabınızla oturum açın."); 

// console.log("Görüntü Oluşturucu \r uygulamasını açın ve istenirse \r Microsoft hesabınızla oturum açın."); 

// console.log("Görüntü Oluşturucu \t uygulamasını açın ve istenirse \t Microsoft hesabınızla oturum açın.");
 
// console.log("Görüntü Oluşturucu \" uygulamasını açın ve istenirse \" Microsoft hesabınızla oturum açın."); 


/////////////////////////////////////////////////////////////////////////////////////////

// Typeof
// let number=8;
// let name="ali";
// let islogin=true;
// console.log(typeof number);    //number
// console.log(typeof name);      //string
// console.log(typeof islogin);   //boolean

// Instanceof
// let objectIstance= new Number(45);
// console.log(objectIstance instanceof Number);   //TRUE çıktısını verir.

// New
// let dataNew=new Number(45);
// console.log(dataNew);  //işaretli bir number var .

// dataNew=null;
// console.log(dataNew); //null

// Undefined
// let dataNumber;
// console.log(dataNumber);    //Undefined

// NaN
// let result = 10 /10;
// console.log(result);

// let result2 = 10 / "10";
// console.log(result2);

// let result3 = 10 /"ABSFS";  //NaN
// console.log(result3);


//isNaN = true dönüyosa sayı değildir.
// let result4 = 10 /"ABSFS";
// console.log(!isNaN(result4));    //true

//hoisting
// dataNumber2=55;
// let dataNumber2;
// console.log(dataNumber2);


/////////////////////////////////////////////////////////////////////////////////////////

// sayısal işlemler
//sayısal işlemler(cast)
// Sayısal İşlemler
// let number1=44;
// console.log(number1);
// console.log(typeof number1);    //number
// console.log(isNaN(number1));    //number olmasına rağmen false verdi.

// let numberfloat=44.23;
// console.log(numberfloat) ;
// console.log(typeof numberfloat);    //number


//Infinity hatasu
// let nb2 = 4/0;
// console.log(nb2);

// let bilimselGosterim=13E+5;
// console.log(bilimselGosterim);  //1300000

// let bilimselGosterim2=13E-5;
// console.log(bilimselGosterim2); //0.00013


// 2 tabanda
// let binary= 0b00011100;
// console.log(binary);

// 8 tabanda
// let octal= 0o74101;
// console.log(octal);

// 16 tabanda
// let hexadecimal= 0x01fed; 
// console.log(hexadecimal) ;

// tofixed
// const sayi=56.123456;
// console.log(sayi.toFixed(4));


// let data1="10";
// let data2="20";
// console.log(data1+data2);   //1020
// console.log(Number(data1) + Number(data2)); //30
// console.log(parseInt(data1) + parseInt(data2)); //30

// let data3="10.8";
// console.log(parseFloat(data3) + parseInt(data2)); //30.8
// console.log(parseFloat(data3) + parseFloat(data2)); //30.8