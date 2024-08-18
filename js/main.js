gsap.from('#splashscreen', {
    duration: 1,
    display: "flex",
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

function funcionPantallaPequena() {
    gsap.to("#container1",{
        position: "relative",
        pointerEvents: "none",
        marginLeft: "5vw",
        padding: "8vw",
        height: "110vw",
        width: "60vw",
        borderRadius: "6vw",
        border: "2vw solid #ffffff",
        zIndex: "20",
        opacity: "1",
        filter: "blur(0vw)",
    })
    gsap.to("#container1 .iconCont",{
        position: "absolute",
        width: "5vw",
        height: "5vw",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(../images/casosdeuso/iconoQhronus.webp)",
        top: "28vw",
        opacity: "0",
        borderRadius: "0.6vw",
        opacity: "0",
    })
    gsap.to("#container1 h3",{
        fontSize: "9vw",
        fontWeight: "var(--rethink-medium)",
        opacity: "1",
    })
    gsap.to("#container1 p",{
        marginTop: "2vw",
        fontSize: "4vw",
        width: "100%",
        opacity: "1",
    })
    gsap.to("#container1 .img1",{
        backgroundSize: "contain",
        width: "40vw",
        height: "70vw",
        marginLeft: "0vw",
        left: "0px",
        opacity: "1",
    })
    gsap.to("#container1 .img2",{
        left: "40vw",
        top: "70vw",
        marginLeft: "0vw",
        height: "70vw",
        width: "40vw",
        opacity: "1",
        backgroundSize: "contain",
    })
    gsap.to("#container2 .fondo",{
        marginLeft: "-8vw",
    })
    gsap.to("#container1 button",{
        marginTop: "6vw",
        height: "10vw",
        width: "35vw",
        borderRadius: "2vw",
        opacity: "1",
    })
    gsap.to("#container1 button p",{
        width: "100%",
        fontSize: "3vw",
        marginTop: "0vw",
        opacity: "1",
    })
    gsap.to("#container1 button .sig",{
        height: "3vw",
        width: "8vw",
        opacity: "1",
    })
    gsap.to("#container2",{
        backgroundPosition: "0vw 0%",
        backgroundSize: "cover",
        backgroundImage: "url(../images/casosdeuso/fondobranding.webp)",
        border: "2vw solid rgb(255, 255, 255)",
        borderRadius: "6vw",
        width: "60vw",
        height: "110vw",
        padding: "8vw",
        marginLeft: "5vw",
        position: "relative",
        pointerEvents: "none",
        zIndex: "19",
        opacity: "1",
        filter: "blur(0vw)",
    })
    
    gsap.to("#container2 .iconCont",{
        top: "108vw",
        left: "5vw",
        width: "12vw",
        height: "12vw",
        opacity: "1",
    })
    gsap.to("#container2 .text",{
        top: "107vw",
        left: "22vw",
        opacity: "1",
    })
    gsap.to("#container2 h2",{
        fontSize: "6vw",
        opacity: "1",
    })
    gsap.to("#container2 p",{
        fontSize: "4vw",
        opacity: "1",
    })
    gsap.to("#container3",{
        backgroundPosition: "0vw 0%",
        backgroundSize: "cover",
        backgroundImage: "url(../images/casosdeuso/fondoapps.webp)",
        border: "2vw solid rgb(255, 255, 255)",
        borderRadius: "6vw",
        width: "60vw",
        height: "110vw",
        padding: "8vw",
        marginLeft: "5vw",
        position: "relative",
        pointerEvents: "none",
        zIndex: "19",
        opacity: "1",
        filter: "blur(0vw)",
    })
    gsap.to("#container3 .iconCont",{
        top: "108vw",
        left: "5vw",
        width: "12vw",
        height: "12vw",
        opacity: "1",
    })
    gsap.to("#container3 .text",{
        top: "107vw",
        left: "22vw",
        opacity: "1",
    })
    gsap.to("#container3 h2",{
        fontSize: "6vw",
        opacity: "1",
    })
    gsap.to("#container3 p",{
        fontSize: "4vw",
        opacity: "1",
    })
    gsap.to("#container4",{
        pointerEvents: "none",
        position: "relative",
        filter: "blur(0vw)",
        opacity: "1",
        marginLeft: "5vw",
        marginRight: "5vw",
        padding: "8vw",
        height: "110vw",
        width: "60vw",
        borderRadius: "6vw",
        border: "2vw solid #ffffff",
        backgroundImage: "url(../images/casosdeuso/fondoweb.webp)",
        backgroundSize: "cover",
        backgroundPosition: "-0vw 0vw",
        opacity: "1",
        filter: "blur(0vw)",
    })
    gsap.to("#container4 .iconCont",{
        top: "108vw",
        left: "5vw",
        width: "12vw",
        height: "12vw",
        opacity: "1",
    })
    gsap.to("container4 .fondo", {
        marginLeft: "-8vw",
        backgroundPosition: "center left",
    })
    gsap.to("#container4 .text",{
        top: "107vw",
        left: "22vw",
        opacity: "1",
    })
    gsap.to("#container4 h2",{
        fontSize: "6vw",
        opacity: "1",
    })
    gsap.to("#container4 p",{
        fontSize: "4vw",
        opacity: "1",
    })
    

    // SCROLL TRIGGERS PTMMMMMM AHHH
}

function funcionPantallaGrande() {
    gsap.to("#container1",{
        position: "relative",
        marginBottom: "0",
        marginLeft: "21vw",
        zIndex: "20",
        height: "28vw",
        width: "36vw",
        padding: "4vw",
        marginBottom: "0",
        backgroundColor: "#ffffff",
        borderRadius: "3vw",
        border: "0.7vw solid #ffffff",
        boxShadow: "0px 0.8vw 3vw 0px rgba(0, 0, 0, 0.144)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        cursor: "auto",
        pointerEvents: "all",
        duration: 1 
    })
    gsap.to("#container1 button",{
        background: "linear-gradient(0deg, #9BB6FB 7.35%, #7097F9 76.41%)",
        marginTop: "4.8vw",
        marginLeft: "0vw",
        opacity: "1",
        border: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "3.5vw",
        width: "14vw",
        borderRadius: "0.8vw",
        transition: "1s",
        cursor: "pointer",
        opacity: "1",
    })
    gsap.to("#container1 button p",{
        width: "100%",
        fontSize: "1.3vw",
        fontFamily: "var(--rethink)",
        color: "#fff",
        opacity: "1",
    })
    gsap.to("#container1 button .sig",{
        backgroundImage: "url(../images/chevron-right-solid-white.svg)",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "1.2vw",
        width: "1.2vw",
        marginRight: "1.5vw",
        opacity: "1",
    })
    gsap.to("#container1 h3",{
        fontSize: "4vw",
        position: "relative",
        textAlign: "left",
    })
    gsap.to("#container1 p",{
        marginTop: "0.5vw",
        fontFamily: "var(--lato)",
        fontWeight: "var(--lato-light)",
        fontSize: "1.5vw",
        width: "26vw",
        opacity: "1",
    })
    gsap.to("#container1 .img1",{
        position: "absolute",
        top: "0",
        margin: "-4vw",
        height: "25vw",
        width: "12vw",
        backgroundImage: "url(../images/fondo1-container1.webp)",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    })
    gsap.to("#container1 .img2",{
        position: "absolute",
        top: "50%",
        left: "70%",        
        height: "20vw",
        width: "20vw",
        backgroundImage: "url(../images/fondo2-container1.webp)",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat", 
    })
    gsap.to("#container1 .iconCont",{
        position: "absolute",
        width: "5vw",
        height: "5vw",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(../images/casosdeuso/iconoQhronus.webp)",
        top: "28vw",
        opacity: "0",
        borderRadius: "0.6vw",
    })

    //CONTAINER 2

    gsap.to("#container2",{
        position: "relative",
        zIndex: "19",
        height: "32vw",
        padding: "0vw",
        width: "7vw",
        marginLeft: "2vw",
        backgroundColor: "#ffffff",
        borderRadius: "2.5vw",
        border: "0.7vw solid #ffffff",
        boxShadow: "0px 0.8vw 3vw 0px rgba(0, 0, 0, 0.08)",
        backgroundImage: "url(../images/casosdeuso/fondo1branding.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        cursor: "pointer",
        pointerEvents: "all",
    })

    gsap.to("#container2 .text",{
        top: "28vw",
        left: "11vw",
    })

    gsap.to("#container2 .text h2",{
        fontFamily: "var(--rethink)",
        fontSize: "2.5vw",
    })

    gsap.to("#container2 .text p",{
        fontFamily: "var(--lato)",
        fontSize: "1.5vw",
        fontWeight: "var(--lato-light)",
    })

    gsap.to("#container2 .fondo",{
        position: "absolute",
        marginTop: "-4vw",
        marginLeft: "-4vw",
        height: "100%",
        width: "100%",
        backgroundImage: "url(../images/casosdeuso/fondobranding.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#fff",
        opacity: "0",
    })
    gsap.to("#container2 .iconCont",{
        position: "absolute",
        width: "5vw",
        height: "5vw",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(../images/casosdeuso/iconoBranding.svg)",
        top: "25.5vw",
        left: "0.9vw",
        opacity: "1",
        borderRadius: "0.6vw",
    })

    //CONTAINER 3

    gsap.to("#container3" ,{
        position: "relative",
        padding: "0vw",
        zIndex: "18",
        height: "28vw",
        width: "7vw",
        marginLeft: "-3vw",
        backgroundColor: "#ffffff",
        borderRadius: "2.5vw",
        border: "0.7vw solid #ffffff",
        boxShadow: "0px 0.8vw 3vw 0px rgba(0, 0, 0, 0.08)",
        backgroundImage: "url(../images/casosdeuso/fondo1apps.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        filter: "blur(0.1vw)",
        cursor: "pointer",
        pointerEvents: "all",
    })
    gsap.to("#container3 .fondo",{
        position: "absolute",
        marginTop: "-4vw",
        marginLeft: "-4vw",
        height: "100%",
        width: "100%",
        backgroundImage: "url(../images/casosdeuso/fondoapps.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#fff",
        opacity: "0",
    })
    gsap.to("#container3 .iconCont",{
        position: "absolute",
        width: "5vw",
        height: "5vw",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(../images/casosdeuso/iconoApps.svg)",
        top: "28vw",
        top: "25.5vw",
        top: "22vw",
        left: "0.9vw",
        opacity: "1",
        borderRadius: "0.6vw",
    })
    gsap.to("#container3 .text",{
        top: "28vw",
        left: "11vw",
    })

    gsap.to("#container3 .text h2",{
        fontFamily: "var(--rethink)",
        fontSize: "2.5vw",
    })

    gsap.to("#container3 .text p",{
        fontFamily: "var(--lato)",
        fontSize: "1.5vw",
        fontWeight: "var(--lato-light)",
    })
    //CONTAINER 4

    gsap.to("#container4" ,{
        position: "relative",
        padding: "0vw",
        zIndex: "17",
        height: "24vw",
        width: "7vw",
        marginLeft: "-4vw",
        backgroundColor: "#ffffff",
        borderRadius: "2.5vw",
        border: "0.7vw solid #ffffff",
        boxShadow: "0px 0.8vw 3vw 0px rgba(0, 0, 0, 0.08)",
        backgroundImage: "url(../images/casosdeuso/fondo1web.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        filter: "blur(0.2vw)",
        opacity: "0.6",
        cursor: "pointer",
        pointerEvents: "all",
    })

    gsap.to("#container4 .iconCont",{
        position: "absolute",
        width: "5vw",
        height: "5vw",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(../images/casosdeuso/iconoWebs.webp)",
        top: "28vw",
        top: "25.5vw",
        top: "22vw",
        top: "18vw",
        left: "0.9vw",
        opacity: "1",
        borderRadius: "0.6vw",
    })
    gsap.to("#container4 .fondo",{
        position: "absolute",
        marginTop: "-4vw",
        marginLeft: "-4vw",
        height: "100%",
        width: "100%",
        backgroundImage: "url(../images/casosdeuso/fondoweb.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#fff",
        opacity: "0",
    })
    gsap.to("#container4 .text",{
        top: "28vw",
        left: "11vw",
    })

    gsap.to("#container4 .text h2",{
        fontFamily: "var(--rethink)",
        fontSize: "2.5vw",
    })

    gsap.to("#container4 .text p",{
        fontFamily: "var(--lato)",
        fontSize: "1.5vw",
        fontWeight: "var(--lato-light)",
    })

    intro = 1;
}

// Configura el media query para detectar pantallas menores a 550px

// Define un listener que ejecutará la función cuando se cumpla el media query
mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
        funcionPantallaPequena();
    } else if (!event.matches) {
        funcionPantallaGrande();
    }
});

