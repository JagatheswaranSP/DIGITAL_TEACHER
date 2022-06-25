AssTopic1 =["bzpm9f", "7vt8WZ", "WubRld", "e0VU88", "mOvqNQ", "mySKSw", "ZCR3cS", "D92m8c", "6bjLyU", "liTpz8"];
AssTopic2 =["zo3gxy", "zxU0Bp", "u22B4k", "uaed6X", "3g4XcF", "wtm1kg", "Qj4SFz", "988lB1", "AjglMY", "7fmGKH"];
AssTopic3 =["dl4a2L", "dgPevt", "L1asdr", "QlOWoP", "qurcHN", "jPu8rY", "d17fRn", "dRDwsC", "9lI9i0", "QNVp78"];
AssTopic4 =["UhnMk1", "pcLRbo", "qmpbkC", "VDzGcR", "7qdgUD", "BszwFs", "lKr9C9", "oaspEi", "SQwMkE", "ruiHPZ"];
AssTopic5 =["WF3F4r", "kidnbv", "MY5uVo", "cm0ABA", "blVZT6", "DApoYX", "4MUJq1", "9g2itv", "5Qvw6M", "zg2RBE"];
AssTopic6 =["MysDzJ", "dChsEU", "58gbEs", "EWGMND", "V896TT", "RmpXEc", "t4xcYN", "zRxfpX", "wVdCLh", "SaMUmt"];
AssTopic7 =["hSCN6T", "4nyd3Z", "cGMAZ4", "DdPNYe", "IdpA6V", "JJXQFq", "fEcW4f", "58hUhr", "Gn60K9", "7kCofy"];
AssTopic8 =["l0IsPa", "XyFwaf", "gjw6JR", "4HJ7VC", "q83RY9", "unPxOX", "RNKm6V", "XVJflZ", "NLxqJ0", "nVVUwc"];
AssTopic9 =["i7SGWH", "VjepWw", "yjAzmj", "u4dFsU", "UhFcOz", "3oAqr7", "QWOu01", "Powrhg", "gQhcbP", "vPsn0u"];
AssTopic10 =["IW6j1G", "OhzvDK", "h9B9az", "iNzU1t", "gXOLuw", "bqwMpb", "kFCXxg", "fdO4yY", "sMG03z", "T96Pee"];

