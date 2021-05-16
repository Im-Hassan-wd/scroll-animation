function flyPlane (){
    const flightPath ={
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100, y: -20},
            {x: 300, y: 10},
            {x: 400, y: -10},
            {x: 500, y: -100},
            {x:700, y: -200},
            {x: 350, y: -100},
            {x: 700, y: -50},
            {x: window.innerWidth, y: -200}
        ] 
    }

    var tween = new TimelineLite;
    tween.add(
        TweenLite.to('.paper-plane', 4,{
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    );

}
window.addEventListener('scroll' , flyPlane)