var sys = require("sys"),
	http = require("http"),
	fs = require("fs"),
	Mustache = require("mustache"),
	actions = [];
	
actions.push(
	{
		path: "/",
		template: "index.html",
		view: {
			name: "Tushar Sonawane",
			siteURL: "http://tushar.orgfree.com",
			skills: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'PHP', 'Java']
		}
	}
);

http.createServer(function(req, res) {
	fs.readFile(actions[0].template, function(err, template) {
		res.writeHead(200, {"Content-Type": "text/html"});
		template = template.toString();
		res.write(Mustache.to_html(template, actions[0].view));
		res.end();
	});
}).listen(8000, "127.0.0.1", function() {
	console.log("Server running at http://127.0.0.1:8000/");
});