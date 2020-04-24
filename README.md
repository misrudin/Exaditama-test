<section id="home">
<h1 align="center">Exaditama Test - Backend</h1>


Build with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
</section>


## Table Of Content
<div class="header">
	<ul>
		<li><a href="#requirements">Requirements</a></li>
		<li><a href="#how-to-run">How To Run</a></li>
		<li><a href="#setup-env">Setup env</a></li>
		<li><a href="#end-point">End Point</a></li>
	</ul>
</div>

<section id="requirements">

## Requirements

1. [![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)	
2. [![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. xampp)
</section>


<section id="how-to-run">
	
## How to run the app
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file **.env** in root project folder, set up first [here](#env)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database exaditama, and Import file [exaditama.sql](database/exaditama.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:4001/api/v1)
8. You can get url end point [here](#end-point)
</section>

<section id="setup-env">
	
## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
SERVER_PORT = 8000
DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = ""
DB_NAME = "exaditama"
```
</section>

<section id="end-point">

## End Point

```
Method = GET
Url = http://localhost:8000/football/endpoint
Response = all endpoint url and description

Method = POST
Url = http://localhost:8000/football/recordgame

Method = GET
Url = http://localhost:8000/football/leaguestanding

Method = GET
Url = http://localhost:8000/football/rank?clubname=

Method = DELETE
Url = http://localhost:8000/football/reset
```
</section>

	