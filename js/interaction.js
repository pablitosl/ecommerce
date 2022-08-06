$(document).ready(function() {
    //Al abrir el menu, su width pasa a 550px, y el fondo del main se blurea
    $("#openMenu").on("click", function(){
        if(window.matchMedia("(max-width: 576px)").matches){
            $("#mySidenav").css("width", "100%");
        }else if(window.matchMedia("(max-width: 768px)").matches){
            $("#mySidenav").css("width", "420");
        } else{
            $("#mySidenav").css("width", "550px");
        }
        $("main").css("filter", "blur(3px)");
    })
    
    //Al cerrar el menu, su width pasa a 0px, y le saco el blur al fondo
    $("#closeMenu").on("click", function(){
        $("#mySidenav").css("width", "0px");
        $("main").css("filter", "blur(0px)");
    })

});