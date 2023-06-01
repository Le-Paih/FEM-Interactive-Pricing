const slider = document.getElementById('slider');
const pageviews = document.querySelector('.pv-span');
const toggle = document.getElementById('interval-switch');
const price = document.querySelector('.price');

function handlePricingChanges(value) {
    let pricing = 8;

    if(value == 1) {
        pageviews.textContent = '10k';
        pricing = 8;
    } else if (value == 2) {
        pageviews.textContent = '50k';
        pricing = 12;
    } else if (value == 3) {
        pageviews.textContent = '100K';
        pricing = 16;        
    } else if (value == 4) {
        pageviews.textContent = '500K';
        pricing = 24;
    } else if (value == 5) {
        pageviews.textContent = '1M';
        pricing = 36;
    }

    if(toggle.checked) {
        const totalValue = pricing - pricing * 0.25;
        price.textContent = `$${totalValue}.00`;
    } else {
        price.textContent = `$${pricing}.00`
    }

    slider.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%) ${value}%,
		 hsl(224, 65%, 95%) 50%,
		 hsl(224, 65%, 95%) 100%
	)`;
};

slider.addEventListener('input', (e) => {
    const value = slider.value;
    handlePricingChanges(value);
});

toggle.addEventListener('input', (e) => {
    const value = slider.value;
    handlePricingChanges(value);
});













// const slider = document.getElementById('slider');
// const toggle = document.getElementById('interval-switch');
// const pageviews = document.querySelector('.pv-span');
// const discount = document.querySelector('.yr-span');

// toggle.addEventListener('click', () => {
//     console.log('hola')
// })

// const slider = document.getElementById('slider');

// let basePrice = 16.00;
// let basePricingInterval = 'month';

// function getPricePaymentInterval(price, int) {
//     if (int === 'month') {
//         basePrice = price;
//     } else {
//         basePrice = (price * 12) * 0.75
//     };
// };

// function sliderPriceChange(value) {
//     let pageViews = document.querySelector('.pv-span');
//     let price = document.querySelector('.price');

//     switch(value) {
//         case '5':
//         basePrice = 36.00;
//         getPricePaymentInterval(basePrice, basePricingInterval);
        
//         slider.setAttribute('aria-valuenow', 5);

//         pageViews.innerHTML = "1M Pageviews";
//         price.innerHTML= '$' + basePrice.toFixed(2) + "<span id='price-per'> / " + basePricingInterval + '</span.';
//         break;
//         case '4':
//         basePrice = 24.00;
//         getPricePaymentInterval(basePrice, basePricingInterval);
        
//         slider.setAttribute('aria-valuenow', 4);

//         pageViews.innerHTML = "500K Pageviews";
//         price.innerHTML= '$' + basePrice.toFixed(2) + "<span id='price-per'> / " + basePricingInterval + '</span.';
//         break;
//         case '3':
//         basePrice = 16.00;
//         getPricePaymentInterval(basePrice, basePricingInterval);
        
//         slider.setAttribute('aria-valuenow', 5);

//         pageViews.innerHTML = "100K Pageviews";
//         price.innerHTML= '$' + basePrice.toFixed(2) + "<span id='price-per'> / " + basePricingInterval + '</span.';
//         break;
//         case '2':
//         basePrice = 12.00;
//         getPricePaymentInterval(basePrice, basePricingInterval);
        
//         slider.setAttribute('aria-valuenow', 5);

//         pageViews.innerHTML = "50K Pageviews";
//         price.innerHTML= '$' + basePrice.toFixed(2) + "<span id='price-per'> / " + basePricingInterval + '</span.';
//         break;
//         case '1':
//         basePrice = 8.00;
//         getPricePaymentInterval(basePrice, basePricingInterval);
        
//         slider.setAttribute('aria-valuenow', 5);

//         pageViews.innerHTML = "5K Pageviews";
//         price.innerHTML= '$' + basePrice.toFixed(2) + "<span id='price-per'> / " + basePricingInterval + '</span.';
//         break;
//         default:
//             break;

//     };
// };

// function pricingToggle(value) {
//     if (value === true) {
//         basePricingInterval = 'year';

//         document.getElementById('interval-switch').setAttribute('aria-checked', true);
//         sliderPriceChange(slider.value);
//     } else {
//         basePricingInterval = 'month'

//         document.getElementById('interval-switch').setAttribute('aria-checked', false);
//         sliderPriceChange(slider.value);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // document.getElementById('slider').addEventListener('mousedown', () => {
//     //     this.style.outlineWidth = 0;
//     // });

//     // document.getElementById('slider').addEventListener('mouseup', () => {
//     //     this.blur();
//     //     this.style.outlineWidth = 'initial';
//     // });

//     // document.getElementById('slider').addEventListener('mouseleave', () => {
//     //     this.blur();
//     //     this.style.outlineWidth = 'initial'
//     // });

//     slider.oninput = () => {
//         sliderPriceChange(this.value);

//         var fillTrack = (this.value - this.min) / (this.max - this.min) * 100;

//         slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
//         + fillTrack + "%, hsl(224, 65%, 95%) " + fillTrack + "%, hsl(224, 65%, 95%) 100%)"
//     };

//     document.getElementById('interval-switch').oninput = () => {
//         pricingToggle(this.checked)
//     };

// });