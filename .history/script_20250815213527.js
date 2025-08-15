let calculation = localStorage.getItem('calculation') || '';

      // Display the calculation when the page first loads.
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
         displayCalculation();
         localStorage.setItem('calculation', calculation);
}


      function displayCalculation() {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }

      document.addEventListener("keydown", function(event) {
        const key = event.key;
        
        //if the key is a number or a dot

        if(!isNaN(key) || key === '.'){
          updateCalculation(key);
        }

        //if the key is any operator 

        if(key === '+' || key === '-' || key === '*' || key === '/' ){
          updateCalculation(` ${key} `);
        }

        //if the key is equal sign
        if(key === '=' || key === 'Enter') {
          try {
            calculation = eval(calculation);
            displayCalculation();
            localStorage.setItem('calculation', calculation);
          } catch {
            calculation = 'Error';
            displayCalculation();
            localStorage.setItem('calculation', calculation);
          }
      }
        //if the key is backspace
        if(key === 'Backspace') {
          calculation = calculation.slice(0, -1);
          displayCalculation();
          localStorage.setItem('calculation', calculation);
        }

        //if the key is escape
        if(key === 'Escape') {
          calculation = '';
          displayCalculation();
          localStorage.setItem('calculation', calculation);
        }
      });