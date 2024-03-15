
function getInputColor(){
    let seedColor = document.getElementById("color").value;
    let seedArray = seedColor.split('');
    seedArray.shift();
    let hexArray = seedArray.join("");
    return hexArray;
}

function modeSelector(){
    let modeOption = document.getElementById("mode").value;
    let mode = modeOption.toLowerCase();
    return mode;
}

function renderColor(data){
    let colorDisplay ='';
    let colorHex = '';
    for(let color of data.colors){
        colorDisplay += `
            <div class="schemeColor" style="background-color: ${color.hex.value}"></div>
        `
        colorHex += `
                <div class='schemeName'>${color.hex.value}</div>
        `
    }
    document.getElementById('schemeContainer').innerHTML = colorDisplay;
    document.getElementById('schemeInformation').innerHTML = colorHex;
}

// button Function
document.getElementById("getColor").addEventListener("click", function(e){   
    fetch(`https://www.thecolorapi.com/scheme?hex=${getInputColor()}&mode=${modeSelector()}`)
        .then(res => res.json())
        .then(data => renderColor(data))
    })