/*
This script contains a few guitar tunings, each string is set to a frequency
to be played. This is very primartive, a better idea would be to assign a
frequency to each note across a keyboard, and then the tuning retrieved the
note using a MIDI standard or identifier (TODO)
 */

function changeTuning(){
    var tuning = document.getElementById("tune-select").value;

    switch(tuning){
        case 'standard':
            // document.getElementById("active-tuning").innerHTML = "Standard";
            document.getElementById("string1").innerHTML = "E";
            string1 = 164.8;
            document.getElementById("string2").innerHTML = "A";
            string2 = 220.0;
            document.getElementById("string3").innerHTML = "D";
            string3 = 293.7;
            document.getElementById("string4").innerHTML = "G";
            string4 = 392.0;
            document.getElementById("string5").innerHTML = "B";
            string5 = 493.9;
            document.getElementById("string6").innerHTML = "E";
            string6 = 659.3;
            break;
        case 'drop-d':
            // document.getElementById("active-tuning").innerHTML = "Drop-D";
            document.getElementById("string1").innerHTML = "D";
            string1 = 146.8;
            document.getElementById("string2").innerHTML = "A";
            string2 = 220.0;
            document.getElementById("string3").innerHTML = "D";
            string3 = 293.7;
            document.getElementById("string4").innerHTML = "G";
            string4 = 392.0;
            document.getElementById("string5").innerHTML = "B";
            string5 = 493.9;
            document.getElementById("string6").innerHTML = "E";
            string6 = 659.3;
            break;
        case 'drop-c':
            // document.getElementById("active-tuning").innerHTML = "Drop-C";
            document.getElementById("string1").innerHTML = "C";
            string1 = 130.8;
            document.getElementById("string2").innerHTML = "G";
            string2 = 196.0;
            document.getElementById("string3").innerHTML = "C";
            string3 = 261.6;
            document.getElementById("string4").innerHTML = "F";
            string4 = 349.2;
            document.getElementById("string5").innerHTML = "A";
            string5 = 440.0;
            document.getElementById("string6").innerHTML = "D";
            string6 = 587.3;
            break;
        case 'half-step-down':
            // document.getElementById("active-tuning").innerHTML = "Half Step Down";
            document.getElementById("string1").innerHTML = "Eb";
            string1 = 155.6;
            document.getElementById("string2").innerHTML = "Ab";
            string2 = 207.7;
            document.getElementById("string3").innerHTML = "Db";
            string3 = 277.2;
            document.getElementById("string4").innerHTML = "Gb";
            string4 = 370.0;
            document.getElementById("string5").innerHTML = "Bb";
            string5 = 466.2;
            document.getElementById("string6").innerHTML = "Eb";
            string6 = 622.3;
            break;
        case 'open-c':
            // document.getElementById("active-tuning").innerHTML = "Open C";
            document.getElementById("string1").innerHTML = "C";
            string1 = 130.8;
            document.getElementById("string2").innerHTML = "G";
            string2 = 196.0;
            document.getElementById("string3").innerHTML = "C";
            string3 = 261.6;
            document.getElementById("string4").innerHTML = "G";
            string4 = 392.0;
            document.getElementById("string5").innerHTML = "C";
            string5 = 523.3;
            document.getElementById("string6").innerHTML = "E";
            string6 = 659.3;
            break;
    }
}
