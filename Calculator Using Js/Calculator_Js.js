const calculator = [
     {
    label: "-",
    class: "operator",
},

{
    label: "7",
    class: "number",
},

{
    label: "8",
    class: "number",
},

{
    label: "9",
    class: "number",
},

{
    label: "+",
    class: "operator",
},

{
    label: "4",
    class: "number",
},

{
    label: "5",
    class: "number",
},

{
    label: "6",
    class: "number",
},

{
    label: "1",
    class: "number",
},

{
    label: "2",
    class: "number",
},

{
    label: "3",
    class: "number",
},

{
    label: "*",
    class: "operator",
},

{
    label: "0",
    class: "number",
},

{
    label: "/",
    class: "operator",
},

{
    label: "=",
    class: "operator",
},

{
    label: "C",
    class: "clear",
}
]

const buttonContainer = document.getElementById("buttons");

calculator.forEach(button => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = button.label;
    buttonElement.classList.add(button.class);
    buttonElement.addEventListener("click", () => {
        const display = document.getElementById("display");
        if(button.label === "="){
            try{
                display.value = eval(display.value);
            }
            catch(error){
                display.value = "Error";
            }
        }else{
            display.value += button.label;
        }
        if(button.label == "C"){
            display.value = "";
        }
    })

    buttonContainer.appendChild(buttonElement);
})
