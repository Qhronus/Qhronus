gsap.from('#splashscreen', {
    duration: 1,
     top: "0vh",
      ease: "expo.inOut",
       delay: 1.5})


gsap.from('body', {
    height: "100vh",
    overflowY: "hidden",
    delay: 1})

gsap.to('body', {
    height: "100%",
    overflowY: "scroll",
    delay: 1.5})
    

gsap.to('#splashscreen', {
    zIndex: "-2",
     delay: 2})

//RESPONSIVE???

const mediaQuery = window.matchMedia("(max-width: 550px)");

function handleScreenChange(event) {
    if (event.matches) { // si es chikito
        gsap.to("#contenidoCasos",{
            scrollTrigger:{
                trigger:"#contenidoCasos",
                start: '-50% center',
                end: '-30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            marginTop: "0",
            filter: "blur(0vw)",
            opacity: "1",
            duration: 1,
        
        })
        
        gsap.to("#servicios h2",{
            scrollTrigger:{
                trigger:"#servicios",
                start: '-50% center',
                end: '-20% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "0vw",
            duration: 1,
        })
        
        gsap.to("#serviciosText",{
            scrollTrigger:{
                trigger:"#serviciosText",
                start: '-120% center',
                end: '-70% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            paddingTop: "0vw",
            duration: 1,
        })

        gsap.to(".stickycontainer .img",{
            scrollTrigger:{
                trigger:"#proceso",
                start: '-60% center',
                end: '100% center',
                scrub: false,
                markers: false,
                toggleActions: 'play reverse play reverse',
            },
            opacity: "1",
            top: "-3vh",
            duration: 1,
        })

        gsap.to("#proceso .texto",{
            scrollTrigger:{
                trigger:"#proceso",
                start: '-40% center',
                end: '80% center',
                scrub: false,
                markers: false,
                toggleActions: 'play reverse play reverse',
            },
            opacity: "1",
            marginTop: "0vh",
            duration: 1,
        })

        gsap.to("#proceso h2",{
            scrollTrigger:{
                trigger:"#proceso",
                start: '-40% center',
                end: '80% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "130vw",
            duration: 1,
        })

        gsap.to("#value1",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-40% center',
                end: '-20% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "6vw",
            duration: 1,
        })

        gsap.to("#value2",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-30% center',
                end: '-10% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "31vw",
            duration: 1,
        })

        gsap.to("#value3",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-30% center',
                end: '-10% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "31vw",
            duration: 1,
        })

        gsap.to("#value4",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-20% center',
                end: '0% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "73.5vw",
            duration: 1,
        })

        gsap.to("#value5",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '5% center',
                end: '15% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "116vw",
            duration: 1,
        })

        gsap.to("#value6",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '5% center',
                end: '15% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "116vw",
            duration: 1,
        })

        gsap.to("#value7",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '15% center',
                end: '30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "157vw",
            duration: 1,
        })

        gsap.to("#value8",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '15% center',
                end: '30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            top: "157vw",
            duration: 1,
        })

        gsap.to("CTA h2",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '110% center',
                end: '130% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "27vw",
            duration: 1,
        })

        gsap.to(".CTA h2",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '70% center',
                end: '100% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "27vw",
            duration: 1,
        })

        gsap.to(".CTA h3",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '70% center',
                end: '100% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            duration: 1,
        })

        gsap.to(".CTA button",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '70% center',
                end: '100% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            duration: 1,
        })

        gsap.to(".imgCTA",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '80% center',
                end: '110% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "72vw",
            opacity: "1",
            duration: 1,
        })

        gsap.to(".FAQ",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '150% center',
                end: '160% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            marginTop: "130vw",
            opacity: "1",
            duration: 1,
        })


        
        
        
       
        
        
        

        
        
        
    } else {
        gsap.to("#contenidoCasos",{
            scrollTrigger:{
                trigger:"#contenidoCasos",
                start: '-50% center',
                end: '-30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            marginTop: "0",
            filter: "blur(0vw)",
            opacity: "1",
            duration: 1,
        
        })
        
        gsap.to("#servicios h2",{
            scrollTrigger:{
                trigger:"#servicios",
                start: '-50% center',
                end: '-20% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "0vw",
            duration: 1,
        })
        
        gsap.to("#serviciosText",{
            scrollTrigger:{
                trigger:"#serviciosText",
                start: '-120% center',
                end: '-70% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            paddingTop: "0vw",
            duration: 1,
        })
        
        
        
        gsap.to("#proceso h2",{
            scrollTrigger:{
                trigger:"#proceso h2",
                start: '-160% center',
                end: '-130% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "0vw",
            duration: 1,
        })
        
        gsap.to("#proceso .texto",{
            scrollTrigger:{
                trigger:"#proceso h2",
                start: '-160% center',
                end: '-130% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            opacity: "1",
            marginTop: "0vw",
            duration: 1,
        })
        
        gsap.to(".img",{
            scrollTrigger:{
                trigger:"#proceso",
                start: 'top center',
                end: '78% center',
                scrub: false,
                markers: false,
                toggleActions: 'play reverse play reverse',
            },
            opacity: "1",
            duration: 1,
        })
        
        
        
        gsap.to("#value1",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-50% center',
                end: '-30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "0.5vw",
            opacity: "1",
            duration: 1,
        })
        
        gsap.to("#value2",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-50% center',
                end: '-30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "0.5vw",
            opacity: "1",
            duration: 1,
            delay: .4
        })
        
        gsap.to("#value3",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-50% center',
                end: '-30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "0.5vw",
            opacity: "1",
            duration: 1,
            delay: .8
        })
        
        gsap.to("#value4",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-20% center',
                end: '0% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "16.3vw",
            opacity: "1",
            duration: 1,
        })
        
        gsap.to("#value5",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '-20% center',
                end: '0% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "16.3vw",
            opacity: "1",
            duration: 1,
            delay: .4
        })
        
        gsap.to("#value6",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '5% center',
                end: '40% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "41.4vw",
            opacity: "1",
            duration: 1,
        })
        
        gsap.to("#value7",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '5% center',
                end: '40% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "41.4vw",
            opacity: "1",
            duration: 1,
            delay: .4
        })
        
        gsap.to("#value8",{
            scrollTrigger:{
                trigger:"#valueproposition",
                start: '5% center',
                end: '40% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
            top: "41.4vw",
            opacity: "1",
            duration: 1,
            delay: .8
        })
        
        
        
        gsap.to(".imgCTA",{
            scrollTrigger:{
                trigger:".CTA",
                start: '10% center',
                end: '30% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
                
            },
            top: "-10vw",
            opacity: "0.6",
            duration: 1,
        })
        
        
        gsap.to(".FAQ",{
            scrollTrigger:{
                trigger:".CTA",
                start: '-10% center',
                end: '0% center',
                scrub: false,
                markers: false,
                toggleActions: 'play play reverse reverse',
                
            },
            marginTop: "-23vw",
            opacity: "1",
            duration: 1,
        })
     
    }
  }
  
  // Create a MediaQueryList object

  
  // Call listener function at run time
