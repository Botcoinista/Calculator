const multiplyer = function(a,b) {
    return a + b
   }
    const addButton = document.getElementById("add-btn")
      addButton.addEventListener("click", () => {
         const number1 = parseFloat(document.getElementById("number1").value)
         const number2 = parseFloat(document.getElementById("number2").value)
         
         
          const resultElement = document.getElementById('result');
       resultElement.textContent = `Result: ${multiplyer(number1, number2)}`
       })
    