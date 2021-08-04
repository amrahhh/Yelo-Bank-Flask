$('.slick').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
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

menu.addEventListener('click', function(){
    if (body.classList == 'open_menu'){
      body.classList.remove('open_menu')
      main.style.display = 'block'
      footer.style.display = 'block'
    }else{
      body.classList.add('open_menu')
      main.style.display = 'none'
      footer.style.display = 'none'
    }

})


const header = document.querySelector('.header_top')
const bank = document.querySelector('.o_banking')

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
      header.style.display = 'none';
      bank.classList.add('hide')
    }else{
      header.style.display = 'block'
      bank.classList.remove('hide')
    }
})

let langSelect = document.querySelector('.active_lang')
let selectBox = document.querySelector('.select_box')

langSelect.addEventListener('focus', function(){
    selectBox.classList.add('open_select')
    header.classList.add('lang')
})

langSelect.addEventListener('blur', function(){
  selectBox.classList.remove('open_select')
    header.classList.remove('lang')
})


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


var msgBtn = document.querySelector('.message_trigger');
var msgInner = document.querySelector('.message_inner');
var msgItem = document.querySelector('.message_item');

msgBtn.addEventListener('click', function() {
  msgInner.classList.add('active');
  msgInner.style.display = 'block';

  msgItem.classList.add('active','show');
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
  msgInner.style.display = 'none';

  msgItem.classList.remove('active','show');

})

