# reddit-search

This is a project using the Reddit Search API. It is a single-page web application that utilizes HTML, CSS, JavaScript, Bootstrap and AngularJS. When a keyword is typed into the input field, and the Search button is clicked, the top 5 links to Reddit content containing that keyword will display in a pop-up window (modal).

reddit-search uses AngularJS to create a function that connects to the Reddit Search API url via JSONP. A variable is initialized from the typed keyword in the input field, which is then appended to the API url. A limit of 5 displayed items is also appended to the url.
