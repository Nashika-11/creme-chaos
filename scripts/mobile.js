const mobileMenuBtnElement = document.querySelector('.toggle');
const mobileMenuPage = document.getElementById('mobile-menu');
const menuPageListElements = document.querySelectorAll('#mobile-menu .nav-items li');

function toggleMobileMenu () {
    mobileMenuPage.classList.toggle('active')
    mobileMenuBtnElement.classList.toggle('active')

    for(const menuPageListElement of menuPageListElements){
        menuPageListElement.classList.toggle('active')
    }
}

mobileMenuBtnElement.addEventListener('click',toggleMobileMenu)