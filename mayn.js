Webcam.set({
    height: 275,
    width: 350,
    img_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach( '#camera');
function snap(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri +"'>";
    });
}
    console.log("ml5 version: ", ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4x0mVM9JY/model.json', modelLoaded);
    function modelLoaded(){
        console.log("Model Loaded !");
    }
    function check(){
        img = document.getElementById("captured_image");
        classifier.classify(img, theResult);
    }
    function theResult(error, result){
     if (error){
         console.error(error);
     } else {
         console.log(result);
         document.getElementById("object").innerHTML = result[0].label;
         document.getElementById("accuracy").innerHTML = result [0].confidence.toFixed(2);
     }
    }
    