(function() {
	/*
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      leap: {
        a: "100",
        b: "200",
        c: "300"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      leap: {
        a: "400",
        b: "500",
        c: "600"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      leap: {
        a: "700",
        b: "800",
        c: "900",
        d: "901"
      },
      correctAnswer: "d"
    },
    {
      question: "What is 10/2?",
      answers: {
        a: "2",
        b: "5",
        c: "3"
      },
      leap: {
        a: "1000",
        b: "1100",
        c: "1200"
      },
      correctAnswer: "b"
    },
    {
      question: "What is 10/5?",
      answers: {
        a: "6",
        b: "5",
        c: "3",
        d: "2"
      },
      leap: {
        a: "1300",
        b: "1400",
        c: "1500",
        d: "1600"
      },
      correctAnswer: "d"
    },
    {
      question: "What is 30/5?",
      answers: {
        a: "5",
        b: "6",
        c: "3",
        d: "2",
        f: "20"
      },
      leap: {
        a: "1700",
        b: "1800",
        c: "1900",
        d: "2000"
      },
      correctAnswer: "b"
    }
  ];*/
  //import { myQuestions } from './index_ques.js'

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      
      

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="checkbox" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }
  
   /*--------------------------*/
  var ind_val = 1;
  var questionNumber = 0;
  var leap_value = 0;
  var leap_idx = 0;
  
  function letterValue(str){
	    var anum={
	        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
	        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
	        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
	    }
	    if(str.length== 1) return anum[str] || ' ';
	    return str.split('').map(letterValue);
	}

  function showans() {
  	
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    //myQuestions.forEach((currentQuestion, questionNumber) => {
    
      // find selected answer
      const answerContainer = answerContainers[currentSlide];
      const selector = `input[name=question${currentSlide}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      questionNumber = currentSlide;
      currentQuestion = myQuestions[currentSlide];
      //alert("Option Selected: " + userAnswer);
    	//
    	ind_val = letterValue(userAnswer);
    	leap_value = currentQuestion.leap[userAnswer];
    	leap_idx = que_map.indexOf(leap_value);
    	alert ("questionNumber : " + questionNumber 
    	+ " User answer: " + ind_val 
    	+ " leap: " + leap_value
    	+ " Leap Index: " + leap_idx
    	); 
    	ind_val = leap_idx;

    val_map("9");
  }
  
  function val_map(tag_code){
  	var len = que_map.length;
  	var tag_index = que_map.indexOf(tag_code);
  	//alert("tag_index: " + tag_index);
  	
  	}
    
  /*--------------------------*/

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    
    var persons = [ "A500", "A501", "A502", "A503", "A504"		]		;
    console.log("++++++++++++" );
    slide_stack.forEach((item, index) => {
      console.log("index[" + index + "]: " + item);
    });
    
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    slide_stack.push(currentSlide);
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
  	showans();
  	//alert ("OMG ind_val: " + ind_val);
    //showSlide(currentSlide + 1);
    //showSlide(currentSlide + ind_val);
    showSlide(currentSlide + ind_val - currentSlide);
  }

  function showPreviousSlide() {
    
    var indx = slide_stack.pop();
    indx = slide_stack.pop();
    //showSlide(currentSlide - 1);  	
    console.log("++++++++++++" );
    console.log("indx: " + indx);
    slide_stack.forEach((item, index) => {
      console.log("index[" + index + "]: " + item);
    });
    
    showSlide(currentSlide + indx - currentSlide);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  
  var slide_stack = ["X"];

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();