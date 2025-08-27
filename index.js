const hearts = document.getElementsByClassName("heartIcon");
for (let heart of hearts) {
    heart.addEventListener("click", function(e) {
        e.preventDefault();
       document.getElementById("loveCount").innerText = parseInt(document.getElementById("loveCount").innerText) + 1;
    
})};


const copyButtons = document.getElementsByClassName("copyButton");
for (let button of copyButtons) {
    button.addEventListener("click", function(e) {
        e.preventDefault();
         text=button.parentElement.parentElement.children[3].innerText;
         navigator.clipboard.writeText(text);
         document.getElementById("copyCount").innerText = parseInt(document.getElementById("copyCount").innerText) + 1;
         alert(text + " copied to clipboard");
    })}; 
const callButtons = document.getElementsByClassName("callButton");
for (let button of callButtons) {
    button.addEventListener("click",function(e){
        e.preventDefault();
        alert("Calling " + button.parentElement.parentElement.children[1].innerText);
        document.getElementById("historyContent").appendChild(document.createElement("box")).innerText = button.parentElement.parentElement.children[1].innerText + new Date().toLocaleString();
        

    })
};