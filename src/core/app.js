import navBar from '../components/navbar.js';
import dashboard from '../pages/dashboard.js';
import invest from '../pages/invest.js';
import navbarEvents from './events.js';

const navigation = document.getElementById('navigation');
const pageContent = document.getElementById('pageContent');

function render() {
    let pageOn;
    
    navigation.innerHTML = `${navBar()}`
    pageContent.innerHTML = `${dashboard()}`

    const iconDashboard = document.querySelector('.icon.iconDashboard');
    const iconDashboard2 = document.querySelector('.icon2.iconDashboard');
    const iconInvestments = document.querySelector('.icon.iconInvestments');
    const iconInvestments2 = document.querySelector('.icon2.iconInvestments');
    iconDashboard.classList.add('selected');
    iconDashboard2.classList.add('selected2');

    document.addEventListener('click', function(e) {
        const el = e.target;
        
        if(el.classList.contains('icon') || el.classList.contains('icon2')) {
            if(el.classList.contains('iconDashboard')) {
                pageOn = dashboard();
            } else if(el.classList.contains('iconInvestments')) {
                pageOn = invest();
            }
            
            pageContent.innerHTML = `${pageOn}`;

            document.querySelectorAll('.icon, .icon2').forEach((icon) => {
                icon.classList.remove('selected', 'selected2');
            });
            
            if(el.classList.contains('iconDashboard')) {
                iconDashboard.classList.add('selected');
                iconDashboard2.classList.add('selected2');
            } else if(el.classList.contains('iconInvestments')) {
                iconInvestments.classList.add('selected');
                iconInvestments2.classList.add('selected2');
            };

            navbarEvents();
        }
    })
    
    navbarEvents();
}

render();