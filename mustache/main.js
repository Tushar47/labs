function sample1() {
	var person = {
		firstName: "Tushar",
		lastName: "Sonawane",
		blogURL: "http://tushar.orgfree.com"
	};
	var template = "<h1>{{firstName}} {{lastName}}</h1>Site: {{blogURL}}";
	var html = Mustache.to_html(template, person);
	$('#sampleArea').html(html);
}

function sample2() {
	$.getJSON('data.json', function(data) {
		var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
		var html = Mustache.to_html(template, data);
		$('#sampleArea').html(html);
	});
}

function sample3() {
	$.getJSON('data2.json', function(data) {
		var template = $('#personTmpl').html();
		var html = Mustache.to_html(template, data);
		$('#sampleArea').html(html);
	});
}

function sample4() {
	var data = {name: "Tushar Sonawane", skills: ['JavaScript', 'PHP', 'Java']};
	var tmpl = "{{name}} skills: <ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul>";
	var html = Mustache.to_html(tmpl, data);
	$('#sampleArea').html(html);
}

function sample5() {
	var data = {
		employees: [
			{firstName: "Tushar", lastName: "Sonawane"},
			{firstName: "TLS", lastName: "Prime"},
		]
	};
	var template = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}</li>{{/employees}}</ul>";
	var html = Mustache.to_html(template, data);
	$('#sampleArea').html(html);
}

function sample6() {
	var person = {
		firstName: "Tushar",
		lastName: "Sonawane",
		blogURL: "http://tushar.orgfree.com",
		manager: {
			firstName: "TLS",
			lastName: "Prime"
		}
	};
	var template = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>" + 
					"Manager: {{manager.firstName}} {{manager.lastName}}";
	var html = Mustache.to_html(template, person);
	$('#sampleArea').html(html);
}

function sample7() {
	var person = {
		firstName: "Tushar",
		lastName: "Sonawane",
		blogURL: "http://github.io/tushar47",
		manager: {
			firstName: "TLS",
			lastName: "Prime"
		}
	};
	var tmpl = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>" +
				"{{#manager}}Manager: {{firstName}} {{lastName}}{{/manager}}";
				
	var html = Mustache.to_html(tmpl, person);
	$('#sampleArea').html(html);
}

function sample8() {
	var product = {
		name: "FooBar",
		price: 100,
		salesTax: 0.05,
		totalPrice: function() {
			return this.price + this.price * this.salesTax;
		}
	};
	var tmpl = "<p>Product Name: {{name}}</p>Price: {{totalPrice}}";
	var html = Mustache.to_html(tmpl, product);
	$('#sampleArea').html(html);
}

function sample9() {
	var data = {
		employees: [
			{
				firstName: "Tushar",
				lastName: "Sonawane",
				fullTime: true,
				phone: "617-111-1232"
			},
			{
				firstName: "Shridhar",
				lastName: "Deshmukh",
				fullTime: false,
				phone: "617-117-1232"
			},
			{
				firstName: "Onkar",
				lastName: "Kamatkar",
				fullTime: true,
				phone: "617-120-1232"
			}
		]
	};
	var tmpl = "Employee:<ul>{{#employees}}<li>{{firstName}} {{lastName}}" +
				"{{#fullTime}} {{phone}}{{/fullTime}}</li>{{/employees}}</ul>";
	var html = Mustache.to_html(tmpl, data);
	$('#sampleArea').html(html);
}

function sample10() {
	var data = {
		firstName: "Tushar",
		lastName: "Sonawane",
		address: "1 Main Street",
		city: "Nashik",
		state: "MH",
		zip: "422101"
	};
	
	var tmpl = "<h1>{{firstName}} {{lastName}}</h1>{{>address}}";
	var partials = { address: "<p>{{address}}</p>{{city}}, {{state}} {{zip}}"
	};
	var html = Mustache.to_html(tmpl, data, partials);
	$('#sampleArea').html(html);
}

function sample11() {
	var data = { 
			depts: [
				{
					name: "Engineering",
					employees: [
						{firstName: "Tushar", lastName: "Sonawane"},
						{firstName: "Shridhar", lastName: "Deshmukh"}
					]
				},
				{
					name: "Research",
					employees: [
						{firstName: "Pratik", lastName: "Palashikar"},
						{firstName: "Vaibhav", lastname: "Magar"}
					]
				}
			]
};

	var tmpl = "{{#depts}}<h1>{{name}}</h1>" +
			"<ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
	var partials = { employee: "<li>{{firstName}} {{lastName}}</li>" };
	var html = Mustache.to_html(tmpl, data, partials);
	$('#sampleArea').html(html);
}