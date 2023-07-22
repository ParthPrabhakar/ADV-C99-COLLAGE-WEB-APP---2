var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function Start(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML=content;
    if(content=="take my selfie")
    {
        speak();
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata="Taking your selfie in 5 seconds";
    utterThis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    },5000);
}
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src="+data_uri+">";
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("capture_image").src;
    link.href=image;
    link.click();
}