// show/hide sidebar menu

let closeSideBarBtn = document.querySelector('.sidebar_close_btn');
let sidebar = document.querySelector('.sidebar');
let openSidebarBtn = document.querySelector('.nav_menu_btn');


openSidebarBtn.addEventListener('click', () =>{
    sidebar.style.display = 'flex'
});

closeSideBarBtn.addEventListener( 'click', () => {
    sidebar.style.display = 'none'
});


// theme toggle
const themeBtn = document.querySelector('.nav_theme_btn')

themeBtn.addEventListener( 'click', () => {
    document.body.classList.toggle('dark_theme')
})


const chart = document.querySelector('#chart').getContext('2d');
new Chart(chart, {
    type: 'line',
    data: {
        labels:["January", "February", "March", "April", "May", "June"],
        datasets:[
            {
                label: 'BTC',
                data: [50000, 55000, 60000, 58000, 62000, 65000],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [3000, 3200, 3500, 3400, 3600, 3800],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options:{
        responsive: true 
    }
})

// Solidify navbar on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
