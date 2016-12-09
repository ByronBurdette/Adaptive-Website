$(function()
{
    $("#sliderVisual").slider
    ({
        value: 0,
        min: 2,
        max: 100,
        step: 1,
        
        slide: function(event, ui)
        {
            $("#firstborns").val(ui.value + " firstborn children");
        }
    });
    
    $("#firstborns").val("move the slider to sacrifice firstborns");
});