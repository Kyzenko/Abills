
$(document).ready(function () {
    
    var name = $(".inputName"),
        adress = $(".inputAdress"),
        speed = $(".inputSpeed"),
        color = $(".inputColor"),
        this_;
    
    $(".fas").click(function () {
        this_ = $(this).closest(".card");
        name.val(this_.find(".name").text());
        adress.val(this_.find(".adress").text());
        speed.val(this_.find(".speed").text());
        $(".modal").modal("show");
    });

    $(".save").click(function () {
        this_.find(".name").text(name.val());
        this_.find(".adress").text(adress.val());
        this_.find(".speed").text(speed.val());
        this_.find(".color").css('background-color', color.val());
        $(".modal").modal("hide");
    })
});