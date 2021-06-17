// google

let searchBar = document.querySelector('.searchBar');

let submitBtn = document.querySelector('.submitBtn');


submitBtn.onclick = function(){
    let url = 'http://www.google.com/search?q='+searchBar.value;

    window.open(url, '_self');
}


// bing
let searchBars = document.querySelector('.searchBars');

let submitBtns = document.querySelector('.submitBtns');


submitBtns.onclick = function(){
    let url = 'https://www.bing.com/search?q='+searchBars.value;

    window.open(url, '_self');
}



// https://www.bing.com/search?q=