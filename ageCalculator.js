document.getElementById('ageForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var birthMonth = document.getElementById('birthMonth').value;
	var birthYear = document.getElementById('birthYear').value;
	var birthDate = new Date(birthYear, birthMonth - 1, 1);
	var today = new Date();
	var age = today.getFullYear() - birthDate.getFullYear();
	var monthDiff = today.getMonth() - birthDate.getMonth();

	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	document.getElementById('result').innerHTML = 'Your age is: ' + age;
});