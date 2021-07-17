const light = document.querySelector('.light'),
      night = document.querySelector('.night'),
      img = document.querySelector('img');

light.addEventListener('click', function() {
    img.setAttribute('src', 'https://st.depositphotos.com/1310390/1389/v/600/depositphotos_13897533-stock-illustration-lit-light-bulb.jpg');
});

night.addEventListener('click', function() {
    img.setAttribute('src', 'https://s.felomena.com/wp-content/images/sonnik/bukva/l/lampochka.jpg');
});

