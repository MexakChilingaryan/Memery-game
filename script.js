 let div = document.querySelectorAll('.text1');
 let div1 = document.querySelectorAll('.text2');
 let div2 = document.querySelectorAll('.text3');
 let div4 = document.querySelector('.section')
 let div5 = document.getElementById('section2')
 let p7 = document.getElementById('p5')
 let p6 = document.getElementById('p7')
 let p8 = document.getElementById('p8')
 let p10 = document.getElementById('p10')
 let p11 = document.getElementById('p11')
 let p12 = document.getElementById('p12')
 let color = ["red", "black", "green", "gold", "blue", "red", "black", "green", "gold", "blue", "red", "black", "green", "gold", "blue", "red", "black", "green", "gold", "blue"];

 for (var i = 0; i < color.length; i++) {
     var a = Math.floor(Math.random() * 20)
     if (color[a] !== undefined) {
         div[i].style.backgroundColor = color[a];
         delete color[a];

     } else {
         --i;
     }

 }

 setTimeout(() => {
     for (let ll = 0; ll < div1.length; ll++) {
         div1[ll].style.opacity = '0';
     }
 }, 500);

 setTimeout(() => {
     for (let ll = 0; ll < div1.length; ll++) {
         div1[ll].style.opacity = '1';
     }
 }, 1000);



 let xx = [];
 let yy = [];
 var z = 0;
 let k = 0;
 let lll;
 let ll;
 let zz = 0
 let zzz = 0
 for (let ii = 0; ii < div.length; ii++) {
     div[ii].addEventListener('click', function() {


         div1[ii].style.opacity = '0';
         if (k % 2 === 0) {

             lll = ii;
             if (ll !== lll) {
                 xx[0] = (div[ii].style.backgroundColor);
                 ++zz;
                 k = k + 1;


             }
         } else if (k % 2 === 1) {

             ll = ii;
             if (ll !== lll) {
                 yy[0] = (div[ii].style.backgroundColor);
                 k = k + 1
             }
         }
         if ((xx[0] === yy[0]) && (k % 2 === 0)) {

             xx = [];
             yy = [];

             setTimeout(() => {

                 div[lll].style.opacity = '1';
                 div[ll].style.opacity = '1';
             }, 100);
             setTimeout(() => {
                 div2[lll].style.display = 'flex';
                 div2[ll].style.display = 'flex';
                 div[lll].style.display = 'none';
                 div[ll].style.display = 'none';
                 ++z;


                 if (z === 10) {

                     p7.style.display = 'none';
                     p10.style.display = 'none';
                     p11.style.display = 'none';
                     p12.style.display = 'none';
                     div5.style.display = 'flex';
                     div5.style.justifyContent = 'center'
                     div5.style.alignItems = 'center'
                     p8.style.backgroundColor = 'rgb(56, 56, 171)'
                     p6.innerHTML = 'Դուք հաղթեցիք';
                     p6.style.color = 'red';
                     p6.style.fontSize = "60px";
                 }
             }, 150);

         } else if ((xx[0] !== yy[0]) && (yy[0] !== undefined)) {


             xx = [];
             yy = [];
             setTimeout(() => {

                 div1[lll].style.opacity = '1';
                 div1[ll].style.opacity = '1';

             }, 120);

         }


     })

 }