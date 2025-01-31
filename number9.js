function monthlySavings(payments, livingCost) {
    if (typeof payments != 'object' || typeof livingCost !== 'number') {
      return "invalid input";
    }
  
    let totalIncome = 0;
    let totalTax = 0;
  
    for (let i=0; i<payments.length; i++) {
      totalIncome += payments[i];
      if (payments[i] >= 3000) {
        totalTax += payments[i] * 0.2;
      }
    }
  
    const netIncome = totalIncome - totalTax;
    const savings = netIncome - livingCost;
  
    if (savings >= 0) {
      return savings;
    } 
    else {
      return "earn more";
    }
  }
  
  
  console.log(monthlySavings([1000, 2000, 3000], 5400)); 
  console.log(monthlySavings([1000, 2000, 2500], 5000)); 
  console.log(monthlySavings([900, 2700, 3400], 10000)); 
  console.log(monthlySavings(10000, [900, 2700, 3400]));


  //   console.log(typeof 1000)
//   console.log(typeof [1000])

//   if(typeof [1000, 2000, 3000] =='object'){
//     console.log(1)
//   }
//   else{
//     console.log(0)
//   }




  


  
