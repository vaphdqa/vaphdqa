var browser = (function() {
    var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
    switch (true) {
        case test(/edg/i): return "Microsoft Edge";
        case test(/trident/i): return "Microsoft Internet Explorer";
        case test(/firefox|fxios/i): return "Mozilla Firefox";
        case test(/opr\//i): return "Opera";
        case test(/ucbrowser/i): return "UC Browser";
        case test(/samsungbrowser/i): return "Samsung Browser";
        case test(/chrome|chromium|crios/i): return "Google Chrome";
        case test(/safari/i): return "Apple Safari";
        default: return "Other";
    }
})();
console.log(browser);

if(browser != "Google Chrome")alert("This voice assistnat demonstration is only compatible with the Chrome Browser. You will not be able to interact with it. Please open in Chrome.");

var answerOptions;
var questionContainer;
var synthesis = window.speechSynthesis;
var Asking = document.querySelector('button.button');
var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

function listen() {
    Asking.disabled = true;
    Asking.textContent = 'Listening...';

    recognition.lang = 'en-US';
  	recognition.interimResults = false;
  	recognition.maxAlternatives = 1;

  	recognition.start();

  	recognition.onresult = function(event) {
      var speechResult = event.results[0][0].transcript.toLowerCase();
      console.log(event.results[0][0].transcript.toLowerCase());
      respond(speechResult);
  	}

    recognition.onspeechend = function() {
	    recognition.stop();
	    Asking.textContent = 'Click to ask Voice Assistant';
	    Asking.disabled = false;
    }

    recognition.onerror = function(event) {
	    Asking.textContent = 'Click to ask Voice Assistant';
	    Asking.disabled = false;
	    if (browser != "Google Chrome") {
			speak ("Error. Try opening in Google Chrome.");
		}
	    else {
			speak("Recognition error. Please try again.");
		}
    }
}

function speak(utterance){
  var utterThis = new SpeechSynthesisUtterance(utterance);
  var voiceList = synthesis.getVoices();
  var i;
  for (i = 0; i < voiceList.length; i++) {
  	if(voiceList[i].name=="Google US English"){
      console.log(voiceList[i].name);
      break;
    }
  }

  utterThis.voice = voiceList[i];

  utterThis.onend = function (event) {
    console.log("Finished speaking.");
  }

  utterThis.onerror = function (event) {
    console.log("Error: "+event.name);
  }

  utterThis.lang = 'en-US';
  synthesis.speak(utterThis);
  console.log("Speaking started:"+utterance);
}

function respond(question){
  var response_style;
  var radioButtons = document.getElementsByName("response_style");
  var dataTopicSteps = question.includes("step") ? true : false
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            response_style = i;
        }
    }
    if ((question.includes('current') || question.includes('fast') || question.includes('slow') || question.includes('now') || question.includes('moment')) && ((question.includes('step')) || question.includes('heart'))) task = 0;
    else if (question.includes('daily') && question.includes('average') && (question.includes('last week') || question.includes('past week')) && ((question.includes('step')) || question.includes('heart'))) task = 1;
    else if ((question.includes('different') || question.includes ('change') || question.includes('changed') || question.includes('compare')) && (question.includes('average') || question.includes('usual') || question.includes ('normal') || question.includes('norm') || question.includes('typical')) && ((question.includes('step')) || question.includes('heart'))) task = 2;
    else if ((question.includes('day') || question.includes('weekday')) && (question.includes('highest') || question.includes ('higher') || question.includes('elevate') || question.includes('elevated') || question.includes('peak') || question.includes('max') || question.includes('maximum')) && ((question.includes('step')) || question.includes('heart'))) task = 3;
    else if (((question.includes('morning') && question.includes('afternoon') && question.includes('evening')) || question.includes('time')) && (question.includes('lower') || question.includes('trend') || question.includes('trends') || question.includes('different') || question.includes('difference')) && ((question.includes('step')) || question.includes('heart'))) task = 4;
    else if (((question.includes('long') || question.includes ('time') || question.includes('duration') || question.includes('minutes') || question.includes('timeframe')) && (question.includes('breathing') || question.includes('breathe')) && question.includes('heart')) || ((question.includes('far') || question.includes('distance') || question.includes('miles') || question.includes('mileage') || question.includes('kilometers') || question.includes('kilometres')) && (question.includes('walk') || question.includes('walking') || question.includes('cover')) && question.includes('steps'))) task = 5;

    else if ((question.includes('higher') || question.includes('more')) && (question.includes('usual') || question.includes('normal') || question.includes('average')) && ((question.includes('step')) || question.includes('heart'))) task = 6;
    else if ((question.includes('hour') || question.includes('sixty minutes') || question.includes('60 minutes')) && ((question.includes('step')) || question.includes('steps') || question.includes('heart'))) task = 7;
    else if ((question.includes('average') || question.includes('usual') || question.includes('normal') || question.includes('differs') || question.includes('differences') || question.includes('typical') || question.includes('trend')) && (question.includes('weekend') || question.includes('weekends')) && (question.includes('weekday') || question.includes('weekdays') || question.includes('week')) && ((question.includes('step')) || question.includes('heart'))) task = 8;
    else if ((question.includes('workout') || question.includes('workouts') || question.includes('exercises') || question.includes('activities')) && (question.includes('result') || question.includes('results') || question.includes('resulting') || question.includes('reach') || question.includes('reaching') || question.includes('reaches') || question.includes('push') || question.includes('pushes') || question.includes('pushing') || question.includes('get') || question.includes('gets') || question.includes('getting') || question.includes('bring') || question.includes('brings') || question.includes('bringing')) && ((question.includes('step')) || question.includes('heart'))) task = 9;
    else task = -1;

  switch (task) {
	case 0: // CS
      switch(response_style) {
        case 0:
          dataTopicSteps ? speak("7,350 steps") : speak("68 beats per minute");
          break;
        case 1:
          dataTopicSteps ? speak("Current step count, 7,350 steps") : speak("Current heart rate, 68 beats per minute");
          break;
        case 2:
          dataTopicSteps ? speak("Your step count is currently at 7,350 steps") : speak("Your heart rate is currently at 68 beats per minute");
          break;
      }
      break;
    case 1: // HT
      switch(response_style) {
        case 0:
          dataTopicSteps ? speak("10,270 steps") : speak("78 beats per minute");
          break;
        case 1:
          dataTopicSteps ? speak("Average daily step count, 10,270 steps") : speak("Average daily heart rate, 78 beats per minute");
          break;
        case 2:
          dataTopicSteps ? speak("Your daily average step count last week was 10,270 steps") : speak("Your daily average heart rate last week was 78 beats per minute");
          break;
      }
      break;
    case 2: // CC
      switch(response_style) {
        case 0:
          speak("Higher than average");
          break;
        case 1:
          dataTopicSteps ? speak("Current step count, higher than average") : speak("Current heart rate, higher than average");
          break;
        case 2:
          dataTopicSteps ? speak("Your current step count is higher than your average step count") : speak("Your current heart rate is higher than your average heart rate");
          break;
      }
      break;
    case 3: // GP
      switch(response_style) {
        case 0:
          speak("Saturdays");
          break;
        case 1:
          dataTopicSteps ? speak("Highest step count, Saturdays") : speak("Highest heart rate, Saturdays");
          break;
        case 2:
          dataTopicSteps ? speak("Your step count is the highest on Saturdays") : speak("Your heart rate is the highest on Saturdays");
          break;
      }
      break;
    case 4: // CT
      switch(response_style) {
        case 0:
          dataTopicSteps ? speak("Afternoon") : speak("Evening");
          break;
        case 1:
          dataTopicSteps ? speak("Lowest step count, afternoon") : speak("Lowest heart rate, evening");
          break;
        case 2:
          dataTopicSteps ? speak("Your step count is the lowest in the afternoon") : speak("Your heart rate is the lowest in the evening");
          break;
      }
      break;
    case 5: // PP
      switch(response_style) {
        case 0:
          dataTopicSteps ? speak("2.5 kilometres") : speak("Two minutes");
          break;
        case 1:
          dataTopicSteps ? speak("To reach 10,000 steps, 2.5 kilometres") : speak("To reach your resting heart rate, two minutes");
          break;
        case 2:
          dataTopicSteps ? speak("To reach 10,000 steps, you should walk a distance of 2.5 kilometres") : speak("To reach your resting heart rate, you should control your breathing for two minutes");
          break;
      }
      break;
    case 6: // B
      switch(response_style) {
        case 0:
          speak("Yes");
          break;
        case 1:
          dataTopicSteps ? speak("Yes, step count higher than normal") : speak("Yes, heart rate higher than normal");
          break;
        case 2:
          dataTopicSteps ? speak("Yes, your current step count is higher than your normal step count") : speak("Yes, your current heart rate is higher than your normal heart rate");
          break;
      }     
      break;
    case 7: // V
        switch(response_style) {
        case 0:
          dataTopicSteps ? speak("1,375 steps") : speak("71 beats per minute");
          break;
        case 1:
          dataTopicSteps ? speak("Step count last hour, 1,375 steps") : speak("Average heart rate last hour, 71 beats per minute");
          break;
        case 2:
          dataTopicSteps ? speak("In the last hour, your step count was 1,375 steps") : speak("In the last hour, your average heart rate was 71 beats per minute");
          break;
      }  
      break;
    case 8: // R
      switch(response_style) {
        case 0:
          dataTopicSteps ? speak("9,820 steps compared to 10,680 steps") : speak("85 beats per minute compared to 76 beats per minute");
          break;
        case 1:
          dataTopicSteps ? speak("Weekdays, 9,820 steps. Weekends, 10,680 steps") : speak("Weekdays, 85 beats per minute. Weekends, 76 beats per minute");
          break;
        case 2:
          dataTopicSteps ? speak("Your average step count during the week is 9,820 steps. While on the weekends, your average step count is 10,680 steps") : speak("Your average heart rate during the week is 85 beats per minute. While on the weekends, your average heart rate is 76 beats per minute");
          break;
      }  
      break;
      case 9: // O
      switch(response_style) {
        case 0:
          dataTopicSteps ? speak("Indoor running, outdoor running, and hiking") : speak("Indoor running, outdoor cycling, and rowing");
          break;
        case 1:
          dataTopicSteps ? speak("Workouts reaching 2,000 steps, indoor running, outdoor running, and hiking") : speak("Workouts reaching zone five, indoor running, outdoor cycling, and rowing");
          break;
        case 2:
          dataTopicSteps ? speak("In the past, you have reached 2,000 steps during indoor running, outdoor running, and hiking workouts") : speak("In the past, indoor running, outdoor cycling, and rowing workouts have brought your heart rate into zone five");
          break;
      }  
      break;
    default:
      speak("Sorry, I could not understand your question. Please try again, following the prompt shown above.")
  }
}

Asking.addEventListener('click', listen);
