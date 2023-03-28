const animado = document.querySelector(".animado");

window.addEventListener("scroll",()=>{
    let pantalla = window.innerHeight / 
    0.4;
    
    let ubicacionObjeto = animado.
    getBoundingClientRect().top
    console.log(pantalla,
        ubicacionObjeto);
        if(ubicacionObjeto <= pantalla){
            animado.classList.add
            ("animado-active")
        }else{
            animado.classList.remove
            ("animado-active");
        }
    })

    const animado2 = document.querySelector(".animado2");

    window.addEventListener("scroll",()=>{
        let pantalla = window.innerHeight / 
        0.4;
        
        let ubicacionObjeto = animado2.
        getBoundingClientRect().top
        console.log(pantalla,
            ubicacionObjeto);
            if(ubicacionObjeto <= pantalla){
                animado2.classList.add
                ("animado2-active")
            }else{
                animado2.classList.remove
                ("animado2-active");
            }
        })
