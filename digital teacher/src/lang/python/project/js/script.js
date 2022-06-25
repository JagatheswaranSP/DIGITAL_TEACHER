function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }

    var topicNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    var codeNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    let Codes = [
        ["8wf3PW", "xM57rT", "oqTAG7", "hXgBn2", "BW7mA6", "KBTIgc", "wc4s7x", "Ywxf0F", "Gj7JCj", "eykKGm"],
        ["LiEjcv", "Q7KwPM", "NoUTZ5", "QxzJnQ", "S9SKCh", "2ugcRv", "xmjOq0", "Px0sVU", "Vjx8e3", "poIeS8"],
        ["fdwo4q", "d5vhUY", "ZOSdQp", "b2hanf", "hVemcH", "iH6w6i", "SWtzSQ", "mnKl4y", "LzO9An", "wSqflp"],
        ["OteCVk", "g3ekYX", "kqtRlU", "rCctxB", "p5mW9p", "eVTN7p", "FoZYTh", "n2wt8Y", "G7NBOM", "15MbHF"],
        ["Kjx7J1", "QLnqVM", "ftp8g1", "govURq", "Tu80Yu", "rikANE", "nJ7Bw6", "aGrGmq", "4o9s57", "RuUXu7"],
        ["uSYzwA", "PAnCjk", "Ohdjw8", "V0WoQt", "aTxIov", "2wbbbZ", "QHnwYK", "BTKAPJ", "FNnkX9", "dsaVGA"],
        ["B31mRM", "3xzB4P", "7fmMCM", "yRHU2I", "dQ4Ecp", "WG9b5x", "8cQwls", "ZBNvGu", "Byodn6", "evLIFg"],
        ["jncj3w", "22anBH", "gtUQ11", "DcmKLo", "zXcSec", "U3AIh3", "7jpx10", "zYYg9r", "LRKVmR", "qL9wml"],
        ["Oh2T44", "kzeK8O", "nqvKP5", "v3oBol", "JDBEVW", "nxZJ0s", "r9bxku", "NDdNdD", "4Wnh46", "eI2afv"],
        ["rJ5BzX", "dHT8xp", "38GzCt", "U07Lzv", "kQWfU9", "hHJUiV", "fmMLJ9", "3FabNr", "H4zxsp", "gFPL9u"],
       ];
    
    
    
    function assign() {
        var topicSelection = getRandomItem(topicNo);
        var codeSelection = getRandomItem(codeNo);
        var CodeResult = Codes[topicSelection][codeSelection];
        var display = document.getElementById("result");
        display.innerHTML = CodeResult;
     }
    




