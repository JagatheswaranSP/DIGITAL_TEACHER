function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }

    var topicNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    var codeNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    let Codes = [
        ["PlU5Q6", "10NnYV", "y59N9P", "b11wEu", "fHqGYd", "xFh3TA", "I1v8bU", "adRWYT", "yZ4xq7", "bil41u"],
        ["r1hlSD", "x3Hzls", "az3zqm", "KCjqdy", "SAZEqv", "OiUEQj", "30DmNU", "GSqJ68", "FPQeIP", "0a7WOq"], 
        ["vDu7Ac", "etWq9z", "k0yaJF", "1sWNLL", "Vcukaj", "bUe3jp", "l5T6zV", "M08wfZ", "IEXfud", "MOjrT1"],
        ["zwS73U", "bPLChW", "vgq4oA", "Z3olo4", "dPaaxp", "2VgW6t", "UqWGVQ", "Q12UKo", "zWCQ77", "IIVzT4"],
        ["wUyEDX", "DuBFgV", "PaluNy", "3AuOrc", "wIq66J", "WMZqjf", "SBKNbT", "pAmJcE", "lSUBlU", "KEybgK"], 
        ["yVXYZ9", "7pJqFP", "KLHuXc", "Ho85Bu", "dgPhm2", "WyoykZ", "AAjEHW", "jpzImR", "l4Hrdr", "yyWu19"],
        ["OgvZda", "AoVaj7", "wn8TPq", "HvZ0aj", "HaDA65", "21UGtN", "yqnYxz", "sJxLFN", "SJm9dI", "7BERjK"],
        ["qlQyAt", "vBS9it", "CCAHod", "8aM84t", "enmJd4", "f10j6t", "FuHTfJ", "6zPAkJ", "tHZScP", "fB5eGG"], 
        ["0J9Dyh", "wBoIAl", "kktKfQ", "u3QbIJ", "iZRTPe", "XahRx4", "6PpqAK", "mTrCCL", "6cygJH", "cJ1mqu"],
        ["NJmnzg", "elJbrf", "Hpbs1D", "Iirol6", "8n86RQ", "8fI0bU", "1bc11B", "0poRJh", "jXiNsv", "BOIBo0"]
        ];
    
    
    
    function assign() {
        var topicSelection = getRandomItem(topicNo);
        var codeSelection = getRandomItem(codeNo);
        var CodeResult = Codes[topicSelection][codeSelection];
        var display = document.getElementById("result");
        display.innerHTML = CodeResult;
     }
    



// var topics=["Fibonacci","LargestNumbers","sumInArray","sumMatrices","palindrome","BinarySearch","ObjectToString","SinglyLinkedList","CircularLinkedList","BinaryTree"]
// var assignment={
// Fibonacci: [1,2],
// LargestNumbers:[3,4],
// sumInArray:[5,6],
// sumMatrices:[7,8],
// palindrome:[9,10],
// BinarySearch:[11,12],
// ObjectToString:[13,14],
// SinglyLinkedList:[15,16],
// CircularLinkedList:[17,18],
// BinaryTree:[19,20],
// };

