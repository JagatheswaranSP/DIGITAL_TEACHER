
AssTopic1 =["PlU5Q6", "10NnYV", "y59N9P", "b11wEu", "fHqGYd", "xFh3TA", "I1v8bU", "adRWYT", "yZ4xq7", "bil41u"];
AssTopic2 =["r1hlSD", "x3Hzls", "az3zqm", "KCjqdy", "SAZEqv", "OiUEQj", "30DmNU", "GSqJ68", "FPQeIP", "0a7WOq"];
AssTopic3 =["vDu7Ac", "etWq9z", "k0yaJF", "1sWNLL", "Vcukaj", "bUe3jp", "l5T6zV", "M08wfZ", "IEXfud", "MOjrT1"];
AssTopic4 =["zwS73U", "bPLChW", "vgq4oA", "Z3olo4", "dPaaxp", "2VgW6t", "UqWGVQ", "Q12UKo", "zWCQ77", "IIVzT4"];
AssTopic5 =["wUyEDX", "DuBFgV", "PaluNy", "3AuOrc", "wIq66J", "WMZqjf", "SBKNbT", "pAmJcE", "lSUBlU", "KEybgK"];
AssTopic6 =["yVXYZ9", "7pJqFP", "KLHuXc", "Ho85Bu", "dgPhm2", "WyoykZ", "AAjEHW", "jpzImR", "l4Hrdr", "yyWu19"];
AssTopic7 =["OgvZda", "AoVaj7", "wn8TPq", "HvZ0aj", "HaDA65", "21UGtN", "yqnYxz", "sJxLFN", "SJm9dI", "7BERjK"];
AssTopic8 =["qlQyAt", "vBS9it", "CCAHod", "8aM84t", "enmJd4", "f10j6t", "FuHTfJ", "6zPAkJ", "tHZScP", "fB5eGG"];
AssTopic9 =["0J9Dyh", "wBoIAl", "kktKfQ", "u3QbIJ", "iZRTPe", "XahRx4", "6PpqAK", "mTrCCL", "6cygJH", "cJ1mqu"];
AssTopic10 =["NJmnzg", "elJbrf", "Hpbs1D", "Iirol6", "8n86RQ", "8fI0bU", "1bc11B", "0poRJh", "jXiNsv", "BOIBo0"];

ProTopic1=["ps8Ubk", "XLdHKn", "qVdPwi", "EP6NIw", "bJxLKG", "6YSqVZ", "Rt05iv", "1XDKCF", "tljEZD", "ZVhOI6"];
ProTopic2=["clLxD7", "HH7Kbp", "rRMEq4", "lEa9hw", "sMsyAE", "KauInI", "JqdZW4", "HXbQt8", "HRR8jL", "imG7hC"];
ProTopic3=["x8OkQ9", "6hycql", "5ljIkJ", "CkUIi2", "d69LJE", "f5pY0c", "UrAtwy", "ZouGnG", "gMPQcC", "4a81gF"];
ProTopic4=["soK3KZ", "nQ8y7G", "OSHfQ9", "QsleIl", "rHkGlo", "9dweok", "NzkiAY", "P62spv", "UYoHTU", "hVWCyu"];
ProTopic5=["OlI6FW", "hSPQoR", "hflkjt", "EW1CXZ", "rERlGn", "d1O0g0", "pVGR4i", "RS79bd", "oKeuFx", "Sx87cs"];
ProTopic6=["WhvHek", "phKuPG", "7Wbrqn", "66oxkP", "FZxeRu", "gVOnm3", "hd2uKF", "FeTXky", "9br2FI", "QI8y88"];
ProTopic7=["NjkGOc", "cEhzsQ", "jNLYW8", "k5kKaL", "zlBhlz", "Tv0kX2", "utEXmT", "pmijGi", "IZ4DFk", "hJ2mJy"];
ProTopic8=["8RG09N", "EemkOH", "yh2MC6", "0d5vVs", "bmlvcb", "PAsrMu", "71Ba6I", "HHiGXJ", "r9WGH8", "pPX75U"];
ProTopic9=["bLscZp", "4p7ZO8", "vR76aB", "t3HH68", "5n4ljj", "y5t2l6", "kJk8PU", "FlDYZJ", "6dRBBa", "PtsXpU"];
ProTopic10=["A5aGA6", "t273WJ", "ark5vE", "vOfFb3", "kS0Czn", "bGwPXj", "1vLCkA", "dc2NI5", "kkLxcf", "W20a4L"];

