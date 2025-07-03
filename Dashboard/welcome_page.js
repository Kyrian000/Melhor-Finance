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
const themeBtn = document.querySelector('.nav_theme_btn');

// Check for saved theme preference on page load
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme === 'dark_theme') {
    document.body.classList.add('dark_theme');
    themeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
} else {
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark_theme');
    if (document.body.classList.contains('dark_theme')) {
        themeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
        // save theme to local storage
        localStorage.setItem('currentTheme', 'dark_theme');
    } else {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        // save theme to local storage
        localStorage.setItem('currentTheme', '');
    }
});






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



// preventing logout unless confirm prints true

// let logout = document.querySelectorAll('.logout');

// logout.addEventListener('click', (e) => {
//     // Prevent default action (in case it's a link or form button)
//     e.preventDefault();
    
//     let confirmed = confirm('Are you sure you want to logout?');
    
//     if (confirmed) {
//     fetch('/api/logout', {
//         method: 'POST',
//         credentials: 'same-origin'
//     })
//     .then(response => {
//         if (response.ok) {
//             window.location.href = '/login';
//         }
//     });
// }
// });