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
