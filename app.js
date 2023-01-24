function convertToRoman(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM", "MMMM"];
    //turn num to a string, split individual characters.
    const string = num.toString();
    const length = string.length;
    const numbers = string.split("").map(Number);
    let romanNumeral = "";
    let i = 0;
  
    switch (length) {
      case 4:
      romanNumeral += thousands[numbers[i]]
      i++
  
      case 3:
      romanNumeral += hundreds[numbers[i]]
      i++
  
      case 2:
      romanNumeral += tens[numbers[i]]
      i++
  
      case 1:
      romanNumeral += ones[numbers[i]]
    }
  
    return romanNumeral
  };