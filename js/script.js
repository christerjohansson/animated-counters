const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const counst = +counter.innerText;

        const inc = target / speed;


    }


    updateCount();
})