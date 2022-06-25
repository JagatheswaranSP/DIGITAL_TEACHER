
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


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}


exit_btn.onclick = ()=>{
    window.location.href='../../../java.html';
}


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}


quit_quiz.onclick = ()=>{
    window.location.href='../../../java.html';

}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}
function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }
var TopperArray = ["BATFZz", "BATGzb", "BAT419", "BAT9DV", "BATHuK", "BATJh0", "BATq2i", "BATi6x", "BATWRN", "BATG2N", "BATKVi", "BATpPP", "BATCkv", "BATxEe", "BATB7g", "BATaxI", "BATHBe", "BATwf3", "BATyHW", "BATOAw", "BATFHr", "BATJkX", "BATnwV", "BAT0gI", "BAT91b", "BATCBs", "BATTfW", "BATa8P", "BATND1", "BATovj", "BATFkG", "BATJ3v", "BAT1Zu", "BAT01U", "BATfWa", "BATa4D", "BATLxF", "BATVyn", "BATn51", "BATn0S", "BAT4XU", "BATnbs", "BATg6P", "BATPzV", "BATPi0", "BATsVQ", "BATOuQ", "BAToGa", "BATjxY", "BATkov"];
var AverageArray = ["BAAypb", "BAAISr", "BAAVkQ", "BAAbRS", "BAAtAt", "BAA8Ws", "BAAfCd", "BAAG23", "BAA1my", "BAAAb8", "BAAPLU", "BAAivi", "BAA9gu", "BAA3JV", "BAAcKp", "BAA4Gt", "BAAHhY", "BAA0ks", "BAAdFi", "BAAV8P", "BAAhd0", "BAAPLa", "BAAB70", "BAAM6L", "BAAlhl", "BAAowU", "BAAJpz", "BAA6RI", "BAAUpX", "BAAOgM", "BAAQyv", "BAActr", "BAACCG", "BAAGXQ", "BAArBa", "BAAFaS", "BAAU8c", "BAA0fY", "BAA0Co", "BAA7Pi", "BAAf2Y", "BAAC3a", "BAAHg8", "BAA2ox", "BAArgG", "BAAUXE", "BAAVNW", "BAAiS6", "BAAgz1", "BAA7ul"];
var FailArray = ["BAFvQR", "BAFzFY", "BAF50N", "BAFFau", "BAFOZ9", "BAF9qX", "BAFA67", "BAFcgI", "BAFzkW", "BAFmYt", "BAFmOV", "BAFYer", "BAFsFD", "BAFZ9W", "BAF8lQ", "BAFYIv", "BAF2y0", "BAFcMv", "BAF3yH", "BAFD4i", "BAFgda", "BAFG1Z", "BAFy2i", "BAFi2n", "BAFuOk", "BAFQ5j", "BAFfxk", "BAFzBy", "BAFp0P", "BAFJG2", "BAFrfX", "BAFCXF", "BAFSos", "BAFS7Z", "BAFuCu", "BAFlDR", "BAFxut", "BAF8JA", "BAFUPs", "BAFVRi", "BAFLyZ", "BAFNCI", "BAFnFt", "BAFTMk", "BAFeEA", "BAFMwq", "BAFzMU", "BAF3mQ", "BAFf64", "BAF2ww"];
function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore  > 20){ 
        
        
        var TopperResult = getRandomItem(TopperArray);
        console.log(TopperResult);
        let scoreTag = '<span>and congrats! 🎉, You got '+ userScore  +' out of '+ questions.length +'<br>Note Your keycode BASIC LEVEL: '+TopperResult+'</span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 10){ 
        var AverageResult = getRandomItem(AverageArray);
        console.log(AverageResult);
        let scoreTag = '<span>and nice 😎, You got '+ userScore +' out of '+ questions.length +'<br>Note Your keycode For BASIC LEVEL: '+AverageResult+'</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        
        var FailResult = getRandomItem(FailArray);
        console.log(FailResult);
        let scoreTag = '<span>and sorry 😐, You got only '+ userScore +' out of '+ questions.length +'<br>Note Your keycode For BASIC LEVEL: '+FailResult+'</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            next_btn.classList.add("show"); 
            option_list.children[0].classList.add("disabled"); 
            option_list.children[1].classList.add("disabled");
            option_list.children[2].classList.add("disabled");
            option_list.children[3].classList.add("disabled");
        }
        
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}