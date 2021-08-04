var pageName = document.querySelector('[data-page]').dataset.page

var activePage = document.querySelector(`[data-page_name="${pageName}"]`)
console.log(pageName);
if (activePage) {
    activePage.classList.add('active')
}
else{
    console.log('test');
}