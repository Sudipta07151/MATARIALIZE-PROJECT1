document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
    // var elemsM= document.querySelectorAll('.materialboxed');
    // var instancesM = M.Materialbox.init(elemsM);

    var elemsC = document.querySelectorAll('.carousel');
    var instancesC = M.Carousel.init(elemsC,{
      fullWidth: true,
      indicators: true,
      numVisible:3
    });
    var el = document.querySelector(".carousel");
    var instanceCar = M.Carousel.getInstance(el);
    
    const PrevBtn=document.getElementById('prev')
    const NextBtn=document.getElementById('next')

    var elemsP = document.querySelectorAll('.parallax');
    var instancesP = M.Parallax.init(elemsP);

    PrevBtn.addEventListener('click',()=>{
      instanceCar.prev();
      console.log('clickedP');
    });
    NextBtn.addEventListener('click',()=>{
      instanceCar.next();
      console.log('clickedN');
    });

    const PrevBtn2=document.getElementById('prev2')
    const NextBtn2=document.getElementById('next2')
    PrevBtn2.addEventListener('click',()=>{
      instanceCar.prev();
      console.log('clickedP');
    });
    NextBtn2.addEventListener('click',()=>{
      instanceCar.next();
      console.log('clickedN');
    });

  });