ProTopic1=["8wf3PW", "xM57rT", "oqTAG7", "hXgBn2", "BW7mA6", "KBTIgc", "wc4s7x", "Ywxf0F", "Gj7JCj", "eykKGm"];
ProTopic2=["LiEjcv", "Q7KwPM", "NoUTZ5", "QxzJnQ", "S9SKCh", "2ugcRv", "xmjOq0", "Px0sVU", "Vjx8e3", "poIeS8"];
ProTopic3=["fdwo4q", "d5vhUY", "ZOSdQp", "b2hanf", "hVemcH", "iH6w6i", "SWtzSQ", "mnKl4y", "LzO9An", "wSqflp"];
ProTopic4=["OteCVk", "g3ekYX", "kqtRlU", "rCctxB", "p5mW9p", "eVTN7p", "FoZYTh", "n2wt8Y", "G7NBOM", "15MbHF"];
ProTopic5=["Kjx7J1", "QLnqVM", "ftp8g1", "govURq", "Tu80Yu", "rikANE", "nJ7Bw6", "aGrGmq", "4o9s57", "RuUXu7"];
ProTopic6=["uSYzwA", "PAnCjk", "Ohdjw8", "V0WoQt", "aTxIov", "2wbbbZ", "QHnwYK", "BTKAPJ", "FNnkX9", "dsaVGA"];
ProTopic7=["B31mRM", "3xzB4P", "7fmMCM", "yRHU2I", "dQ4Ecp", "WG9b5x", "8cQwls", "ZBNvGu", "Byodn6", "evLIFg"];
ProTopic8=["jncj3w", "22anBH", "gtUQ11", "DcmKLo", "zXcSec", "U3AIh3", "7jpx10", "zYYg9r", "LRKVmR", "qL9wml"];
ProTopic9=["Oh2T44", "kzeK8O", "nqvKP5", "v3oBol", "JDBEVW", "nxZJ0s", "r9bxku", "NDdNdD", "4Wnh46", "eI2afv"];
ProTopic10=["rJ5BzX", "dHT8xp", "38GzCt", "U07Lzv", "kQWfU9", "hHJUiV", "fmMLJ9", "3FabNr", "H4zxsp", "gFPL9u"];

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
         var Question = "Write a Python program to create all possible strings by using 'a', 'e', 'i', 'o', 'u'. Use the characters exactly once.";
         document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" +Question;
     }
     else if(CodeFind2){
        var Question = "Create a Python program to get the value of Pi to n number of decimal places.";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
     }
     else if(CodeFind3){
        var Question = "Create a Python program of a Magic 8 Ball which is a toy used for fortune-telling or seeking advice.";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind4){
        var Question = "Create a Python program to get the value of e to n number of decimal places.";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind5){
        var Question = "Create a Python program that prints out every line of the song 99 bottles of beer on the wall";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind6){
        var Question = "Create a Python program to perform some simple statistics on a list of values";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind7){
        var Question = "Write a Python program to find the first occurrence of a given number in a sorted list using Binary Search (bisect)";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind8){
        var Question = "Write a Python program to find the index position of the largest value smaller than a given number in a sorted list using Binary Search (bisect).";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind9){
        var Question = "Write a Python program to find those numbers which are divisible by 7 and multiple of 5, between 1500 and 2700 (both included).";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind10){
        var Question = "Write a Python program to print alphabet pattern 'D'.";
        document.getElementById("message").innerHTML="<span>ASSIGNMENT:<br><br></span>" + Question;
    }
    else if(CodeFind11){
        var Question = "Simple Railway Reservation Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind12){
        var Question = "Payroll Management System Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind13){
        var Question = "Vehicle Investigation Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind14){
        var Question = "Shopping Mall Management System Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind15){
        var Question = "Speech To Text Conversion Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind16){
        var Question = "Simple Car Sales System Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind17){
        var Question = "Student Information System Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind18){
        var Question = "Hospital Management Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind19){
        var Question = "Hotel Management System Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else if(CodeFind20){
        var Question = "Library Management System Project Using python";
        document.getElementById("message").innerHTML="<span>PROJECT:<br><br></span>" + Question;
    }
    else{
        var Question ="The code you are given <span>" +UserEnteredKey.value + "</span> is a Invalid Code";
        document.getElementById("message").innerHTML =Question;
    }
}
AssignmentTopper = ["ASTlxLa", "ASTVlBe", "ASTBbfe", "ASTRUjx", "ASTRikz", "ASTOMls", "ASTHtaT", "AST7QfP", "ASTyFnI", "AST1010", "AST7XYJ", "ASTDxhl", "ASThyqk", "ASTICtL", "ASTbZx3", "ASTdOYW", "ASTLxLo", "ASTEeuQ", "ASTV1uf", "AST6zuI", "ASTFwir", "ASTK897", "ASTwneS", "ASTWi0F", "ASTAiSV", "ASTfLpk", "AST6Nv3", "ASTsxtL", "ASTkGaC", "ASTk2sJ", "ASTKp8I", "ASTMUpq", "ASTFdwa", "ASTIf8K", "ASTT4Lx", "ASTI8YQ", "ASTNuqg", "ASTGWvU", "ASTCTVZ", "ASTIgls", "AST1VKx", "ASTA44w", "AST2Qrf", "AST5De0", "ASTPIAx", "ASTRzPy", "ASTTJJc", "ASTYINS", "ASTQmXZ", "ASTwxZ2"];
AssignmentAverage = ["ASArFDy", "ASAdpGV", "ASARZ3Y", "ASA9DPH", "ASA3a1k", "ASA4yqm", "ASAaMR6", "ASA122u", "ASA8wuy", "ASAwIZ3", "ASA3DCx", "ASAl7MK", "ASAZX1e", "ASANVgD", "ASAGxta", "ASAGwt5", "ASAORJ0", "ASAhs3t", "ASAOh8Q", "ASAvBRD", "ASA3LUr", "ASAVubo", "ASA98wR", "ASAtvgr", "ASA2g33", "ASAU1jo", "ASAJSUc", "ASAmE0p", "ASAxuQL", "ASAwtzU", "ASAmFab", "ASAA2VC", "ASATrLR", "ASAMhFM", "ASAHOMI", "ASAyvoX", "ASApbfN", "ASAnLLj", "ASAsPB9", "ASAyE0Y", "ASAVyTZ", "ASAEo3U", "ASAyMR0", "ASARNNx", "ASAnunC", "ASAw9dY", "ASArkce", "ASAdpz2", "ASAqKMa", "ASAPZg4"];
AssignmentFail = ["ASFsl2D", "ASFZ9c5", "ASFkXe0", "ASFyV3R", "ASFyu0x", "ASFE3B8", "ASFsTXI", "ASF5qHB", "ASFTLIj", "ASFi0GO", "ASFiflO", "ASF3irg", "ASFY2da", "ASFjpT3", "ASFf1Vp", "ASFUr2I", "ASFLi94", "ASF4ER1", "ASFpj9H", "ASFwPag", "ASFuvv3", "ASFla59", "ASF7eAh", "ASFQvnb", "ASFRZU5", "ASFdkHA", "ASF1GNU", "ASFfc9K", "ASF9slZ", "ASFfRkn", "ASFhZHR", "ASFtOr7", "ASFCDOz", "ASFXahH", "ASFKmVL", "ASFdG6t", "ASFLPZ7", "ASFH1Tr", "ASFV2vB", "ASFf22L", "ASF4ZIp", "ASFUsSP", "ASF1cCl", "ASF6Sbz", "ASFd2JB", "ASFQxWg", "ASFeqEJ", "ASF03xs", "ASFLpqI", "ASFLMJe"];

