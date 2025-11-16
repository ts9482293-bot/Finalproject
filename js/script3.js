  var grid = document.querySelector('.grid');

    var iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    var buttons = document.querySelectorAll('button');

    buttons.forEach(function(btn){
      btn.addEventListener('click', function(){
        var filterValue = btn.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });