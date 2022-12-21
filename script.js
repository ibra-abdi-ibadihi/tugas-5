//buat variabel
let h1 = document.getElementsByTagName('h1')[0];
let btn = document.getElementsByTagName('button')[0];
let up1 = document.getElementsByTagName('upgrader1')[0];
let up2 = document.getElementsByTagName('upgrader2')[0];
 
//buat nilai dahulu
let nilai = 1;
let increment = 1;

//ketika di tombol sudah di klik
btn.addEventListener('click', function(){ 
    //tambah nilai
    h1.innerHTML = nilai++; 
}); 

up1.addEventListener('click', function(){ 
    //tambah increment
    h1.innerHTML = nilai++;
    h1.innerHTML = nilai++; 
}); 

up2.addEventListener('click', function(){ 
    //tambah increment increment
    h1.innerHTML = nilai++; 
    h1.innerHTML = nilai++;
    h1.innerHTML = nilai++;
}); 