var UserEnteredKey = document.getElementById('KeyInput');

function codeDecrypt(){
     CodeFind1 = AssTopic1.includes(UserEnteredKey.value);
     CodeFind2 = AssTopic2.includes(UserEnteredKey.value);
     CodeFind3 = AssTopic3.includes(UserEnteredKey.value);
     CodeFind4 = AssTopic4.includes(UserEnteredKey.value);
     CodeFind5 = AssTopic5.includes(UserEnteredKey.value);
     CodeFind6 = AssTopic6.includes(UserEnteredKey.value);
     CodeFind7 = AssTopic7.includes(UserEnteredKey.value);
     CodeFind8 = AssTopic8.includes(UserEnteredKey.value);
     CodeFind9 = AssTopic9.includes(UserEnteredKey.value);
     CodeFind10 = AssTopic10.includes(UserEnteredKey.value);

     CodeFind11 = ProTopic1.includes(UserEnteredKey.value);
     CodeFind12 = ProTopic2.includes(UserEnteredKey.value);
     CodeFind13 = ProTopic3.includes(UserEnteredKey.value);
     CodeFind14 = ProTopic4.includes(UserEnteredKey.value);
     CodeFind15 = ProTopic5.includes(UserEnteredKey.value);
     CodeFind16 = ProTopic6.includes(UserEnteredKey.value);
     CodeFind17 = ProTopic7.includes(UserEnteredKey.value);
     CodeFind18 = ProTopic8.includes(UserEnteredKey.value);
     CodeFind19 = ProTopic9.includes(UserEnteredKey.value);
     CodeFind20 = ProTopic10.includes(UserEnteredKey.value);

   
     if(CodeFind1){
         var Question = "Write a program for Fibonacci Series using recursion OR without using recursion";
         document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" +Question;
     }
     else if(CodeFind2){
        var Question = "how to create a Java program to find the largest of three numbers using Ternary Operator OR if-else..if OR nested if";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
     }
     else if(CodeFind3){
        var Question = "Write a java Program to print the sum of all the items of the array";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind4){
        var Question = "Write a simple java Program to add two matrices";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind5){
        var Question = "Write a Java Program to determine whether a given string is palindrome or not";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind6){
        var Question = "Write a binary search program using java";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind7){
        var Question = "Write a Java Program Convert Object to String";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind8){
        var Question = "Write a simple java program using Singly linked list";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind9){
        var Question = "Write a simple java program to create and display a Circular Linked List";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind10){
        var Question = "Write a Java program to search a node in a Binary Tree";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind11){
        var Question = "Simple Railway Reservation Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind12){
        var Question = "Payroll Management System Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind13){
        var Question = "Vehicle Investigation Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind14){
        var Question = "Shopping Mall Management System Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind15){
        var Question = "Speech To Text Conversion Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind16){
        var Question = "Simple Car Sales System Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind17){
        var Question = "Student Information System Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind18){
        var Question = "Hospital Management Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind19){
        var Question = "Hotel Management System Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind20){
        var Question = "Library Management System Project Using Java";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else{
        var Question ="The code you are given <span>" +UserEnteredKey.value + "</span> is a Invalid Code";
        document.getElementById("message").innerHTML =Question;
    }
}
AssignmentTopper = ["ASTmhbf", "ASTqIT2", "ASTccXf", "AST13Pf", "ASTeWlk", "ASTHQPu", "ASTXN9B", "ASTZoFr", "ASTaVb7", "ASTMhqQ", "ASTcEjr", "ASTFpsG", "ASTQOJz", "ASTJIHg", "ASTUXyT", "ASTEmJk", "ASTU3bW", "ASTF8kf", "ASTJ89S", "ASTzkSQ", "ASTpmwm", "ASTv5nj", "ASTtw3m", "ASTRfWN", "ASTHDmc", "ASTJ041", "ASTonPE", "ASTJ70V", "ASTL7ZF", "ASTBI4q", "AST27BF", "ASTo2Rc", "ASTvRxK", "ASTrO40", "ASTMGwu", "ASTJi55", "ASTcAzJ", "ASTAGzU", "ASTsta3", "ASTa8Es", "ASTDKwI", "AST8hDP", "ASTz3WQ", "ASTG9zp", "ASTDCbn", "ASTvs6m", "ASTEGmn", "ASTRweS", "ASTGGvL", "ASTzCnb"];
AssignmentAverage = ["ASAIMbl", "ASAZG5f", "ASACkEE", "ASAYoNE", "ASAXXBf", "ASAiPm1", "ASArbtx", "ASAziCg", "ASAkEAw", "ASASVsh", "ASAw4F8", "ASAsjAG", "ASAIUKR", "ASAjaET", "ASAd5Kq", "ASAEQhE", "ASA7ffb", "ASA8NYK", "ASAIBFK", "ASAWH3Z", "ASAnYSl", "ASAwp6K", "ASAPdwh", "ASAbHeI", "ASAsUKl", "ASAqzUh", "ASAbcu0", "ASAidHD", "ASAjyU8", "ASAnNRw", "ASAZqyr", "ASAaBn0", "ASAWOoE", "ASAtTzy", "ASAU8PB", "ASAJ1h2", "ASAsx4d", "ASAdGiW", "ASAcGiU", "ASAOJKy", "ASARizQ", "ASAqjxd", "ASAOfBc", "ASABuIM", "ASAFjqN", "ASAOg3a", "ASAX2mt", "ASAIKfA", "ASAZslU", "ASAxXKc"];
AssignmentFail = ["ASFDNR0", "ASFSwKA", "ASFe6zM", "ASFkNmU", "ASFE9h3", "ASF3QZK", "ASFxkQi", "ASFHSLK", "ASFm5Op", "ASFX6uA", "ASFQmX9", "ASFom9x", "ASFIHbg", "ASFvsZ4", "ASFRaQF", "ASFtKEF", "ASFA0J5", "ASFmkfW", "ASFB3Zi", "ASFYMd5", "ASFggGx", "ASFxMrT", "ASF2uaZ", "ASFIMiJ", "ASFPPip", "ASFBlaj", "ASFiMjL", "ASF4TqC", "ASFibja", "ASFMq6x", "ASFAK5k", "ASFNkU1", "ASFCzMn", "ASFR7eZ", "ASFS2MP", "ASFaQuA", "ASFl5Wf", "ASF60ZW", "ASFDLDR", "ASFPgWE", "ASFIZv0", "ASFDjTp", "ASFlOB5", "ASF2jTe", "ASFfyq1", "ASFCN7U", "ASF4Jx7", "ASFPeSe", "ASFq4ib", "ASFs7Wn"];
ProjectTopper = ["PRTwQlC", "PRTKiiW", "PRTHV46", "PRTq3A6", "PRTB6A8", "PRTvWyy", "PRTnwzN", "PRTLW9O", "PRTJlWT", "PRTviBA", "PRToa3M", "PRTmQzc", "PRTKXTC", "PRTSFqh", "PRTdgQc", "PRT4oXY", "PRTLYcl", "PRT0j0E", "PRTZENs", "PRTDJlo", "PRTiThr", "PRT2xbi", "PRTZcbW", "PRTKpB6", "PRTPIMm", "PRTpqAI", "PRTnIaH", "PRTLQvz", "PRTgsH4", "PRTQDvK", "PRTpcMs", "PRT32Tv", "PRT8pWK", "PRTLF2V", "PRTH3q3", "PRTyMP0", "PRTE0wU", "PRT3TI1", "PRTpR4x", "PRT41jn", "PRT3rOX", "PRT2S5l", "PRTOX2O", "PRTsYtE", "PRTu5NA", "PRTZuZe", "PRTJYdA", "PRTUsvP", "PRTAyU5", "PRTUOYM"];
ProjectAverage = ["PRAuCpS", "PRAyw9B", "PRAtf8p", "PRA3PDX", "PRAWB2e", "PRAC8e1", "PRAhZWk", "PRAXcGp", "PRAzW7r", "PRANpgi", "PRAdU8u", "PRAxcvL", "PRAKFcn", "PRAInmC", "PRAG2Iq", "PRAju51", "PRAzThG", "PRA2UGY", "PRA7hgL", "PRAwO9Z", "PRAy9ub", "PRAh2MO", "PRALWeJ", "PRAVbtu", "PRAzx7W", "PRAYKmX", "PRA0nEg", "PRAPhwf", "PRAeMWh", "PRAVAuq", "PRABJi4", "PRAGagk", "PRAW2eZ", "PRAF55d", "PRAEIIG", "PRAVjfn", "PRAcSQv", "PRAlLTC", "PRAWov3", "PRA9dvc", "PRA1rKa", "PRA2aao", "PRAJqgM", "PRAtVKB", "PRAVdE2", "PRAZ7Sl", "PRAqf24", "PRALtrR", "PRAGp4P", "PRAENVD"];
ProjectFail = ["PRF8Kot", "PRFakp0", "PRFugxU", "PRFfdtt", "PRFzmoC", "PRFz5Ux", "PRFC2WT", "PRFqRjG", "PRF11kG", "PRFGxty", "PRFmDfY", "PRF8xqc", "PRFEhbM", "PRFoFeH", "PRFkw2q", "PRFW6TX", "PRFLLQ2", "PRFJHeZ", "PRFSCOE", "PRFXMTU", "PRFWgWG", "PRF1Zej", "PRFgnhb", "PRF3300", "PRFlaZ3", "PRFH131", "PRFottJ", "PRFfmea", "PRFAamj", "PRFQ3uY", "PRFIULU", "PRFw0ft", "PRFTjUE", "PRFqJmw", "PRFdKs2", "PRFUyOE", "PRFFXcw", "PRFtqSs", "PRFfGop", "PRFiWRH", "PRF0KRh", "PRFNYGY", "PRFY2JC", "PRFg23T", "PRFJrK6", "PRF1w8z", "PRFsprW", "PRFzZHX", "PRFcCrj", "PRFyy24"];

function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }

function AssTopper(){
    var AssignmentTopperCode =getRandomItem(AssignmentTopper);
    document.getElementById("AssTopper").innerHTML = AssignmentTopperCode;
}
function AssAverage(){
    var AssignmentAverageCode =getRandomItem(AssignmentAverage);
    document.getElementById("AssAverage").innerHTML = AssignmentAverageCode;
}
function AssFail(){
    var  AssignmentFailCode=getRandomItem(AssignmentFail);
    document.getElementById("AssFail").innerHTML = AssignmentFailCode;
}
function ProTopper(){
    var ProjectTopperCode=getRandomItem(ProjectTopper);
    document.getElementById("ProTopper").innerHTML = ProjectTopperCode;
}
function ProAverage(){
    var ProjectAverageCode=getRandomItem(ProjectAverage);
    document.getElementById("ProAverage").innerHTML = ProjectAverageCode;
}
function ProFail(){
    var ProjectFailCode=getRandomItem(ProjectFail);
    document.getElementById("ProFail").innerHTML = ProjectFailCode;
}






