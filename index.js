const hearts = document.getElementsByClassName("heartIcon");
for (let heart of hearts) {
    heart.addEventListener("click", function() {
       document.getElementById("loveCount").innerText = parseInt(document.getElementById("loveCount").innerText) + 1;
    
})};


const copyButtons = document.getElementsByClassName("copyButton");
for (let button of copyButtons) {
    button.addEventListener("click", function() {

         text=button.parentElement.parentElement.children[3].innerText;
         navigator.clipboard.writeText(text);
         document.getElementById("copyCount").innerText = parseInt(document.getElementById("copyCount").innerText) + 1;
         alert(text + " copied to clipboard");
    })}; 