mediaQuery.addEventListener('change', handleScreenChange);
  
  // Attach listener function on state changes
handleScreenChange(mediaQuery);

window.addEventListener('resize', () => {
    handleScreenChange(mediaQuery);
});

//SCROLLTRIGGER



function showmenu(){
    gsap.to("#navmen",{
        left: "0vw",
        duration: 1
    })
}

function hidemenu(){
    gsap.to("#navmen",{
        left: "101vw",
        duration: 1
    })
}

//CASOS DE USO

let intro = 1;


function casosdeuso0(){

    if (intro === 1) {
        gsap.to("#container1",{
            filter:"blur(0vw)",
            cursor: "pointer",
            marginLeft: "12vw",
            width: "7vw",
            height: "32vw",
            padding: "0vw",
            duration: 1
        })
        gsap.to("#container1 button",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 h3",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 p",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 .img1",{
            top: "-2vw",
            margin: "-1vw",
            duration: 1 
        })
        gsap.to("#container1 .img2",{
            left: "20%",
            duration: 1 
        })
        gsap.to("#container1 .iconCont",{
            opacity: "1",
            top: "26vw",
            left: "1vw",
            zIndex: "888",
            duration: 1 
        })
    
        //CONTAINER 2
    
        gsap.to("#container2",{
            filter: "blur(0vw)",
            marginLeft: "2vw",
            cursor: "auto",
            height: "28vw",
            width: "34vw",
            padding: "4vw", 
        })
    
        gsap.to("#container2 .fondo",{
            opacity: "1",
            duration: 1 
        })
        gsap.to("#container2 .iconCont",{
            top: "28.2vw",
            left: "4vw",
            duration: 1 
        })
    
        //CONTAINER 3
    
        gsap.to("#container3" ,{
            filter: "blur(0vw)",
            marginLeft: "2vw",
            width: "7vw",
            height: "32vw",
            padding: "0vw",
            duration: 1 
        })
        gsap.to("#container3 .iconCont",{
            top: "25.5vw",
            left: "0.9vw",
            duration: 1 
        })
        gsap.to("#container3 .fondo",{
            opacity: "0",
            duration: 1 
        })
    
        //CONTAINER 4
    
        gsap.to("#container4" ,{
            filter: "blur(0.1vw)",
            marginLeft: "-3vw",
            width: "7vw",
            height: "28vw",
            padding: "0vw",
            duration: 1 
        })
    
        gsap.to("#container4 .iconCont",{
            top: "22vw",
            left: "0.9vw",
            duration: 1 
        })
        gsap.to("#container4 .fondo",{
            opacity: "0",
            duration: 1 
        })

        intro=2;

    } else {

        gsap.to("#container1",{
            filter: "blur(0vw)",
            opacity:"1",
            cursor: "auto",
            marginLeft: "21vw",
            width: "36vw",
            height: "28vw",
            padding: "4vw",
            duration: 1 
        })
        gsap.to("#container1 button",{
            marginLeft: "0vw",
            opacity: "1",
            duration: 1 
        })
        gsap.to("#container1 h3",{
            marginLeft: "0vw",
            opacity: "1",
            duration: 1 
        })
        gsap.to("#container1 p",{
            marginLeft: "0vw",
            opacity: "1",
            duration: 1
        })
        gsap.to("#container1 .img1",{
            top: "0vw",
            margin: "-4vw",
            duration: 1 
        })
        gsap.to("#container1 .img2",{
            left: "70%",
            duration: 1 
        })
        gsap.to("#container1 .iconCont",{
            opacity: "1",
            top: "28vw",
            left: "1vw",
            opacity: "0",
            zIndex: "888",
            duration: 1 
        })
    
        //CONTAINER 2
    
        gsap.to("#container2",{
            zIndex:"20",
            filter:"blur(0wv)",
            marginLeft: "2vw",
            zIndex: "20",
            cursor: "pointer",
            height: "32vw",
            width: "7vw",
            padding: "0vw", 
        })
    
        gsap.to("#container2 .fondo",{
            opacity: "0",
            duration: 1 
        })
        gsap.to("#container2 .iconCont",{
            top: "25.5vw",
            left: "0.9vw",
            duration: 1 
        })
    
        //CONTAINER 3
    
        gsap.to("#container3" ,{
            zIndex:"18",
            filter: "blur(0.1vw)",
            marginLeft: "-3vw",
            width: "7vw",
            height: "28vw",
            padding: "0vw",
            duration: 1 
        })
        gsap.to("#container3 .fondo",{
            opacity: "0",
            duration: 1 
        })
        gsap.to("#container3 .iconCont",{
            top: "22vw",
            left: "0.9vw",
            duration: 1 
        })
    
        //CONTAINER 4
    
        gsap.to("#container4" ,{
            filter: "blur(0.2vw)",
            marginLeft: "-4vw",
            width: "7vw",
            height: "24vw",
            padding: "0vw",
            opacity: "1",
            duration: 1 
        })
    
        gsap.to("#container4 .iconCont",{
            top: "18vw",
            left: "0.9vw",
            duration: 1 
        })
        gsap.to("#container4 .fondo",{
            opacity: "0",
            duration: 1 
        })
    
        intro = 1;
    }

    

}

