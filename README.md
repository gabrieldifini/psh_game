# PSh Game Stats

This project was made in order to fulfill PSh's 2022 Dev Exam.

Author: Gabriel Di Fini

## Context

PSh-Game is an online game with thousands of participants abroad the world. In this instance we require to generate statistics for matches between players and a web report with the best players.

A. Simulate statistics of the games between players inserting randomly into a mysql database, statistics of the player’s games between 0 and 10 players with the following information:

- Unique identifier on the stat.
- Unique identifier of the player.
- Nickname (random) (*)
- Profile Image (random) (*)
- Creation date in timestamp.
- Score (random from 1 to 100).

- Configure a cron job that does this operation every 5 minutes.

(*) To generate random nicknames and profile images of the players use the following API:
https://randomuser.me/api

B. Generate a web report that shows top 10 best scores of the players of the whole history and also show the last time stats were generated.

C. Adapt the report to automatically refresh stats every 10 seconds, without refreshing the web page.

D. Add a button to allow exporting the report to CSV.

## NOTES
Developers can choose the technology that best suits his/her skills.


------------------------------------------------

The project consists of two main components: 

### Client side:

The frontend was made using React. Located in the "client" folder, the main structure was created via the command `create-react-app`.

#### Dependencies

First off, the corresponding dependencies should be installed, so with a terminal located in the "client" folder, run the following command: 

`npm install`

#### Environment variable

There is a file called ".env" in the client folder, with only one environment variable, corresponding to the API endpoint that retrieves the Game Stats data. It's setup to request the info from localhost in the port 9000 (this parameter is setup in the ".env" file in the server side).

Once the installation ended, to start the server, run the following command: 

`npm start`


### Server side:

The backend was made using Node.js with the Express.js framework. Located in the "server" folder, I used the ORM "Sequelize" to manage the mappings between the models and the MySQL database. Following, I will enumerate the different things to take into account to start the Node server:


#### Dependencies

The following command should be run in the server side, in this case, in a terminal session located in the "server" folder:

`npm install`


#### Database

In the same device that will be running both the React and the Node servers, there should be installed and running a MySQL database instance. To connect to the database, please mind the parameters specified in the ".env" file in the "server" folder and check that they match the parameters from your own environment; the parameters in that file are left there just as a "template", modify them to your needs. Also, check the "config.json" file located in the "config" folder, to match the configuration of your database there too (this file is used by the ORM to map the models with the database).

#### Migrations

Using the Sequelize CLI, I created the migrations that map the models with their corresponding tables in the database. To run the migrations, execute the following command: 

`npx sequelize-cli db:migrate`

If everything is setup properly, when the process is finished, there should be two tables in the database: "players" and "stats".

##### Note: If for any reason you need to revert this migrations, run the following command:

`npx sequelize-cli db:migrate:undo:all`


#### Environment variables

There is a file called ".env" in this folder too, containing all the parameters needed for the server to be connected to the database and the external API that provides the random user information. Please, take a look at this file to make sure everything matches the configuration of your own device.

##### Note: In a real case scenario, the .env files mentioned above wouldn't be versioned (they would be added in the corresponding ".gitignore" files); they were left on purpose for the sake of serving as a sort of template.


At this point, the only step left is starting the Node server. To do so, execute the following command:

`npm run start`
