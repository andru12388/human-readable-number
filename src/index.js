const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
	let num = number;
	if (num === 0) {
		return 'zero';	
	}
	else {
		
		function convertTens(num) {
			if (num < 10) {
				return units[num];
			}
			else if (num >= 10 && num < 20) {
				return teens[num - 10];
			}
			else if (num % 10 === 0) {
				return tens[Math.floor(num / 10)];
			}
			else {
				return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
			}
		};
		
		function convertHundreds(num) {
			if (num % 100 === 0) {
				return units[Math.floor(num / 100)] + ' hundred';
			}
			else if (num > 99) {
				return units[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
			}
			else {
				return convertTens(num);
			}
		};
		
		function convertThousands(num) {
			if (num >= 1000) {
				return convertHundreds(Math.floor(num / 1000)) + ' thousand ' + convertHundreds(num % 1000);
			} else {
				return convertHundreds(num);
			}
		};
		
	}
	return convertThousands(num);
};