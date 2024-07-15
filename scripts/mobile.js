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

function closeMenuTab () {
    mobileMenuPage.classList.remove('active')
    mobileMenuBtnElement.classList.remove('active')

    for(const menuPageListElement of menuPageListElements){
        menuPageListElement.classList.remove('active')
    }
}

mobileMenuBtnElement.addEventListener('click',toggleMobileMenu)

for(const menuPageListElement of menuPageListElements){
    menuPageListElement.addEventListener('click',closeMenuTab)
}