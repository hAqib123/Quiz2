function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    const average = total / arr.length;
  
    return average;
  }
  
  const values = [1, 2, 3, 4, 5];
  const result = calculateAverage(values);
  console.log("Average:", result);
  