function casosdeuso1() {
          
        gsap.to("#container1",{
            filter:"blur(0vw)",
            cursor: "pointer",
            marginLeft: "12vw",
            width: "7vw",
            height: "32vw",
            padding: "0vw",
            duration: 1 
        })
        gsap.to("#container1 button",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 h3",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 p",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 .img1",{
            top: "-2vw",
            margin: "-1vw",
            duration: 1 
        })
        gsap.to("#container1 .img2",{
            left: "20%",
            duration: 1 
        })
        gsap.to("#container1 .iconCont",{
            opacity: "1",
            top: "26vw",
            left: "1vw",
            zIndex: "888",
            duration: 1 
        })
    
        //CONTAINER 2
    
        gsap.to("#container2",{
            filter: "blur(0vw)",
            marginLeft: "2vw",
            cursor: "auto",
            height: "28vw",
            width: "34vw",
            padding: "4vw",
            duration: 1
        })
    
        gsap.to("#container2 .fondo",{
            opacity: "1",
            duration: 1 
        })
        gsap.to("#container2 .iconCont",{
            top: "28.2vw",
            left: "4vw",
            duration: 1 
        })
    
        //CONTAINER 3
    
        gsap.to("#container3" ,{
            filter: "blur(0vw)",
            marginLeft: "2vw",
            width: "7vw",
            height: "32vw",
            padding: "0vw",
            duration: 1 
        })
        gsap.to("#container3 .iconCont",{
            top: "25.5vw",
            left: "0.9vw",
            duration: 1 
        })
        gsap.to("#container3 .fondo",{
            opacity: "0",
            duration: 1 
        })
    
        //CONTAINER 4
    
        gsap.to("#container4" ,{
            filter: "blur(0.1vw)",
            marginLeft: "-3vw",
            width: "7vw",
            height: "28vw",
            padding: "0vw",
            duration: 1 
        })
    
        gsap.to("#container4 .iconCont",{
            top: "22vw",
            left: "0.9vw",
            duration: 1 
        })
        gsap.to("#container4 .fondo",{
            opacity: "0",
            duration: 1 
        })

        intro=2;


    
}

