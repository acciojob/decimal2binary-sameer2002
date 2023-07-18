function decimalToBinary(num) {
  //Write you code here
	if(num==0){
		return 0;
	}
	let binary="";
	while(num>0){
		let remainder=num%2;
		binary=remainder+num;
		num=Math.floor(num/2);
	}
	return binary
  
}

window.decimalToBinary = decimalToBinary;
