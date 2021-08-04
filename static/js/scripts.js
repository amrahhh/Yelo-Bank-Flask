$('.slick').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


const body = document.getElementsByTagName('body')[0]
const menu = document.querySelector('.menu_toggle')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
menu.addEventListener('click', function() {
    if (body.classList == 'open_menu') {
      body.classList.remove('open_menu')
      main.style.display = 'block'
      footer.style.display = 'block'
    }
    else {
      body.classList.add('open_menu')
      main.style.display = 'none'
      footer.style.display = 'none'
    }
})

const header = document.querySelector('.header_top')
const banking = document.querySelector('.o_banking')
window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
      header.style.display = 'none';
      banking.classList.add('hide_top')
    }
    else{
      header.style.display = 'block'
      banking.classList.remove('hide_top')
    }
})

const lang = document.querySelector('.active_lang')
const arrow = document.querySelector('.select_box')
lang.addEventListener('focus', function(){
  arrow.classList.add('open_select')
  header.classList.add('lang')
})

lang.addEventListener('blur', function(){
  arrow.classList.remove('open_select')
  header.classList.remove('lang')
})


// Modal

var model = document.querySelector('.message_trigger')
var a = document.querySelector('.modals')
var b = document.querySelector('.modal_item')
model.addEventListener('click', function(){
  a.style.display = 'block'
  a.classList.add('active')
  b.classList.add('active','show')
})

var msgBtn = document.querySelector('.message_trigger');
var msgInner = document.querySelector('.message_inner');
var msgItem = document.querySelector('.message_item');msgBtn.addEventListener('click', function() {
  msgInner.classList.add('active');
  msgInner.style.display = 'block';  msgItem.classList.add('active','show');
})

var msgBtnMobile = document.querySelector('.for_mobile')

msgBtnMobile.addEventListener('click', function(){
  msgInner.classList.add('active');
  msgInner.style.display = 'block';

  msgItem.classList.add('active','show');
})

var closeMsg = document.querySelector('.close_msg')
closeMsg.addEventListener('click', function() {
  msgInner.classList.remove('active');
  msgInner.style.display = 'none';  msgItem.classList.remove('active','show');})


  var searchOpen = document.getElementById('searchIcon')
  searchOpen.addEventListener('click', function() {
    var searchInterface = document.querySelector('.search_wrap')
    searchInterface.style.display = 'block'
})
var searchClose = document.querySelector('.close_search')
searchClose.addEventListener('click', function() {
    var searchInterface = document.querySelector('.search_wrap')
    searchInterface.style.display = 'none'
})