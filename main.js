prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dCK5KDCgY/model.json',modelLoaded);


//define function modelLoaded
function modelLoaded() {
    console.log('Model Loaded!');
 }

//define function check() 
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
//define function gotResult(error, results)
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("results_emotion_name").innerHTML = results[0].label;
        document.getElementById("results_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "okay")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;;";
        }
        if(results[0].label == "victory")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "nice")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "hi")
        {
            document.getElementById("update_emoji").innerHTML = "&#128400;;";
        }
        if(results[0].label == "lose")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }

        if(results[1].label == "okay")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077;;";
        }
        if(results[1].label == "victory")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }
        if(results[1].label == "nice")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }
        if(results[1].label == "hi")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128400;;";
        }
        if(results[1].label == "lose")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }
    }
}