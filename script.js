function decimalToBinary(num) {
   let ans = 0;
    let i = 1;
    while(num>0)
    {
        let rem = num%2;
        ans = ans + (rem * i);
        i = i*10;
        num = parseInt(num/2);
    }
	return ans.toString();
}

window.decimalToBinary = decimalToBinary;
