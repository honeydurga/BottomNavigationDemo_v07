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

    function ShowHideDiv() {
        /*var chkYes = document.getElementById("chkYes");
        var dvPassport = document.getElementById("dvPassport");
        dvPassport.style.display = chkYes.checked ? "block" : "none";*/
    }

    function buildQuiz_init() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        var i;
        var currentQuestion;
        var questionNumber;
        var i_max = 1; //myQuestions.length;
        for (i = 0; i < i_max; i++) {
            currentQuestion = myQuestions[i];
            questionNumber = i;
            //myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];


            answers.push(
                `<!-- Trigger the Modal -->
			                   <div class="relative">
												  <img id="myImg" src="./img/bdy_pt_v01.svg" alt="Snow" style="width:100%;max-width:300px" usemap="#imgmap">
												  <p class="absolute-text"  id="sel_text">Hey I am text on an Image.</p>
												</div>

							<map name="imgmap" id="Mapi">
								<area class = "modalheadcs" shape="rect" coords="0,0,300,140" href=""/>
								<area class = "modalsholcs" shape="rect" coords="0,140,300,260" href=""/>
								<area class = "modalhanlcs" shape="rect" coords="0,260,85,460" href=""/>
								<area class = "modalchescs" shape="rect" coords="85,260,215,380" href=""/>
								<area class = "modalstomcs" shape="rect" coords="85,380,215,460" href=""/>
								<area class = "modalhanrcs" shape="rect" coords="215,260,300,460" href=""/>
								<area class = "modallegscs" shape="rect" coords="0,460,300,800" href=""/>
							</map>
							<!-- The Modal -->
											<div id="myModal" class="modal">
												<div class="btn-group" name "modalradio1">
												  <label class="buttonmodal" ><input type="radio" id="a" name="modalradio" value="Head"/>Head</label>
													<label class="buttonmodal" ><input type="radio" id="b" name="modalradio" value="Eye"/>Eye</label>
													<label class="buttonmodal" ><input type="radio" id="c" name="modalradio" value="Nose"/>Nose</label>
													<label class="buttonmodal" ><input type="radio" id="d" name="modalradio" value="Mouth"/>Mouth</label>
													<label class="buttonmodal" ><input type="radio" id="e" name="modalradio" value="Ear"/>Ear</label>
													<label class="buttonmodal" ><input type="radio" id="f" name="modalradio" value="Neck"/>Neck</label>
													<label class="buttonmodal" ><input type="radio" id="g" name="modalradio" value="Nape"/>Nape</label>
												</div>
											</div>
											<div id="myModal2" class="modal">
												<div class="btn-group">
												  <label class="buttonmodal" ><input type="radio" id="h" name="modalradio" value="Shoulder"/>Shoulder</label>
													<label class="buttonmodal" ><input type="radio" id="i" name="modalradio" value="Elbow"/>Elbow</label>
													<label class="buttonmodal" ><input type="radio" id="s" name="modalradio" value="Breast"/>Breast</label>
													<label class="buttonmodal" ><input type="radio" id="t" name="modalradio" value="Chest"/>Chest</label>
												</div>
											</div>
											<div id="myModal3" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="j" name="modalradio" value="Wrist"/>Wrist</label>
													<label class="buttonmodal" ><input type="radio" id="k" name="modalradio" value="Hand"/>Hand</label>
													<label class="buttonmodal" ><input type="radio" id="l" name="modalradio" value="Finger"/>Finger</label>
												</div>
											</div>
											<div id="myModal4" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="w" name="modalradio" value="Waist"/>Waist</label>
													<label class="buttonmodal" ><input type="radio" id="x" name="modalradio" value="Side"/>Side</label>
												  </div>
											</div>
											<div id="myModal5" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="v" name="modalradio" value="hip"/>Hip</label>
													<label class="buttonmodal" ><input type="radio" id="y" name="modalradio" value="Ass_Anal"/>Ass Anal</label>
													<label class="buttonmodal" ><input type="radio" id="z" name="modalradio" value="Around_belly_and_thigh"/>Around belly and thigh</label>
													<label class="buttonmodal" ><input type="radio" id="A" name="modalradio" value="Reproductive_organs"/>Reproductive organs</label>
												</div>
											</div>
											<div id="myModal6" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="j" name="modalradio" value="Wrist"/>Wrist</label>
													<label class="buttonmodal" ><input type="radio" id="k" name="modalradio" value="Hand"/>Hand</label>
													<label class="buttonmodal" ><input type="radio" id="l" name="modalradio" value="Finger"/>Finger</label>
												</div>
											</div>
											<div id="myModal7" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="m" name="modalradio" value="Thigh"/>Thigh</label>
													<label class="buttonmodal" ><input type="radio" id="n" name="modalradio" value="Knee"/>Knee</label>
													<label class="buttonmodal" ><input type="radio" id="o" name="modalradio" value="Calf"/>Calf</label>
													<label class="buttonmodal" ><input type="radio" id="p" name="modalradio" value="Ankle"/>Ankle</label>
													<label class="buttonmodal" ><input type="radio" id="q" name="modalradio" value="Foot"/>Foot</label>
													<label class="buttonmodal" ><input type="radio" id="r" name="modalradio" value="Toes"/>Toes</label>
													<label class="buttonmodal" ><input type="radio" id="u" name="modalradio" value="Etc"/>Etc</label>
												</div>
											</div>`
            );


            if (mcq_opt[questionNumber] == 1) {
                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    // ...add an HTML radio button
                    answers.push(
                        `<label class="lab_fill">
							             <input class="lab_fill" type="checkbox" name="question${questionNumber}" value="${letter}" id="question${questionNumber}${letter}"/>
							              ${letter} :
							              ${currentQuestion.answers[letter]}
							           </label><hr>`
                    );
                }
            } else {
                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    /*if (i < 1) {
	      		console.log("letter: " + letter);
	      	}*/
                    // ...add an HTML radio button
                    //console.log(question${questionNumber});
                    var name_tag = `question${questionNumber}`;
                    answers.push(
                        `<!--<label class="lab_fill">
							             <input class="lab_fill" type="radio" name="question${questionNumber}" value="${letter}" id="question${questionNumber}${letter}"/>
							              ${letter} :
							              ${currentQuestion.answers[letter]}
							           </label>-->` //document.getElementById ("checkAllTopicCheckBoxes").addEventListener ("click", myFunction, false);
						                        //onclick="doSomething()"
						                        //onclick=$(this).css('background-color', '#000000')
						                        //onclick="document.getElementsByName("question${questionNumber}").style.backgroundColor = 'green'"

                    );
                }
            }

            // add this question and its answers to the output
            /*
            output.push(
                `<div class="slide">
				           <div class="question"> ${currentQuestion.question} </div>
			                   <!-- Trigger the Modal -->
										<img id="myImg" src="./img/bdy_pt_v01.svg" alt="Snow" style="width:100%;max-width:300px" usemap="#imgmap">
										<map name="imgmap" id="Mapi">
											<area class = "modalheadcs" shape="rect" coords="0,0,300,140" href=""/>
											<area class = "modalsholcs" shape="rect" coords="0,140,300,260" href=""/>
											<area class = "modalhanlcs" shape="rect" coords="0,260,85,460" href=""/>
											<area class = "modalchescs" shape="rect" coords="85,260,215,380" href=""/>
											<area class = "modalstomcs" shape="rect" coords="85,380,215,460" href=""/>
											<area class = "modalhanrcs" shape="rect" coords="215,260,300,460" href=""/>
											<area class = "modallegscs" shape="rect" coords="0,460,300,800" href=""/>
										</map>
										<!-- The Modal -->
										<div id="myModal" class="modal">
											<div class="btn-group">
											  <input class="buttonmodal" type="button" id="a" value="Head1">
											  <input class="buttonmodal" type="button" id="b" value="Eyes1">
											</div>
										</div>
										<div id="myModal2" class="modal">
										  <input class="buttonmodal" type="button" id="c" value="Head2">
										  <input class="buttonmodal" type="button" id="d" value="Eyes2">
										</div>
										<div id="myModal3" class="modal">
										  <input class="buttonmodal" type="button" id="e" value="Head3">
										  <input class="buttonmodal" type="button" id="f" value="Eyes3">
										</div>
										<div id="myModal4" class="modal">
										  <input class="buttonmodal" type="button" id="g" value="Head4">
										  <input class="buttonmodal" type="button" id="h" value="Eyes4">
										</div>
										<div id="myModal5" class="modal">
										  <input class="buttonmodal" type="button" id="i" value="Head5">
										  <input class="buttonmodal" type="button" id="j" value="Eyes5">
										</div>
										<div id="myModal6" class="modal">
										  <input class="buttonmodal" type="button" id="k" value="Head6">
										  <input class="buttonmodal" type="button" id="l" value="Eyes6">
										</div>
										<div id="myModal7" class="modal">
										  <input class="buttonmodal" type="button" id="m" value="Head7">
										  <input class="buttonmodal" type="button" id="n" value="Eyes7">
										</div>
				           <div class="answers"> ${answers.join("")} </div>
				         </div>`
            );*/

            output.push(
                `<div class="slide">
				           <div class="question"> ${currentQuestion.question} </div>
				           <!--<div class="itm_sel" id="item_selected">ITEM</div>-->
				           <div class="answers"> ${answers.join("")} </div>
				         </div>`
            );

            //});
        }

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");


        //event click
        var theParent = document.querySelector(".answers");
        //console.log("theParent");
        //console.log(theParent);

        for (var inx = 0; inx < theParent.children.length; inx++) {
            var childElement = theParent.children[inx];
		        //console.log("childElement");
		        //console.log(childElement);
            if (childElement.getAttribute('class') == "lab_fill") {
                console.log(childElement.getAttribute('class'));
                childElement.addEventListener('click', doSomething, false);
            }
        }
        //var modal_head = document.getElementsByClassName("modalheadcs");

        var span_1 = document.getElementsByClassName("modal");
        //span_1.addEventListener('click', modal_close, false);

        for (var inx_modal = 0; inx_modal < span_1.length; inx_modal++) {
            span_1[inx_modal].addEventListener('click', modal_close, false);
        }




        var modal_head = document.querySelectorAll('#Mapi area');
        //console.log("modal_head");
        //console.log(modal_head);
        modal_head_all_x = modal_head;

        for (var imap = 0; imap < modal_head.length; imap++) {
        	var modal_head_class = modal_head[imap].getAttribute('class');
            if (modal_head_class == "modalheadcs") {
            	modal_head[imap].addEventListener('click', modal_head_fun1, false);
            	//clickedid = 1;
            }
            if (modal_head_class == "modalsholcs") {
            	//clickedid = 2;
            	//console.log("modalsholcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun2, false);
            }
            if (modal_head_class == "modalhanlcs") {
            	//clickedid = 3;
            	//console.log("modalhanlcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun3, false);
            }
            if (modal_head_class == "modalchescs") {
            	//clickedid = 4;
            	//console.log("modalchescs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun4, false);
            }
            if (modal_head_class == "modalstomcs") {
            	//clickedid = 5;
            	//console.log("modalstomcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun5, false);
            }
            if (modal_head_class == "modalhanrcs") {
            	//clickedid = 6;
            	//console.log("modalhanrcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun6, false);
            }
            if (modal_head_class == "modallegscs") {
            	//clickedid = 7;
            	//console.log("modallegscs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun7, false);
            }
        }

        /*var num = null;
				var buttonmodal_all = document.getElementsByClassName("buttonmodal");
				var btn_all = buttonmodal_all.querySelector(".buttonmodal");
				console.log("btn_all");
				console.log(btn_all);*/
    //var clickedbtn = 0;

				/*var buttonmodal_all = document.querySelectorAll(".answers .modal .buttonmodal");
					        	console.log("buttonmodal_all");
					        	console.log(buttonmodal_all);
				var num = null;
				for (var inxbt = 0; inxbt < buttonmodal_all.length; inxbt++) {
            var childElementbt = buttonmodal_all[inxbt];
            	childElementbt.addEventListener('click', mod_btn(), false);

        }*/

        /*const answerContainers = quizContainer.querySelectorAll(".answers");
        console.log("answerContainers");
        console.log(answerContainers);
        var modal_all = answerContainers.querySelectorAll("modal");
        var buttonmodal_all = modal_all.querySelectorAll("buttonmodal");
        console.log("modal_all");
        console.log(modal_all);
        console.log("buttonmodal_all");
        console.log(buttonmodal_all);*/

        //modal_head.addEventListener('click', modal_head_fun, false);

        /*var xans_class = document.getElementsByClassName("answers");//document.getElementsByTagName("radio");//document.getElementsByClassName("lab_fill");//
      var xans = xans_class.getElementsByTagName("radio");//document.getElementsByClassName("lab_fill");//document.getElementsByTagName("radio");//
      console.log("Do something assigned, xans.length:"+xans.length);
      for (var i_xans = 0; i_xans < xans.length; i_xans++) {
			    xans[i].addEventListener('click', doSomething, false);
			    console.log("Do something assigned");
			}*/
    }
    var clickedid = 0;
    var clickedval = 0;

    function mod_btn() {
        //e.preventDefault();
        console.log("xtyxtyxtxy");
        var buttonmodal_allc = document.querySelectorAll(".answers .modal .buttonmodal");
        var buttonmodal_a = document.getElementById(".answers .modal .buttonmodal");

            //var radios = document.getElementsByName("modalradio1");
				    //console.log(radios);
				    /*for(var i = 0; i < radios.length; i++){
				        radios[i].onclick = function(){
				            document.getElementById('choiceLabel').innerText = this.value;
				        }
				    }*/


        //console.log(buttonmodal_allc);
        //console.log(document.querySelector('input[name="modalradio1"]:checked').value);
        /*for (var i_btn = 0; i_btn<buttonmodal_allc.length;i_btn++){
        	var btnid = buttonmodal_allc[i_btn].children[0];
        	console.log(btnid);
        	console.log(btnid.value);
        	//var btn_sel = document.getElementById(btnid).value;
        	//console.log(btn_sel);
        }*/
        /*var selectedbtn = buttonmodal_allc:checked;
					        	console.log("buttonmodal_all clickedidd");
					        	console.log(selectedbtn);*/
					        	//console.log(idd);
					/*
				// gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;
        topFunction();
        const answerContainer = answerContainers[currentSlide];
        const selector = `input[name=modalradio]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        console.log("selector");
        console.log(selector);*/
    }


    function modal_head_fun1(e) {
        e.preventDefault();
        clickedid = 1;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_11 = document.getElementById("myModal");
        var mod_12 = document.getElementById("myModal2");
        var mod_13 = document.getElementById("myModal3");
        var mod_14 = document.getElementById("myModal4");
        var mod_15 = document.getElementById("myModal5");
        var mod_16 = document.getElementById("myModal6");
        var mod_17 = document.getElementById("myModal7");
				mod_11.style.display = "block";
				mod_12.style.display = "none";
				mod_13.style.display = "none";
				mod_14.style.display = "none";
				mod_15.style.display = "none";
				mod_16.style.display = "none";
				mod_17.style.display = "none";
    }
    function modal_head_fun2(e) {
        e.preventDefault();
        clickedid = 2;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_21 = document.getElementById("myModal");
        var mod_22 = document.getElementById("myModal2");
        var mod_23 = document.getElementById("myModal3");
        var mod_24 = document.getElementById("myModal4");
        var mod_25 = document.getElementById("myModal5");
        var mod_26 = document.getElementById("myModal6");
        var mod_27 = document.getElementById("myModal7");
				mod_21.style.display = "none";
				mod_22.style.display = "block";
				mod_23.style.display = "none";
				mod_24.style.display = "none";
				mod_25.style.display = "none";
				mod_26.style.display = "none";
				mod_27.style.display = "none";
    }
    function modal_head_fun3(e) {
        e.preventDefault();
        clickedid = 3;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_31 = document.getElementById("myModal");
        var mod_32 = document.getElementById("myModal2");
        var mod_33 = document.getElementById("myModal3");
        var mod_34 = document.getElementById("myModal4");
        var mod_35 = document.getElementById("myModal5");
        var mod_36 = document.getElementById("myModal6");
        var mod_37 = document.getElementById("myModal7");
				mod_31.style.display = "none";
				mod_32.style.display = "none";
				mod_33.style.display = "block";
				mod_34.style.display = "none";
				mod_35.style.display = "none";
				mod_36.style.display = "none";
				mod_37.style.display = "none";
    }
    function modal_head_fun4(e) {
        e.preventDefault();
        clickedid = 4;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_41 = document.getElementById("myModal");
        var mod_42 = document.getElementById("myModal2");
        var mod_43 = document.getElementById("myModal3");
        var mod_44 = document.getElementById("myModal4");
        var mod_45 = document.getElementById("myModal5");
        var mod_46 = document.getElementById("myModal6");
        var mod_47 = document.getElementById("myModal7");
				mod_41.style.display = "none";
				mod_42.style.display = "none";
				mod_43.style.display = "none";
				mod_44.style.display = "block";
				mod_45.style.display = "none";
				mod_46.style.display = "none";
				mod_47.style.display = "none";
    }
    function modal_head_fun5(e) {
        e.preventDefault();
        clickedid = 5;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_51 = document.getElementById("myModal");
        var mod_52 = document.getElementById("myModal2");
        var mod_53 = document.getElementById("myModal3");
        var mod_54 = document.getElementById("myModal4");
        var mod_55 = document.getElementById("myModal5");
        var mod_56 = document.getElementById("myModal6");
        var mod_57 = document.getElementById("myModal7");
				mod_51.style.display = "none";
				mod_52.style.display = "none";
				mod_53.style.display = "none";
				mod_54.style.display = "none";
				mod_55.style.display = "block";
				mod_56.style.display = "none";
				mod_57.style.display = "none";
    }
    function modal_head_fun6(e) {
        e.preventDefault();
        clickedid = 6;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_61 = document.getElementById("myModal");
        var mod_62 = document.getElementById("myModal2");
        var mod_63 = document.getElementById("myModal3");
        var mod_64 = document.getElementById("myModal4");
        var mod_65 = document.getElementById("myModal5");
        var mod_66 = document.getElementById("myModal6");
        var mod_67 = document.getElementById("myModal7");
				mod_61.style.display = "none";
				mod_62.style.display = "none";
				mod_63.style.display = "none";
				mod_64.style.display = "none";
				mod_65.style.display = "none";
				mod_66.style.display = "block";
				mod_67.style.display = "none";
    }
    function modal_head_fun7(e) {
        e.preventDefault();
        clickedid = 7;
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_71 = document.getElementById("myModal");
        var mod_72 = document.getElementById("myModal2");
        var mod_73 = document.getElementById("myModal3");
        var mod_74 = document.getElementById("myModal4");
        var mod_75 = document.getElementById("myModal5");
        var mod_76 = document.getElementById("myModal6");
        var mod_77 = document.getElementById("myModal7");
				mod_71.style.display = "none";
				mod_72.style.display = "none";
				mod_73.style.display = "none";
				mod_74.style.display = "none";
				mod_75.style.display = "none";
				mod_76.style.display = "none";
				mod_77.style.display = "block";
    }
    var user_button = "x";
    function modal_close(e) {
        e.preventDefault();
        clickedid = 0;
        window.onclick = function(event) {
        	if (event){
	        	//alert(event.target.classList)
	        	if (event.target.classList.contains('buttonmodal')){
        			var img_txt = document.getElementById("sel_text");//document.getElementsByClassName("absolute-text");
			        console.log("img_txt");
			        console.log(img_txt);
		        	console.log("event.target.classList")
		        	console.log(event.target.children[0].getAttribute("id"));
		        	console.log(event.target.children[0].getAttribute("value"));
		        	user_button = event.target.children[0].getAttribute("id");
		        	img_txt.innerHTML = "Selected Region: " + event.target.children[0].getAttribute("value");
		        	img_txt.style.display = "block";

		        }
	        }
    		}
        console.log("INSIDE FUNCTIO. CLICKED ID: " + clickedid);
        var mod_81 = document.getElementById("myModal");
        var mod_82 = document.getElementById("myModal2");
        var mod_83 = document.getElementById("myModal3");
        var mod_84 = document.getElementById("myModal4");
        var mod_85 = document.getElementById("myModal5");
        var mod_86 = document.getElementById("myModal6");
        var mod_87 = document.getElementById("myModal7");
				mod_81.style.display = "none";
				mod_82.style.display = "none";
				mod_83.style.display = "none";
				mod_84.style.display = "none";
				mod_85.style.display = "none";
				mod_86.style.display = "none";
				mod_87.style.display = "none";
				//console.log(event.target.classList);
    }
    var modal_head_all = document.querySelectorAll('#Mapi area');
    var modal_head_all_x;
    //console.log("modal_head_all_x");
    //console.log(modal_head_all_x);
    /*window.onclick = function(event) {
        //alert(event.target)
        //console.log(event.target.classList);
        //console.log("modal.style.display");
        //console.log(modal.style.display);
        if (!(
                (event.target.classList.contains('modal')) ||
                (event.target.classList.contains('modalheadcs')) ||
                (event.target.classList.contains('modalsholcs')) ||
                (event.target.classList.contains('modalhanlcs')) ||
                (event.target.classList.contains('modalchescs')) ||
                (event.target.classList.contains('modalstomcs')) ||
                (event.target.classList.contains('modalhanrcs')) ||
                (event.target.classList.contains('modallegscs')) ||
                (event.target.classList.contains('modal-content'))
            )) {
            	/*if ((event.target.classList.contains('modalheadcs'))){
            		clickedid = 1;
            	}
            	if ((event.target.classList.contains('modalsholcs'))){
            		clickedid = 2;
            	}
            	if ((event.target.classList.contains('modalhanlcs'))){
            		clickedid = 3;
            	}
            	if ((event.target.classList.contains('modalchescs'))){
            		clickedid = 4;
            	}
            	if ((event.target.classList.contains('modalstomcs'))){
            		clickedid = 5;
            	}
            	if ((event.target.classList.contains('modalhanrcs'))){
            		clickedid = 6;
            	}
            	if ((event.target.classList.contains('modallegscs'))){
            		clickedid = 7;
            	}*/
            /*console.log("outside Modal shape clicked + display style");
		        var mod_n1 = document.getElementById("myModal");
		        var mod_n2 = document.getElementById("myModal2");
		        var mod_n3 = document.getElementById("myModal3");
		        var mod_n4 = document.getElementById("myModal4");
		        var mod_n5 = document.getElementById("myModal5");
		        var mod_n6 = document.getElementById("myModal6");
		        var mod_n7 = document.getElementById("myModal7");
						mod_n1.style.display = "none";
						mod_n2.style.display = "none";
						mod_n3.style.display = "none";
						mod_n4.style.display = "none";
						mod_n5.style.display = "none";
						mod_n6.style.display = "none";
						mod_n7.style.display = "none";
            //console.log(modal.length);
            //modal.style.display = "none";
        }
    }*/

    function showTutorial(name) {
        console.log("Modaler shape clicked");
    }

    const fillRange = (start, end) => {
        return Array(end - start + 1).fill().map((item, index) => start + index);
    };
    var class_change_old = [];

    function doSomething(e) {
        /*var clickedItem = e.target.id;
        alert("Hello " + clickedItem);*/

        if (e.target !== e.currentTarget) {
            var clickedItem = e.target.id;
            //alert("Hello " + clickedItem);
        }
        e.stopPropagation();

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        /*var theParent = document.querySelector(".answers");
    //console.log(theParent);

    for (var inx = 0; inx < theParent.children.length; inx++) {
		    var childElement = theParent.children[inx];
		    //var mylabel = childElement.getElementsByTagName('hr');

		    if (childElement.getAttribute('class')){
		    	console.log(childElement.getAttribute('class'));
		    	childElement.setAttribute('class', "lab_fill");
		    	}
		    //mylabel.setAttribute('class', "lab_fill");
		}*/


        /*-------*/
        //class change

        var theParentn = quizContainer.querySelectorAll(".answers");
        //console.log(theParentn);

        //for (var inxn = 0; inxn < theParentn.length; inxn++) {
        var childElementn = theParentn[currentSlide];
        //console.log(childElementn);
        for (var inxna = 0; inxna < childElementn.children.length; inxna++) {
            var childElementna = childElementn.children[inxna];
            //console.log(childElementna);
            if (childElementna.getAttribute('class') == "lab_fill_t") {
                //console.log(childElementna.getAttribute('class'));
                childElementna.setAttribute('class', "lab_fill");
            }
        }
        //}
        /*------------*/

        // keep track of user's answers
        //let numCorrect = 0;
        //topFunction();

        // for each question...
        //myQuestions.forEach((currentQuestion, questionNumber) => {

        /*var use_id_old = document.getElementsByClassName("lab_fill_t").getAttribute('class');
        if (use_id_old.length >0){
        	console.log("use_id_oldx: " + use_id_old);
        	//use_id_old.className = use_id_old.className.replace("lab_fill_t", "");
        	//use_id_old.className = use_id_old.className.replace("lab_fill_t", "lab_fill");
        	}*/

        /*if (class_change_old.length >0){
      	console.log("use_id_oldx: " + class_change_old.length);
      	var class_change_old_pop = class_change_old.pop;
      	class_change_old_pop.className = class_change_old_pop.className.replace("lab_fill_t", "lab_fill");
      	//use_id_old.className = use_id_old.className.replace("lab_fill_t", "");
      	//use_id_old.className = use_id_old.className.replace("lab_fill_t", "lab_fill");
      	}*/

        // find selected answer
        const answerContainer = answerContainers[currentSlide];
        const selector = `input[name=question${currentSlide}]:checked`;
        //const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (mcq_opt[que_list_f[currentSlide]] > 0) {
            const userAnswertyu = (answerContainer.querySelectorAll(selector) || {}).value;
            var textinputs = answerContainer.querySelectorAll('input[type=checkbox]:checked');
            console.log(selector);
            console.log("textinputs");
            console.log(textinputs);
            console.log(textinputs.length);
            for (var tinp_i = 0; tinp_i < textinputs.length; tinp_i++) {
                console.log("tinp_i.val()");
                console.log(textinputs[tinp_i].getAttribute('id'));

                var usr_idx = textinputs[tinp_i].getAttribute('id'); //(answerContainer.querySelector(selector) || {}).getAttribute('id');//`question${usr_val}`;
                var usr_idxx = document.getElementById(usr_idx).parentElement;
                usr_idxx.className = usr_idxx.className.replace("lab_fill", "lab_fill_t");
                class_change_old.push(usr_idxx);
            }
            console.log("currentSlide: " + currentSlide + " mcq_opt[currentSlide]: " + mcq_opt[que_list_f[currentSlide]] + " userAnswertyu: " + userAnswertyu);

        } else {
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            var usr_val = letterValue(userAnswer);
            var usr_idx = (answerContainer.querySelector(selector) || {}).getAttribute('id'); //`question${usr_val}`;
            var usr_idxx = document.getElementById(usr_idx).parentElement;
            usr_idxx.className = usr_idxx.className.replace("lab_fill", "lab_fill_t");
            class_change_old.push(usr_idxx);
        }

        /*console.log("currentSlide " + currentSlide
    							+ " mcq_opt[currentSlide] " + mcq_opt[que_list_f[currentSlide]]);*/

        /*console.log("que_list_f");
        console.log(que_list_f);
        console.log("que_list_f[currentSlide]");
        console.log(que_list_f[currentSlide]);
        console.log("que_list_f[currentSlide]");
        console.log(que_list_f[currentSlide]);
        console.log("userAnswer");
        console.log(userAnswer);*/

        /* class change

        var usr_val = letterValue(userAnswer);
        var usr_idx = (answerContainer.querySelector(selector) || {}).getAttribute('id');//`question${usr_val}`;
        var usr_idxx = document.getElementById(usr_idx).parentElement;
        usr_idxx.className = usr_idxx.className.replace("lab_fill", "lab_fill_t");
        class_change_old.push(usr_idxx);*/

        //document.getElementById(usr_idx).parentElement.addClass("lab_fill_t");
        //document.getElementById(usr_idx).style.backgroundColor = 'green';
        //var usr_idx_dom = document.getElementsByName(`question${usr_val}`);
        //const userAnswerId = (`input[name=question${currentSlide}]:checked`).attr('id');
        //questionNumber = currentSlide;
        //currentQuestion = myQuestions[que_list_f[currentSlide]];
        //alert("Option Selected: " + userAnswer);
        //console.log("Option Selected usr_idx: " + usr_idxx);
        /*var ty = document.getElementsByName(userAnswer);
      console.log(ty);
        for (var ity=0; ity<selector.length; ity++){
			   console.log("selector[" + ity + "].value" + selector[ity].Id);
			  }*/



    }

    //var i_max_int = 0;
    //var i_min_int = 0;
    var que_list_f = [];
    var mcq_opt_f = [];

    function buildQuiz_forloop() {
        // we'll need a place to store the HTML output
        const output = [];

        var i_max_int = parseInt(i_max[init_que - 1], 10);
        var i_min_int = parseInt(i_min[init_que - 1], 10);
        var que_list = [0, init_que, que_map.indexOf("32"), que_map.indexOf("33")]; //Y308
        //var mcq_list = [0, init_que, que_map.indexOf("32"), que_map.indexOf("33")];
        /*alert ("i_max_int: " + i_max_int +
        	"i_min_int: " + i_min_int
        );*/

        for (var i = i_min_int; i <= i_max_int; i++) {
            que_list.push(i);
        }
        que_list.push(que_map.indexOf("Y308"));
        que_list.push(myQuestions.length - 1);

        que_list_f = que_list;
        /*console.log("**********" );
        que_list_f.forEach((item, index) => {
          console.log("que_list_f[" + index + "]: " + item);
        });*/



        // for each question...
        var i;
        var currentQuestion;
        var questionNumber;
        var i_max_list = que_list_f.length; //1;//myQuestions.length;
        for (i = 0; i < i_max_list; i++) {
            currentQuestion = myQuestions[que_list_f[i]];
            questionNumber = i;
            //myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];


            if (mcq_opt[que_list_f[questionNumber]] == 1) {
                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    // ...add an HTML radio button
                    answers.push(
                        `<label class="lab_fill">
							             <input class="lab_fill" type="checkbox" name="question${questionNumber}" value="${letter}" id="question${questionNumber}${letter}"/>
							              ${letter} :
							              ${currentQuestion.answers[letter]}
							           </label><hr>`
                    );
                }
            } else {
            	if (i > 0){
                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    /*if (i < 1) {
						      		console.log("letter: " + letter);
						      	}*/
                    // ...add an HTML radio button
                    answers.push(
                        `<label class="lab_fill">
							             <input class="lab_fill" type="radio" name="question${questionNumber}" value="${letter}" id="question${questionNumber}${letter}"/>
							              ${letter} :
							              ${currentQuestion.answers[letter]}
							           </label><hr>`
                    );
                }
              }
            }

            // add this question and its answers to the output
            if (i == 0){
	            output.push(
	                `<div class="slide">
					           <div class="question"> ${currentQuestion.question} </div>
											<!--<div class="itm_sel" id="item_selected">ITEM</div>-->
			                   <!-- Trigger the Modal -->
			                   <div class="relative">
												  <img id="myImg" src="./img/bdy_pt_v01.svg" alt="Snow" style="width:100%;max-width:300px" usemap="#imgmap">
												  <p class="absolute-text" id="sel_text">Hey I am text on an Image.</p>
												</div>


											<map name="imgmap" id="Mapi">
												<area class = "modalheadcs" shape="rect" coords="0,0,300,140" href=""/>
												<area class = "modalsholcs" shape="rect" coords="0,140,300,260" href=""/>
												<area class = "modalhanlcs" shape="rect" coords="0,260,85,460" href=""/>
												<area class = "modalchescs" shape="rect" coords="85,260,215,380" href=""/>
												<area class = "modalstomcs" shape="rect" coords="85,380,215,460" href=""/>
												<area class = "modalhanrcs" shape="rect" coords="215,260,300,460" href=""/>
												<area class = "modallegscs" shape="rect" coords="0,460,300,800" href=""/>
											</map>
											<!-- The Modal -->
											<div id="myModal" class="modal">
												<div class="btn-group" name "modalradio1">
												  <label class="buttonmodal" ><input type="radio" id="a" name="modalradio" value="Head"/>Head</label>
													<label class="buttonmodal" ><input type="radio" id="b" name="modalradio" value="Eye"/>Eye</label>
													<label class="buttonmodal" ><input type="radio" id="c" name="modalradio" value="Nose"/>Nose</label>
													<label class="buttonmodal" ><input type="radio" id="d" name="modalradio" value="Mouth"/>Mouth</label>
													<label class="buttonmodal" ><input type="radio" id="e" name="modalradio" value="Ear"/>Ear</label>
													<label class="buttonmodal" ><input type="radio" id="f" name="modalradio" value="Neck"/>Neck</label>
													<label class="buttonmodal" ><input type="radio" id="g" name="modalradio" value="Nape"/>Nape</label>
												</div>
											</div>
											<div id="myModal2" class="modal">
												<div class="btn-group">
												  <label class="buttonmodal" ><input type="radio" id="h" name="modalradio" value="Shoulder"/>Shoulder</label>
													<label class="buttonmodal" ><input type="radio" id="i" name="modalradio" value="Elbow"/>Elbow</label>
													<label class="buttonmodal" ><input type="radio" id="s" name="modalradio" value="Breast"/>Breast</label>
													<label class="buttonmodal" ><input type="radio" id="t" name="modalradio" value="Chest"/>Chest</label>
												</div>
											</div>
											<div id="myModal3" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="j" name="modalradio" value="Wrist"/>Wrist</label>
													<label class="buttonmodal" ><input type="radio" id="k" name="modalradio" value="Hand"/>Hand</label>
													<label class="buttonmodal" ><input type="radio" id="l" name="modalradio" value="Finger"/>Finger</label>
												</div>
											</div>
											<div id="myModal4" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="w" name="modalradio" value="Waist"/>Waist</label>
													<label class="buttonmodal" ><input type="radio" id="x" name="modalradio" value="Side"/>Side</label>
												  </div>
											</div>
											<div id="myModal5" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="v" name="modalradio" value="hip"/>Hip</label>
													<label class="buttonmodal" ><input type="radio" id="y" name="modalradio" value="Ass_Anal"/>Ass Anal</label>
													<label class="buttonmodal" ><input type="radio" id="z" name="modalradio" value="Around_belly_and_thigh"/>Around belly and thigh</label>
													<label class="buttonmodal" ><input type="radio" id="A" name="modalradio" value="Reproductive_organs"/>Reproductive organs</label>
												</div>
											</div>
											<div id="myModal6" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="j" name="modalradio" value="Wrist"/>Wrist</label>
													<label class="buttonmodal" ><input type="radio" id="k" name="modalradio" value="Hand"/>Hand</label>
													<label class="buttonmodal" ><input type="radio" id="l" name="modalradio" value="Finger"/>Finger</label>
												</div>
											</div>
											<div id="myModal7" class="modal">
												<div class="btn-group">
													<label class="buttonmodal" ><input type="radio" id="m" name="modalradio" value="Thigh"/>Thigh</label>
													<label class="buttonmodal" ><input type="radio" id="n" name="modalradio" value="Knee"/>Knee</label>
													<label class="buttonmodal" ><input type="radio" id="o" name="modalradio" value="Calf"/>Calf</label>
													<label class="buttonmodal" ><input type="radio" id="p" name="modalradio" value="Ankle"/>Ankle</label>
													<label class="buttonmodal" ><input type="radio" id="q" name="modalradio" value="Foot"/>Foot</label>
													<label class="buttonmodal" ><input type="radio" id="r" name="modalradio" value="Toes"/>Toes</label>
													<label class="buttonmodal" ><input type="radio" id="u" name="modalradio" value="Etc"/>Etc</label>
												</div>
											</div>
					           <div class="answers"> ${answers.join("")} </div>
					         </div>`
	            );

            }else{
	            output.push(
	                `<div class="slide">
					           <div class="question"> ${currentQuestion.question} </div>
					           <div class="answers"> ${answers.join("")} </div>
					         </div>`
	            );
            }

            //});
        }

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");



    }


    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];


            if (mcq_opt[questionNumber] == 1) {
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
            } else {
                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    // ...add an HTML radio button
                    answers.push(
                        `<label>
	             <input type="radio" name="question${questionNumber}" value="${letter}">
	              ${letter} :
	              ${currentQuestion.answers[letter]}
	           </label>`
                    );
                }
            }
            /*
            // and for each available answer...
            for (letter in currentQuestion.answers) {
              // ...add an HTML radio button
              answers.push(
                `<label>
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                 </label>`
              );
            }*/


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

    function letterValue(str) {
        var anum = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6,
            g: 7,
            h: 8,
            i: 9,
            j: 10,
            k: 11,
            l: 12,
            m: 13,
            n: 14,
            o: 15,
            p: 16,
            q: 17,
            r: 18,
            s: 19,
            t: 20,
            u: 21,
            v: 22,
            w: 23,
            x: 24,
            y: 25,
            z: 26
        }
        if (str.length == 1) return anum[str] || ' ';
        return str.split('').map(letterValue);
    }
    var init_que = 0;



    function showans_init_img() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
        //span_1.addEventListener('click', modal_close, false);

        /*for (var inx_modal = 0; inx_modal < span_1.length; inx_modal++) {
            span_1[inx_modal].addEventListener('click', modal_close, false);
        }*/

        // keep track of user's answers
        let numCorrect = 0;
        topFunction();

        // for each question...
        //myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[currentSlide];

        /*alert ("currentSlide : " + currentSlide +
    	" answerContainer.length" + answerContainer.length
    	); */
        const selector = `input[name=question${currentSlide}]:checked`;
        const userAnswer = user_button;//(answerContainer.querySelector(selector) || {}).value;
        questionNumber = currentSlide;
        /*alert("currentSlide: " + currentSlide
              + " que_list_f[currentSlide]: " + que_list_f[currentSlide]);*/
        currentQuestion = myQuestions[[currentSlide]];
        //alert("Option Selected: " + userAnswer);
        //
        ind_val = letterValue(userAnswer);
        init_que = ind_val;
        leap_value = currentQuestion.leap[userAnswer];
        leap_idx = que_list_f.indexOf(que_map.indexOf(leap_value)); //
        /*alert ("questionNumber : " + questionNumber
    	+ " User answer: " + ind_val
    	+ " leap: " + leap_value
    	+ " Leap Index: " + leap_idx
    	+ " mcq_opt: " + mcq_opt[currentSlide]
    	); */
        ind_val = leap_idx;
        buildQuiz_forloop();
        //buildQuiz();
        /*-------*/
        //event click
        var theParentn = quizContainer.querySelectorAll(".answers");
        //console.log(theParentn);

        for (var inxn = 0; inxn < theParentn.length; inxn++) {
            var childElementn = theParentn[inxn];
            //console.log(childElementn);
            for (var inxna = 0; inxna < childElementn.children.length; inxna++) {
                var childElementna = childElementn.children[inxna];
                //console.log(childElementna);
                childElementna.addEventListener('click', doSomething, false);
            }
        }

        //var modal_head = document.getElementsByClassName("modalheadcs");

        var span_1 = document.getElementsByClassName("modal");
        //span_1.addEventListener('click', modal_close, false);

        for (var inx_modal = 0; inx_modal < span_1.length; inx_modal++) {
            span_1[inx_modal].addEventListener('click', modal_close, false);
        }




        var modal_head = document.querySelectorAll('#Mapi area');
        //console.log("modal_head");
        //console.log(modal_head);
        modal_head_all_x = modal_head;

        for (var imap = 0; imap < modal_head.length; imap++) {
        	var modal_head_class = modal_head[imap].getAttribute('class');
            if (modal_head_class == "modalheadcs") {
            	modal_head[imap].addEventListener('click', modal_head_fun1, false);
            	//clickedid = 1;
            }
            if (modal_head_class == "modalsholcs") {
            	//clickedid = 2;
            	//console.log("modalsholcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun2, false);
            }
            if (modal_head_class == "modalhanlcs") {
            	//clickedid = 3;
            	//console.log("modalhanlcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun3, false);
            }
            if (modal_head_class == "modalchescs") {
            	//clickedid = 4;
            	//console.log("modalchescs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun4, false);
            }
            if (modal_head_class == "modalstomcs") {
            	//clickedid = 5;
            	//console.log("modalstomcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun5, false);
            }
            if (modal_head_class == "modalhanrcs") {
            	//clickedid = 6;
            	//console.log("modalhanrcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun6, false);
            }
            if (modal_head_class == "modallegscs") {
            	//clickedid = 7;
            	//console.log("modallegscs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun7, false);
            }
        }




        /*------------*/


        slides = document.querySelectorAll(".slide");
        ind_val = 1;

        /*alert ("init questionNumber : " + questionNumber
    	+ " User answer: " + ind_val
    	+ " leap: " + leap_value
    	+ " Leap Index: " + leap_idx
    	+ " mcq_opt: " + mcq_opt[currentSlide]
    	+ " slides.length" + slides.length
    	); */

        val_map("9");
    }


    function showans_init() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
        //span_1.addEventListener('click', modal_close, false);

        /*for (var inx_modal = 0; inx_modal < span_1.length; inx_modal++) {
            span_1[inx_modal].addEventListener('click', modal_close, false);
        }*/

        // keep track of user's answers
        let numCorrect = 0;
        topFunction();

        // for each question...
        //myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[currentSlide];

        /*alert ("currentSlide : " + currentSlide +
    	" answerContainer.length" + answerContainer.length
    	); */
        const selector = `input[name=question${currentSlide}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        questionNumber = currentSlide;
        /*alert("currentSlide: " + currentSlide
              + " que_list_f[currentSlide]: " + que_list_f[currentSlide]);*/
        currentQuestion = myQuestions[[currentSlide]];
        //alert("Option Selected: " + userAnswer);
        //
        ind_val = letterValue(userAnswer);
        init_que = ind_val;
        leap_value = currentQuestion.leap[userAnswer];
        leap_idx = que_list_f.indexOf(que_map.indexOf(leap_value)); //
        /*alert ("questionNumber : " + questionNumber
    	+ " User answer: " + ind_val
    	+ " leap: " + leap_value
    	+ " Leap Index: " + leap_idx
    	+ " mcq_opt: " + mcq_opt[currentSlide]
    	); */
        ind_val = leap_idx;
        buildQuiz_forloop();
        //buildQuiz();
        /*-------*/
        //event click
        var theParentn = quizContainer.querySelectorAll(".answers");
        //console.log(theParentn);

        for (var inxn = 0; inxn < theParentn.length; inxn++) {
            var childElementn = theParentn[inxn];
            //console.log(childElementn);
            for (var inxna = 0; inxna < childElementn.children.length; inxna++) {
                var childElementna = childElementn.children[inxna];
                //console.log(childElementna);
                childElementna.addEventListener('click', doSomething, false);
            }
        }

        //var modal_head = document.getElementsByClassName("modalheadcs");

        var span_1 = document.getElementsByClassName("modal");
        //span_1.addEventListener('click', modal_close, false);

        for (var inx_modal = 0; inx_modal < span_1.length; inx_modal++) {
            span_1[inx_modal].addEventListener('click', modal_close, false);
        }




        var modal_head = document.querySelectorAll('#Mapi area');
        //console.log("modal_head");
        //console.log(modal_head);
        modal_head_all_x = modal_head;

        for (var imap = 0; imap < modal_head.length; imap++) {
        	var modal_head_class = modal_head[imap].getAttribute('class');
            if (modal_head_class == "modalheadcs") {
            	modal_head[imap].addEventListener('click', modal_head_fun1, false);
            	//clickedid = 1;
            }
            if (modal_head_class == "modalsholcs") {
            	//clickedid = 2;
            	//console.log("modalsholcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun2, false);
            }
            if (modal_head_class == "modalhanlcs") {
            	//clickedid = 3;
            	//console.log("modalhanlcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun3, false);
            }
            if (modal_head_class == "modalchescs") {
            	//clickedid = 4;
            	//console.log("modalchescs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun4, false);
            }
            if (modal_head_class == "modalstomcs") {
            	//clickedid = 5;
            	//console.log("modalstomcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun5, false);
            }
            if (modal_head_class == "modalhanrcs") {
            	//clickedid = 6;
            	//console.log("modalhanrcs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun6, false);
            }
            if (modal_head_class == "modallegscs") {
            	//clickedid = 7;
            	//console.log("modallegscs: " + clickedid);
            	modal_head[imap].addEventListener('click', modal_head_fun7, false);
            }
        }




        /*------------*/


        slides = document.querySelectorAll(".slide");
        ind_val = 1;

        /*alert ("init questionNumber : " + questionNumber
    	+ " User answer: " + ind_val
    	+ " leap: " + leap_value
    	+ " Leap Index: " + leap_idx
    	+ " mcq_opt: " + mcq_opt[currentSlide]
    	+ " slides.length" + slides.length
    	); */

        val_map("9");
    }

    function showans() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;
        topFunction();

        // for each question...
        //myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[currentSlide];
        const selector = `input[name=question${currentSlide}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        questionNumber = currentSlide;
        currentQuestion = myQuestions[que_list_f[currentSlide]];
        //alert("Option Selected: " + userAnswer);
        //
        ind_val = letterValue(userAnswer);
        leap_value = currentQuestion.leap[userAnswer];
        leap_idx = que_list_f.indexOf(que_map.indexOf(leap_value));
        /*alert ("questionNumber : " + questionNumber
    	+ " User answer: " + ind_val
    	+ " leap: " + leap_value
    	+ " Leap Index: " + leap_idx
    	+ " mcq_opt: " + mcq_opt[currentSlide]
    	); */
        ind_val = leap_idx;

        val_map("9");
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        var elmntr = document.getElementById("quiz_cont");
        elmntr.scrollTo(0, 0);
    }

    function val_map(tag_code) {
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

        var persons = ["A500", "A501", "A502", "A503", "A504"];
        /*console.log("++++++++++++" );
        slide_stack.forEach((item, index) => {
          console.log("index[" + index + "]: " + item);
        });*/

    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;
        slide_stack.push(currentSlide);
        topFunction();

        if (currentSlide === 0) {
            nextButton.style.display = "none";
        } else if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "inline-block";
        }

        if (currentSlide === 0) {
            nextiButton.style.display = "inline-block";
        } else {
            nextiButton.style.display = "none";
        }

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === 0) {
            //nextButton.style.display = "none";
            submitButton.style.display = "none";
            //alert("Current slide: " + currentSlide)
        } else if (currentSlide === slides.length - 1) {
            //nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            //nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        //showans_init();
        showans();
        //alert ("OMG ind_val: " + ind_val);
        //showSlide(currentSlide + 1);
        //showSlide(currentSlide + ind_val);
        showSlide(currentSlide + ind_val - currentSlide);
    }


    function showNextSlide_init() {
        //showans_init();
        showans_init_img();
        //showans();
        //alert ("OMG ind_val: " + ind_val);
        //showSlide(currentSlide + 1);
        //showSlide(currentSlide + ind_val);
        showSlide(currentSlide + ind_val - currentSlide);
        topFunction();
    }

    function showPreviousSlide() {

        var indx = slide_stack.pop();
        indx = slide_stack.pop();
        //showSlide(currentSlide - 1);  	
        /*console.log("++++++++++++" );
        console.log("indx: " + indx);
        slide_stack.forEach((item, index) => {
          console.log("index[" + index + "]: " + item);
        });*/

        showSlide(currentSlide + indx - currentSlide);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    var slide_stack = ["X"];

    // display quiz right away
    buildQuiz_init();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const nextiButton = document.getElementById("nexti");
    //const slides = document.querySelectorAll(".slide");
    var slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    /*console.log("++++++++++++" );
    que_map.forEach((item, index) => {
      console.log("index[" + index + "]: " + item);
    });*/




    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    nextiButton.addEventListener("click", showNextSlide_init);
})();