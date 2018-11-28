// JQ

$(document).ready(function () {
    
    // AJUSTES DE ALTURA DE LA PAGINA
    var alto = $(window).height();

    ajusteAltura();

    function ajusteAltura(){
        $(".seccion").css({"height" : alto +"px"});
        $(".seccionMin").css({"min-height" : alto +"px"});
        
    }

    //  FUNCIONES DEL MENU 
    $(".botonMenu").click(function(){
        $(".navegacion").fadeToggle("slow")
        $(".navegacion").css({"display" : "flex",});
    })



    //  FUNCIONES DE LA SECCION PROYECTOS
    // UNO
    $(".proyecto1").hover(
        function () {
            // over
            $(".contenedorProyectos").addClass("back1")  
    }, 
        function () {
            // out
            $(".contenedorProyectos").removeClass("back1")  
        }
    );

    // DOS
    $(".proyecto2").hover(
        function () {
            // over
            $(".contenedorProyectos").toggleClass("back2")  
    }, 
        function () {
            // out
            $(".contenedorProyectos").toggleClass("back2") 
        }
    );

    // TRES
    $(".proyecto3").hover(
        function () {
            // over
            $(".contenedorProyectos").toggleClass("back3")  
        }, 
        function () {
            // out
            $(".contenedorProyectos").toggleClass("back3")     
        }
        );
        //  FIn FUNCIONES DE LA SECCION PROYECTOS

        
        
        // funciones de la pagina de PRoyectos 
        




        
    });