const firstTabContent = document.querySelector('.first-tab-content');
const secondTabContent = document.querySelector('.second-tab-content');
const thirdTabContent = document.querySelector('.third-tab-content');
const fourthTabContent = document.querySelector('.fourth-tab-content');
const fifthTabContent = document.querySelector('.fifth-tab-content');
const firstTab = document.querySelector('#first-tab');
const secondTab = document.querySelector('#second-tab');
const thirdTab = document.querySelector('#third-tab');
const fourthTab = document.querySelector('#fourth-tab');

firstTabContent.style.display = 'block';
secondTabContent.style.display = 'none';
thirdTabContent.style.display = 'none';
fourthTabContent.style.display = 'none';
firstTabContent.style.display = 'none';

firstTab.addEventListener('click', function() {
    switch (firstTabContent.style.display) {
        case 'none':
            firstTabContent.style.display = 'block';
            secondTabContent.style.display = 'none';
            thirdTabContent.style.display = 'none';
            fourthTabContent.style.display = 'none';
            break;
        case 'block':
            firstTabContent.style.display = 'none';
    }
});

secondTab.addEventListener('click', function() {
    switch (secondTabContent.style.display) {
        case 'none':
            secondTabContent.style.display = 'block';
            firstTabContent.style.display = 'none';
            thirdTabContent.style.display = 'none';
            fourthTabContent.style.display = 'none';
            break;
        case 'block':
            secondTabContent.style.display = 'none';
    }
});

thirdTab.addEventListener('click', function() {
    switch (thirdTabContent.style.display) {
        case 'none':
            thirdTabContent.style.display = 'block';
            firstTabContent.style.display = 'none';
            secondTabContent.style.display = 'none';
            fourthTabContent.style.display = 'none';
            break;
        case 'block':
            thirdTabContent.style.display = 'none';
    }
});

fourthTab.addEventListener('click', function() {
    switch (fourthTabContent.style.display) {
        case 'none':
            fourthTabContent.style.display = 'block';
            thirdTabContent.style.display = 'none';
            firstTabContent.style.display = 'none';
            secondTabContent.style.display = 'none';
            break;
        case 'block':
            fourthTabContent.style.display = 'none';
    }
});