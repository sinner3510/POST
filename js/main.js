console.log("Подключено")

function send(){
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;
	let age = document.getElementById("age").value;

	console.log(name)
	console.log(surname)
	console.log(age)

	var API = "https://api.sinner3510.com";

	$.ajax({
		url:         API,
		data:         {
			name: name,
			surname: surname,
			age: age
		},
		//dataType:      'json',

		/* Very important */
		contentType:    'application',
	})
	.done(function(data){
		console.log(data)
	});
}