function casosdeuso2() {

        gsap.to("#container1",{
            filter: "blur(0.1vw)",
            cursor: "pointer",
            marginLeft: "7vw",
            width: "7vw",
            height: "28vw",
            padding: "0vw",
            duration: 1 
        })
        gsap.to("#container1 button",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 h3",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 p",{
            marginLeft: "-3vw",
            opacity: "0",
            duration: 0.5 
        })
        gsap.to("#container1 .img1",{
            top: "-2vw",
            margin: "-1vw",
            duration: 1 
        })
        gsap.to("#container1 .img2",{
            left: "20%",
            duration: 1 
        })
        gsap.to("#container1 .iconCont",{
            opacity: "1",
            top: "22vw",
            left: "0.9vw",
            zIndex: "888",
            duration: 1 
        })
    
        //CONTAINER 2
    
        gsap.to("#container2",{
            filter: "blur(0vw)",
            cursor: "pointer",
            marginLeft: "-3.5vw",
            height: "32vw",
            width: "7vw",
            padding: "0vw",
            zIndex: "20",
            duration: 1
        })
    
        gsap.to("#container2 .fondo",{
            opacity: "0",
            duration: 1 
        })
        gsap.to("#container2 .iconCont",{
            top: "25.5vw",
            left: "0.9vw",
            duration: 1 
        })
    
        //CONTAINER 3
    
        gsap.to("#container3" ,{
            zIndex:"20",
            filter: "blur(0vw)",
            marginLeft: "2vw",
            width: "34vw",
            height: "28vw",
            padding: "4vw",
            duration: 1 
        })
        gsap.to("#container3 .iconCont",{
            top: "28.2vw",
            left: "4vw",
            duration: 1 
        })
        gsap.to("#container3 .fondo",{
            opacity: "1",
            duration: 1 
        })
    
        //CONTAINER 4
    
        gsap.to("#container4" ,{
            filter: "blur(0vw)",
            marginLeft: "-3vw",
            width: "7vw",
            height: "28vw",
            marginLeft: "2vw",
            padding: "0vw",
            opacity: "1",
            duration: 1 
        })
    
        gsap.to("#container4 .iconCont",{
            top: "22vw",
            left: "0.9vw",
            duration: 1 
        })
        gsap.to("#container4 .fondo",{
            opacity: "0",
            duration: 1 
        })

        intro=2;


}

