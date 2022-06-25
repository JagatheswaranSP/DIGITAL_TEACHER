//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    window.location.href='../../../java.html';
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let que_limit = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.href='../../../java.html';
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_limit < ((questions.length-1)/2)){ //if question count is less than total question length
        que_limit++;
        que_count = Math.floor(Math.random() * questions.length);
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }
    var TopperArray     = ["EXTJAHA", "EXTUEPH", "EXTngHB", "EXT7Sdx", "EXT77DC", "EXTu3iy", "EXT98Jg", "EXTJK0V", "EXTpBBh", "EXT2GS4", "EXTcDxm", "EXTngEM", "EXTmihl", "EXT45tF", "EXTNmFo", "EXTSStN", "EXTnuVV", "EXT29N9", "EXTVMsX", "EXTXqyn", "EXT9nAe", "EXTBh6b", "EXTcBSe", "EXTDDEQ", "EXT267v", "EXTZ2ch", "EXTgKnU", "EXTCqWk", "EXTzyPg", "EXTjWk5", "EXTgEoD", "EXTsUI2", "EXTU9oQ", "EXTMhcU", "EXTUCjm", "EXToifA", "EXTVY1k", "EXTybNC", "EXTn7AM", "EXT3B2y", "EXTMYAS", "EXTaRza", "EXTosLi", "EXTj2K8", "EXTsxRQ", "EXTZChT", "EXTnVHn", "EXTon2Q", "EXTXE5e", "EXTiPxP"];
    var AverageArray    = ["EXAOURe", "EXAj2q0", "EXAHhkT", "EXAaCTT", "EXAKdbv", "EXASzIR", "EXAXPmz", "EXAfXQ7", "EXAVVUC", "EXAKjFi", "EXA4luK", "EXAZwaI", "EXAQux9", "EXA52gW", "EXALmrZ", "EXAqrZH", "EXArdem", "EXAoxd8", "EXAsumU", "EXAU8Ft", "EXAY3pM", "EXA5Vdb", "EXAeCmn", "EXAf35S", "EXAeBYk", "EXA4cDM", "EXAp3mO", "EXA6FNT", "EXAIFjx", "EXAMoOU", "EXAK1VO", "EXAnxcE", "EXAUuPJ", "EXAUACn", "EXAhYD9", "EXAw3zh", "EXAokIE", "EXAQLBO", "EXApBXB", "EXA8Cwj", "EXAVgG0", "EXAhqvw", "EXAYhcW", "EXAeLBE", "EXAb1Jx", "EXAYNb3", "EXAe8XX", "EXAEHwi", "EXA7kMM", "EXA9R9l"];
    var FailArray       = ["EXFaKtT", "EXFmO5A", "EXFLgNM", "EXF6pNv", "EXFsmvZ", "EXFAShV", "EXFt5JQ", "EXFWLQy", "EXFzpX6", "EXFVogJ", "EXF0Ekh", "EXFZloH", "EXFWPMA", "EXFyiaW", "EXFfq4J", "EXFrn6T", "EXFIfDJ", "EXFpDol", "EXFqtQI", "EXFVIEU", "EXFM4Th", "EXFJYn4", "EXFLuxb", "EXF9Dqv", "EXF4FjC", "EXF7HO9", "EXFg3sc", "EXFHF1L", "EXFsU2m", "EXFi6ZZ", "EXFgqNc", "EXFVrIo", "EXFiQyC", "EXF3U4D", "EXFbrnK", "EXFdwaA", "EXFG6V2", "EXFTOZV", "EXFOMM5", "EXFqqny", "EXFNtsH", "EXFWjmL", "EXFfQzD", "EXFKUy1", "EXF4rfB", "EXFjtPK", "EXFKKpw", "EXFljOP", "EXFlzfi", "EXFKS8O"];
    function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore  > 25){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        
        var TopperResult = getRandomItem(TopperArray);
        console.log(TopperResult);
        let scoreTag = '<span>and congrats! 🎉, You got '+ userScore  +' out of '+ ((questions.length+1)/2)+' questions' +'<br>Note Your keycode BASIC LEVEL: '+TopperResult+'</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 15){ // if user scored more than 1
        var AverageResult = getRandomItem(AverageArray);
        console.log(AverageResult);
        let scoreTag = '<span>and nice 😎, You got '+ userScore +' out of '+ ((questions.length+1)/2) +'<br>Note Your keycode For BASIC LEVEL: '+AverageResult+'</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        
        var FailResult = getRandomItem(FailArray);
        console.log(FailResult);

        let scoreTag = '<span>and sorry 😐, You got only '+ userScore +' out of '+ ((questions.length+1)/2) +'<br>Note Your keycode For BASIC LEVEL: '+FailResult+'</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            next_btn.classList.add("show"); //show the next button if user selected any option
            option_list.children[0].classList.add("disabled"); //once user select an option then disabled all options
            option_list.children[1].classList.add("disabled");
            option_list.children[2].classList.add("disabled");
            option_list.children[3].classList.add("disabled");
        }
        
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ ((questions.length+1)/2) +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}