let string = "";
// let screen = document.getElementById('screen');
let buttons = document.querySelectorAll(".button");
 Array.from(buttons).forEach((button)=> {
    button.addEventListener("click", (e)=> {
        if (e.target.innerHTML=="="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="AC"){
        string="";
        document.querySelector('input').value=string;
        }
        
        else if(e.target.innerHTML=="C"){
            string = string.substring(0, string.length-1)
            document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=="X"){
                string+="*";
                document.querySelector('input').value=string;
                }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

// let a = "abcdefgh";
// //  a = Array.from(a);
// let b = a.forEach((a) => {
//     return console.log(a);
// });
// // console.log(b(a));


