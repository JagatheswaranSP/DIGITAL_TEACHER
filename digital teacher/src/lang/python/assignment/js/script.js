function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }

    var topicNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    var codeNo = [0,1, 2, 3,4,5,6,7,8,9];

    

    let Codes = [
        ["bzpm9f", "7vt8WZ", "WubRld", "e0VU88", "mOvqNQ", "mySKSw", "ZCR3cS", "D92m8c", "6bjLyU", "liTpz8"],
        ["zo3gxy", "zxU0Bp", "u22B4k", "uaed6X", "3g4XcF", "wtm1kg", "Qj4SFz", "988lB1", "AjglMY", "7fmGKH"], 
        ["dl4a2L", "dgPevt", "L1asdr", "QlOWoP", "qurcHN", "jPu8rY", "d17fRn", "dRDwsC", "9lI9i0", "QNVp78"],
        ["UhnMk1", "pcLRbo", "qmpbkC", "VDzGcR", "7qdgUD", "BszwFs", "lKr9C9", "oaspEi", "SQwMkE", "ruiHPZ"],
        ["WF3F4r", "kidnbv", "MY5uVo", "cm0ABA", "blVZT6", "DApoYX", "4MUJq1", "9g2itv", "5Qvw6M", "zg2RBE"], 
        ["MysDzJ", "dChsEU", "58gbEs", "EWGMND", "V896TT", "RmpXEc", "t4xcYN", "zRxfpX", "wVdCLh", "SaMUmt"],
        ["hSCN6T", "4nyd3Z", "cGMAZ4", "DdPNYe", "IdpA6V", "JJXQFq", "fEcW4f", "58hUhr", "Gn60K9", "7kCofy"],
        ["l0IsPa", "XyFwaf", "gjw6JR", "4HJ7VC", "q83RY9", "unPxOX", "RNKm6V", "XVJflZ", "NLxqJ0", "nVVUwc"], 
        ["i7SGWH", "VjepWw", "yjAzmj", "u4dFsU", "UhFcOz", "3oAqr7", "QWOu01", "Powrhg", "gQhcbP", "vPsn0u"],
        ["IW6j1G", "OhzvDK", "h9B9az", "iNzU1t", "gXOLuw", "bqwMpb", "kFCXxg", "fdO4yY", "sMG03z", "T96Pee"]
        ];
    
    
    
    function assign() {
        var topicSelection = getRandomItem(topicNo);
        var codeSelection = getRandomItem(codeNo);
        var CodeResult = Codes[topicSelection][codeSelection];
        var display = document.getElementById("result");
        display.innerHTML = CodeResult;
     }


