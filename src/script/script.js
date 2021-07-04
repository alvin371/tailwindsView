// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let konten = document.getElementsByClassName("Konten")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];

// let tabsPane = tabHeader.getElementsByTagName("a");
// let gambar = document.querySelectorAll(".Konten .bibit");
// let tabKonten = konten.getElementsByTagName("section")
 
// for(let i=0;i<tabsPane.length;i++){
//   tabsPane[i].addEventListener("click",function(){

//     if(this.classList.contains("active-tab")){
//       console.log(this)
//      this.parentNode.classList.remove('kontenAktive')
//     }
//       gambar[i].classList.add('kontenAktive')
//   //  konten.getElementsByClassName("kontenAktive")[0].classList.remove("kontenAktive");
//   //  tabKonten[i].classList.toggle("kontenAktive")
//   });
// }

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("a");
let tabWaktu = document.getElementsByClassName("jangka-waktu")[0];
let tabKegiatan = document.getElementsByClassName("div-kegiatan")[0];
let tabTingkatan = document.getElementsByClassName("div-tingkatan")[0];
let tabMasalah = document.getElementsByClassName("div-masalah")[0];
let tabPertanyaan = document.getElementsByClassName("div-pertanyaan")[0];
let tabAlat = document.getElementsByClassName("div-alat")[0];
 
for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("active-tab")[0].classList.remove("active-tab");
    tabsPane[i].classList.add("active-tab");
    tabBody.getElementsByClassName("tab-content-active")[0].classList.remove("tab-content-active");
    tabBody.getElementsByTagName("div")[i].classList.add("tab-content-active");
    tabWaktu.getElementsByClassName("waktu-active")[0].classList.remove("waktu-active");
    tabWaktu.getElementsByClassName("waktu")[i].classList.add("waktu-active");
    tabKegiatan.getElementsByClassName("kegiatan-active")[0].classList.remove("kegiatan-active");
    tabKegiatan.getElementsByClassName("kegiatan")[i].classList.add("kegiatan-active");
    tabTingkatan.getElementsByClassName("tingkatan-active")[0].classList.remove("tingkatan-active");
    tabTingkatan.getElementsByClassName("tingkatan")[i].classList.add("tingkatan-active");
    tabMasalah.getElementsByClassName("masalah-active")[0].classList.remove("masalah-active");
    tabMasalah.getElementsByClassName("masalah")[i].classList.add("masalah-active");
    tabPertanyaan.getElementsByClassName("pertanyaan-active")[0].classList.remove("pertanyaan-active");
    tabPertanyaan.getElementsByClassName("pertanyaan")[i].classList.add("pertanyaan-active");
    tabAlat.getElementsByClassName("alat-active")[0].classList.remove("alat-active");
    tabAlat.getElementsByClassName("alat")[i].classList.add("alat-active");
  });
}

let item = document.querySelectorAll(".head-popover .popover");

for(let i=0; i<item.length;i++){
  item[i].addEventListener("click", function(){
    let content = this.getElementsByClassName("popover-content")[0]
    content.classList.toggle('active')
    
  })
}
// let konten = document.getElementsByClassName('Konten')[0];
// let screen = document.querySelectorAll('.');
// for(let i=0; i<screen.length;i++){
//   screen[i].addEventListener("click", function(){
//     console.log(i)
//   })
// }

// let konten = document.getElementsByClassName("Konten")[0];

let nav = document.querySelectorAll('tab-header');
console.log(nav)