function casosdeuso3() {

    gsap.to("#container1",{
        filter: "blur(0.2vw)",
        opacity: "0.6",
        cursor: "pointer",
        marginLeft: "2.5vw",
        width: "7vw",
        height: "24vw",
        padding: "0vw",
        duration: 1 
    })
    gsap.to("#container1 button",{
        marginLeft: "-3vw",
        opacity: "0",
        duration: 0.5 
    })
    gsap.to("#container1 h3",{
        marginLeft: "-3vw",
        opacity: "0",
        duration: 0.5 
    })
    gsap.to("#container1 p",{
        marginLeft: "-3vw",
        opacity: "0",
        duration: 0.5 
    })
    gsap.to("#container1 .img1",{
        top: "-2vw",
        margin: "-1vw",
        duration: 1 
    })
    gsap.to("#container1 .img2",{
        left: "20%",
        duration: 1 
    })
    gsap.to("#container1 .iconCont",{
        opacity: "1",
        top: "18vw",
        left: "0.9vw",
        zIndex: "888",
        duration: 1 
    })

    //CONTAINER 2

    gsap.to("#container2",{
        filter: "blur(0.1vw)",
        opacity:"1",
        cursor: "pointer",
        marginLeft: "-4vw",
        height: "28vw",
        width: "7vw",
        padding: "0vw",
        zIndex: "20",
        duration: 1
    })

    gsap.to("#container2 .fondo",{
        opacity: "0",
        duration: 1 
    })
    gsap.to("#container2 .iconCont",{
        top: "22vw",
        left: "0.9vw",
        duration: 1 
    })

    //CONTAINER 3

    gsap.to("#container3" ,{
        filter: "blur(0vw)",
        marginLeft: "-3.5vw",
        width: "7vw",
        height: "32vw",
        padding: "0vw",
        zIndex: "20",
        duration: 1 
    })
    gsap.to("#container3 .iconCont",{
        top: "25.5vw",
        left: "0.9vw",
        duration: 1 
    })
    gsap.to("#container3 .fondo",{
        opacity: "0",
        duration: 1 
    })

    //CONTAINER 4

    gsap.to("#container4" ,{
        filter: "blur(0vw)",
        marginLeft: "2vw",
        width: "34vw",
        height: "28vw",
        padding: "4vw",
        opacity: "1",
        duration: 1 
    })

    gsap.to("#container4 .iconCont",{
        top: "28vw",
        left: "4vw",
        duration: 1 
    })
    gsap.to("#container4 .fondo",{
        opacity: "1",
        duration: 1 
    })

    intro=2;


}


//SERVICIOS

let estadoServicio1 = 1;
let estadoServicio2 = 1;
let estadoServicio3 = 1;
let estadoServicio4 = 1;
let estadoServicio5 = 1;

function elegirServicio1() {
    if (estadoServicio1 === 1) {
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-semibold)",
            color: "var(--color-azul-texto)",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 2
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1

    } else if (estadoServicio1 === 2) {

        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1,
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1
    }
}


function elegirServicio2() {
    if (estadoServicio2 === 1){
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-semibold)",
            color: "var(--color-azul-texto)",
            duration: 1
        })
        gsap.to(".list #servicio2 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio2 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
           opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 2
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1

    } else if (estadoServicio2 === 2) {

        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1,
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1
    }

}

function elegirServicio3() {
    if (estadoServicio3 === 1){
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-semibold)",
            color: "var(--color-azul-texto)",
            duration: 1
        })
        gsap.to(".list #servicio3 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio3 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
           opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 2
        estadoServicio4 = 1
        estadoServicio5 = 1

    } else if (estadoServicio3 === 2) {

        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1,
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1
    }

}

function elegirServicio4() {
    if (estadoServicio4 === 1){
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-semibold)",
            color: "var(--color-azul-texto)",
            duration: 1
        })
        gsap.to(".list #servicio4 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio4 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
           opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 2
        estadoServicio5 = 1

    } else if (estadoServicio4 === 2) {

        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1,
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1
    }

}