// Verifica si la pantalla ya es menor a 550px cuando se carga la página
if (mediaQuery.matches) {
    funcionPantallaPequena();
}

function handleScreenChange(event) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
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


    } else if (!event.matches) {
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
    const mediaQuery = window.matchMedia("(max-width: 550px)");
    if (mediaQuery.matches) {
        gsap.to("#navmen",{
            left: "0vw",
            opacity: "1",
            display: "flex",
            duration: .8
        }) 
    }   
}

function hidemenu(){
    const mediaQuery = window.matchMedia("(max-width: 550px)");
    if (mediaQuery.matches) {
        gsap.to("#navmen",{
            left: "101vw",
            display: "none",
            opacity: "0",
            duration: .8
        })
    }  
    
}

//CASOS DE USO

let intro = 1;


function casosdeuso0(){
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && intro === 1) {
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

    } else if(mediaQueryMayor.matches && intro !== 1) {

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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoServicio1 === 1) {
        gsap.to(".list #servicio1 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
            marginBottom: "1vw",
            duration: 1,
        })
        gsap.to(".list #servicio1 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio2 h3",{
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMayor.matches && estadoServicio1 === 2) {

        gsap.to(".list #servicio1 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    } else if (mediaQueryMenor.matches && estadoServicio1 === 1){
        gsap.to(".list #servicio1 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio1 p", {
            height: "18vw",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    } else if (mediaQueryMenor.matches && estadoServicio1 === 2) {

        gsap.to(".list #servicio1 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoServicio2 === 1){
        gsap.to(".list #servicio2 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio2 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio2 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMayor.matches && estadoServicio2 !== 1) {

        gsap.to(".list #servicio2 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    } else if (mediaQueryMenor.matches && estadoServicio2 === 1){
        gsap.to(".list #servicio2 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio2 p", {
            height: "18vw",
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
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMenor.matches && estadoServicio2 !== 1) {

        gsap.to(".list #servicio2 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoServicio3 === 1){
        gsap.to(".list #servicio3 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio3 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio3 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMayor.matches && estadoServicio3 === 2) {

        gsap.to(".list #servicio3 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    } else if (mediaQueryMenor.matches && estadoServicio3 === 1){
        gsap.to(".list #servicio3 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio3 p", {
            height: "20vw",
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
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMenor.matches && estadoServicio3 === 2) {

        gsap.to(".list #servicio3 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoServicio4 === 1){
        gsap.to(".list #servicio4 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio4 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio4 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMayor.matches && estadoServicio4 === 2) {

        gsap.to(".list #servicio4 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    } else if (mediaQueryMenor.matches && estadoServicio4 === 1){
        gsap.to(".list #servicio4 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio4 p", {
            height: "18vw",
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
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMenor.matches && estadoServicio4 === 2) {

        gsap.to(".list #servicio4 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoServicio5 === 1){
        gsap.to(".list #servicio5 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio5 p", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
            marginBottom: "1vw",
            duration: 1,
        })
        
        gsap.to(".list #servicio5 .arrow", {
            opacity: "1",
            rotate: "0deg"
        })
    
        //Modo normal
    
        gsap.to(".list #servicio1 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMayor.matches && estadoServicio5 === 2) {

        gsap.to(".list #servicio5 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    } else if (mediaQueryMenor.matches && estadoServicio5 === 1){
        gsap.to(".list #servicio5 h3",{
            fontWeight: "600",
            color: "#080A1F",
            duration: 1
        })
        gsap.to(".list #servicio5 p", {
            height: "18vw",
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
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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

    } else if (mediaQueryMenor.matches && estadoServicio5 === 2) {

        gsap.to(".list #servicio5 h3",{
            fontWeight: "200",
            color: "#7F829C",
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
            fontWeight: "200",
            color: "#7F829C"
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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoFAQS1 === 1) {
       
        gsap.to(".pPregunta1", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
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

    } else if (mediaQueryMayor.matches && estadoFAQS1 === 2) {

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
    } else if (mediaQueryMenor.matches && estadoFAQS1 === 1) {
       
        gsap.to(".pPregunta1", {
            height: "18vw",
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

    } else if (mediaQueryMenor.matches && estadoFAQS1 === 2) {

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
    const mediaQueryMenor = window.matchMedia("(max-width: 550px)");
    const mediaQueryMayor = window.matchMedia("(min-width: 551px)");

    if (mediaQueryMayor.matches && estadoFAQS2 === 1) {
       
        gsap.to(".pPregunta2", {
            height: "6vw",
            opacity: "1",
            marginTop: "1vw",
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

    } else if (mediaQueryMayor.matches && estadoFAQS2 === 2) {

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
    } else if (mediaQueryMenor.matches && estadoFAQS2 === 1) {
       
        gsap.to(".pPregunta2", {
            height: "18vw",
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

    } else if (mediaQueryMayor.matches && estadoFAQS2 === 2) {

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
            marginTop: "1vw",
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


//INGLÉS

const translations = {
    "en": {
        "txtnav1": "Use Cases",
        "txtnav2": "About Us",
        "txtnav3": "Our Process",
        "menu-contacto": "Contact Us"
    },
    // Otros idiomas podrían agregarse aquí
};

// Detectar el idioma del navegador
const userLang = navigator.language || navigator.userLanguage;

// Si el idioma no es español, aplicar las traducciones
if (!userLang.startsWith('es')) {
    applyTranslations("en");
}

// Función para aplicar traducciones
function applyTranslations(lang) {
    const translation = translations[lang];
    document.getElementById("menu-casos").textContent = translation["menu-casos"];
    document.getElementById("menu-servicios").textContent = translation["menu-servicios"];
    document.getElementById("menu-proceso").textContent = translation["menu-proceso"];
    document.getElementById("menu-contacto").textContent = translation["menu-contacto"];
}