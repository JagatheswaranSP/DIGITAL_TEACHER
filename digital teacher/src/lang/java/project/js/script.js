function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }

    var topicNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    var codeNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    let Codes = [
        ["ps8Ubk", "XLdHKn", "qVdPwi", "EP6NIw", "bJxLKG", "6YSqVZ", "Rt05iv", "1XDKCF", "tljEZD", "ZVhOI6"],
        ["clLxD7", "HH7Kbp", "rRMEq4", "lEa9hw", "sMsyAE", "KauInI", "JqdZW4", "HXbQt8", "HRR8jL", "imG7hC"], 
        ["x8OkQ9", "6hycql", "5ljIkJ", "CkUIi2", "d69LJE", "f5pY0c", "UrAtwy", "ZouGnG", "gMPQcC", "4a81gF"],
        ["soK3KZ", "nQ8y7G", "OSHfQ9", "QsleIl", "rHkGlo", "9dweok", "NzkiAY", "P62spv", "UYoHTU", "hVWCyu"],
        ["OlI6FW", "hSPQoR", "hflkjt", "EW1CXZ", "rERlGn", "d1O0g0", "pVGR4i", "RS79bd", "oKeuFx", "Sx87cs"], 
        ["WhvHek", "phKuPG", "7Wbrqn", "66oxkP", "FZxeRu", "gVOnm3", "hd2uKF", "FeTXky", "9br2FI", "QI8y88"],
        ["NjkGOc", "cEhzsQ", "jNLYW8", "k5kKaL", "zlBhlz", "Tv0kX2", "utEXmT", "pmijGi", "IZ4DFk", "hJ2mJy"],
        ["8RG09N", "EemkOH", "yh2MC6", "0d5vVs", "bmlvcb", "PAsrMu", "71Ba6I", "HHiGXJ", "r9WGH8", "pPX75U"], 
        ["bLscZp", "4p7ZO8", "vR76aB", "t3HH68", "5n4ljj", "y5t2l6", "kJk8PU", "FlDYZJ", "6dRBBa", "PtsXpU"],
        ["A5aGA6", "t273WJ", "ark5vE", "vOfFb3", "kS0Czn", "bGwPXj", "1vLCkA", "dc2NI5", "kkLxcf", "W20a4L"]
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