function elegirServicio5() {
    if (estadoServicio5 === 1){
        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-semibold)",
            color: "var(--color-azul-texto)",
            duration: 1
        })
        gsap.to(".list #servicio5 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio5 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
           opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 2

    } else if (estadoServicio5 === 2) {

        gsap.to(".list #servicio5 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)",
            duration: 1
        })
        gsap.to(".list #servicio5 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1,
        })
        gsap.to(".list #servicio5 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio1 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio2 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio2 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio3 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio3 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio3 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })
    
    
    
        gsap.to(".list #servicio4 h3",{
            fontWeight: "var(--rethink-regular)",
            color: "var(--color-gris-texto)"
        })
        gsap.to(".list #servicio4 p", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".list #servicio4 .arrow", {
            opacity: "0.3",
            rotate: "90deg"
        })

        estadoServicio1 = 1
        estadoServicio2 = 1
        estadoServicio3 = 1
        estadoServicio4 = 1
        estadoServicio5 = 1
    }

}

// FAQS

let estadoFAQS1 = 1;
let estadoFAQS2 = 1;
let estadoFAQS3 = 1;


function elegirFAQ1() {
    if (estadoFAQS1 === 1) {
       
        gsap.to(".pPregunta1", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        gsap.to(".iconp1", {
            opacity: "1",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".pPregunta2", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp2", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        gsap.to("pPregunta3", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp3", {
            opacity: "0.3",
            rotate: "0deg"
        })

        estadoFAQS1 = 2
        estadoFAQS2 = 1
        estadoFAQS3 = 1

    } else if (estadoFAQS1 === 2) {

        gsap.to(".pPregunta1", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp1", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".pPregunta2", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp2", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        gsap.to(".pPregunta3", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp3", {
            opacity: "0.3",
            rotate: "0deg"
        })

        estadoFAQS1 = 1
        estadoFAQS2 = 1
        estadoFAQS3 = 1
    }
}

function elegirFAQ2() {
    if (estadoFAQS2 === 1) {
       
        gsap.to(".pPregunta2", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        gsap.to(".iconp2", {
            opacity: "1",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".pPregunta1", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp1", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        gsap.to(".pPregunta3", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp3", {
            opacity: "0.3",
            rotate: "0deg"
        })

        estadoFAQS1 = 1
        estadoFAQS2 = 2
        estadoFAQS3 = 1

    } else if (estadoFAQS2 === 2) {

        gsap.to(".pPregunta2", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp2", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".pPregunta1", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp1", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        gsap.to(".pPregunta3", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp3", {
            opacity: "0.3",
            rotate: "0deg"
        })

        estadoFAQS1 = 1
        estadoFAQS2 = 1
        estadoFAQS3 = 1
    }
}


function elegirFAQ3() {
    if (estadoFAQS3 === 1) {
       
        gsap.to(".pPregunta3", {
            height: "6vw",
            opacity: "1",
            marginTop: "0vw",
            marginBottom: "1vw",
            duration: 1,
        })
        gsap.to(".iconp3", {
            opacity: "1",
            rotate: "90deg"
        })
    
        //Modo normal
    
        gsap.to(".pPregunta1", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp1", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        gsap.to(".pPregunta2", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp2", {
            opacity: "0.3",
            rotate: "0deg"
        })

        estadoFAQS1 = 1
        estadoFAQS2 = 1
        estadoFAQS3 = 2

    } else if (estadoFAQS3 === 2) {

        gsap.to(".pPregunta3", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp3", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".pPregunta1", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp1", {
            opacity: "0.3",
            rotate: "0deg"
        })
    
        gsap.to(".pPregunta2", {
            height: "0vw",
            opacity: "0",
            marginTop: "2vw",
            marginBottom: "-2vw",
            duration: 1
        })
        gsap.to(".iconp2", {
            opacity: "0.3",
            rotate: "0deg"
        })

        estadoFAQS1 = 1
        estadoFAQS2 = 1
        estadoFAQS3 = 1
    }
}




var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
window.addEventListener ("scroll", function (){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){

        navbar.style.top="-5.8vw";
        navbar.style.opacity="0";
    } else {
        navbar.style.top="0";
        navbar.style.opacity="1";
    }
    lastScrollTop = scrollTop;
})