ProjectTopper = ["PRThmVA", "PRTFNB9", "PRTC1Lq", "PRTF4rr", "PRTPTDe", "PRTvVTG", "PRTdNKC", "PRToWz2", "PRTLyE1", "PRTLZVF", "PRTtkfs", "PRTjKSQ", "PRTURr9", "PRTFxUh", "PRTa1dV", "PRTTBHv", "PRT9cGd", "PRTpFLG", "PRT0aHK", "PRTtvqR", "PRTThFc", "PRTVYYM", "PRTtX3k", "PRTE7Zl", "PRTNrt8", "PRTS9k3", "PRTi7NF", "PRTSUSB", "PRT4yXW", "PRTrxWE", "PRTwUTk", "PRTXx1z", "PRTFdfj", "PRTMQyV", "PRTtHHH", "PRT8Awx", "PRTgHCq", "PRT68Ve", "PRT5okT", "PRTgyNK", "PRTiMQ5", "PRTdIgi", "PRTdqC7", "PRT4RqO", "PRTfws2", "PRTlGTF", "PRTICNP", "PRT0pqV", "PRTym0P", "PRTFWeT"];
ProjectAverage = ["PRA3OP3", "PRA4dVM", "PRA7NwB", "PRAFCTW", "PRAAx50", "PRA2L5H", "PRAEjH4", "PRA6nc1", "PRAUOaz", "PRA5sxR", "PRAkNna", "PRAYVux", "PRAk9hG", "PRAcZXw", "PRAZBux", "PRAzTnl", "PRAOtpv", "PRA4Yev", "PRAAo04", "PRA3tht", "PRAiqqY", "PRAzHnb", "PRAxSEP", "PRAtT7m", "PRAPfOI", "PRAqM7V", "PRAW9hJ", "PRA8QyA", "PRABjeu", "PRAopxY", "PRAwx9H", "PRAyWSK", "PRAYZGw", "PRAal1H", "PRAU4sZ", "PRATql5", "PRAbIzq", "PRAfeiN", "PRAeoVZ", "PRAuGCR", "PRA9lXz", "PRARx30", "PRAucyo", "PRANDT5", "PRAeXwx", "PRA263g", "PRA4vTO", "PRAiCUN", "PRATuTX", "PRA2zDg"];
ProjectFail = ["PRFQ6sl", "PRFYaEI", "PRFmVEi", "PRFmSjM", "PRFInES", "PRFlXpW", "PRFQCe7", "PRF9HJ3", "PRFyuDq", "PRF33yU", "PRFA7Bs", "PRFg56R", "PRFiluH", "PRFN2zh", "PRF82Kt", "PRFaA7P", "PRFgzkU", "PRF9oY4", "PRFqZb6", "PRFfPmk", "PRFpB8b", "PRFkORx", "PRFqKlA", "PRFyd5j", "PRFZ8j4", "PRFIP1S", "PRFQiIM", "PRFsF2f", "PRFwKCk", "PRF4rh8", "PRFJ4ZX", "PRF1mmM", "PRF6Q4h", "PRFcrrS", "PRFsYmB", "PRFfqpp", "PRFid38", "PRFHZPq", "PRFKTll", "PRFDSaT", "PRFtFyC", "PRFxAhU", "PRF9AQg", "PRFXeuR", "PRFdlkB", "PRFCZJM", "PRFH86S", "PRF4x6m", "PRF2ZeP", "PRFqgVx"];

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






