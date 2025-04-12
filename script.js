
document.getElementById("generatebutton").onclick = function generatepassword() {
    let includeuppercase = document.getElementById("uppercasedchars");
    let includelowercase = document.getElementById("lowercasedchars");
    let includenumbers = document.getElementById("nums");
    let includesymbols = document.getElementById("symbols");
    let result = document.getElementById("result");
    let passlength = document.getElementById("passwordlengthinput").value;
    if(passlength<=0){
        result.textContent="Password length must be greater than 0";
        console.log("Password length must be greater than 0");
        return;
    }
    let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowers = "abcdefghijklmnopqrstuvwxyz";
    let numbered = "0123456789";
    let symbolised = "!@#$%^&*()_+";
    let generatedpassword = " ";
    let allowedcases = "";

    if (lowercasedchars.checked) {

        allowedcases += lowers;

    }
    if (uppercasedchars.checked) {

        allowedcases += uppers;
    }
    if (nums.checked) {

        allowedcases += numbered;
    }
    if (symbols.checked) {

        allowedcases += symbolised;
    }
    if(allowedcases.length===0){
        result.textContent="You must select at least one character type";
        console.log("You must select at least one character type");
        return;
        
    }
    console.log(allowedcases);
    console.log(passlength);

    for (let i = 0; i < passlength; i++) {
        let r_index = Math.floor(Math.random() * allowedcases.length);
        generatedpassword += allowedcases[r_index];

    }
    result.textContent = generatedpassword;
    console.log(generatedpassword);
}
// copy button
    let copybtn=document.getElementById("copybtn");
   let copiespass= document.getElementById("copiedpass");
   let copyicon=document.getElementById("copyicon");
    copybtn.onclick=function () { 
     navigator.clipboard.writeText(result.textContent);
      copybtn.textContent=`Copied`
      copyicon.style.display="flex";
      result.textContent=" copied to clipboard";

      setTimeout(() => {
        window.location.reload();
      },1000);
        }
        
