var date=new Date()
var display_date="fecha"+date.toLocaleDateString()

//Cargar HTML DOM.
$(document).ready(function(){
    $("#display_date").html(display_date)
})

//Definir la variable para almacenar la emoción predecida.
var predicted_emotion

//HTML-->JavaScript--->Flask.
//Flask--->JavaScript--->HTML.

//Selector jQuery y la acción click.
$(function () {
    $("#predict_button").click(function () {
        //Llamada a AJAX 
var input_data={
    "text":$("#text").val()
}
        $.ajax({
            
            
              
                // Resultado recibido de Flask ----->JavaScript
                type:"POST",
                url:"/predict-emotion",
                data:JSON.stringify(input_data),
                dataType:"application/json",
                success:function(result){
                    predicted_emotion=result.data.predicted_emotion
                    emo_url=result.data.predicted_emotion_img_url
                    $("#prediction").html(predicted_emotion)
                    $("#prediction").css("display","block");

                    $("#emo_img_url").attr("src",emo_url);
                    $("#emo_img_url").css("display","block")
                },
                // Mostrar resultado usando JavaScript----->HTML
                
            
            //Función error 
                error:function(result){
                    alert(result.responseJSON.message)
                }
        });
    });
})

