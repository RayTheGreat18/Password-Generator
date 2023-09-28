const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordBtn = document.getElementById("password-btn")
const outPut1 = document.getElementById("out-put1")
const outPut2 = document.getElementById("out-put2")
const copyToClipboard1 = document.getElementById("copy-to-clipboard1")
const copyToClipboard2 = document.getElementById("copy-to-clipboard2")
let randomCharacters1
let randomCharacters2


passwordBtn.addEventListener("click", function() {
    
    // Password generator for each letter for the first output
    const randomIndex1 = Math.floor( Math.random() * characters.length )
    const randomIndex2 = Math.floor( Math.random() * characters.length )
    const randomIndex3 = Math.floor( Math.random() * characters.length )
    const randomIndex4 = Math.floor( Math.random() * characters.length )
    const randomIndex5 = Math.floor( Math.random() * characters.length )
    const randomIndex6 = Math.floor( Math.random() * characters.length )
    const randomIndex7 = Math.floor( Math.random() * characters.length )
    const randomIndex8 = Math.floor( Math.random() * characters.length )
    const randomIndex9 = Math.floor( Math.random() * characters.length )
    const randomIndex10 = Math.floor( Math.random() * characters.length )
    const randomIndex11 = Math.floor( Math.random() * characters.length )
    const randomIndex12 = Math.floor( Math.random() * characters.length )
    const randomIndex13 = Math.floor( Math.random() * characters.length )
    const randomIndex14 = Math.floor( Math.random() * characters.length )
    const randomIndex15 = Math.floor( Math.random() * characters.length )
    
    
    // Password generator for each letter for the second output
    const randomIndex1a = Math.floor( Math.random() * characters.length )
    const randomIndex2a = Math.floor( Math.random() * characters.length )
    const randomIndex3a = Math.floor( Math.random() * characters.length )
    const randomIndex4a = Math.floor( Math.random() * characters.length )
    const randomIndex5a = Math.floor( Math.random() * characters.length )
    const randomIndex6a = Math.floor( Math.random() * characters.length )
    const randomIndex7a = Math.floor( Math.random() * characters.length )
    const randomIndex8a = Math.floor( Math.random() * characters.length )
    const randomIndex9a = Math.floor( Math.random() * characters.length )
    const randomIndex10a = Math.floor( Math.random() * characters.length )
    const randomIndex11a = Math.floor( Math.random() * characters.length )
    const randomIndex12a = Math.floor( Math.random() * characters.length )
    const randomIndex13a = Math.floor( Math.random() * characters.length )
    const randomIndex14a = Math.floor( Math.random() * characters.length )
    const randomIndex15a = Math.floor( Math.random() * characters.length )
    


    

    randomCharacters1 = 
    characters[randomIndex1] + characters[randomIndex2] + characters[randomIndex3] + characters[randomIndex4] + characters[randomIndex5] + characters[randomIndex6] + characters[randomIndex7] + characters[randomIndex8] + characters[randomIndex9] + characters[randomIndex10] + characters[randomIndex11] + characters[randomIndex12] + characters[randomIndex13] + characters[randomIndex14] + characters[randomIndex15]
    
    outPut1.textContent = randomCharacters1
    
    
    randomCharacters2 = 
    characters[randomIndex1a] + characters[randomIndex2a] + characters[randomIndex3a] + characters[randomIndex4a] + characters[randomIndex5a] + characters[randomIndex6a] + characters[randomIndex7a] + characters[randomIndex8a] + characters[randomIndex9a] + characters[randomIndex10a] + characters[randomIndex11a] + characters[randomIndex12a] + characters[randomIndex13a] + characters[randomIndex14a] + characters[randomIndex15a]
    
    outPut2.textContent = randomCharacters2


})

// Copy button one
copyToClipboard1.addEventListener("click", () => {
    const cb = navigator.clipboard
    cb.writeText(randomCharacters1)
    .then(()=>{
        alert("Password copied")
    })
})

// Copy button one
copyToClipboard2.addEventListener("click", () => {
    const cb = navigator.clipboard
    cb.writeText(randomCharacters2)
    .then(()=>{
        alert("Password copied")
    })
})



