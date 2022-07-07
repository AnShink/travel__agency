const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav.querySelectorAll('a');

burger?.addEventListener('click',() => {
    document.body.classList.toggle('stop-scroll');
    burger?.classList.toggle('active');
    nav?.classList.toggle('active');
});

navItems.forEach(el => {
    el.addEventListener('click', () =>{
        document.body.classList.remove('stop-scroll');
        burger?.classList.remove('active');
        nav?.classList.remove('active');
    });
});

const tabsBtn = document.querySelectorAll(".nav-btn");
const tabsItems = document.querySelectorAll(".content-item");

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')){
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
            
            console.log(currentBtn);
            console.log(currentTab);

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

document.querySelector('.nav-btn').click();