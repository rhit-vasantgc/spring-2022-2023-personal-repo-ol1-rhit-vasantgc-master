var counter = 0;

function main(){
    console.log("Ready");
    document.querySelector("#decButton").onclick = (event) => {
        counter-=1;
        updateView();
    };
    document.querySelector("#resButton").onclick = (event) => {
        counter=0;
        updateView();
    };
    document.querySelector("#incButton").onclick = (event) => {
        counter+=1;
        updateView();
    };
}

function updateView(){
    // document.querySelector("#counterText").innerHTML = "Count = " + counter;
    document.querySelector("#numberText").innerHTML = `${counter}`;
}
main();