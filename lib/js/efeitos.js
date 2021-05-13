
    $(document).ready(function(){
        
        $(".profilephoto").owlCarousel({
            loop:true,
            margin: 12,
            //nav:true,
            //navText: ["Anterior", "Próximo"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
           
        });
    });
    $("#btn-bars").on("click", function(){

        $("header").toggleClass("open-menu")

    });
    $(".btn-close, #menu-mobile-mask").on("click", function(){

        $("header").removeClass("open-menu")

    });
    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });