--To install postgresql, you need to go to the website and coppy the commands. after installation you need to configure postgres
--type; sudo -i -u postgres to start postgres
--type psql to go inside the defalt database
--type \q to get out of the database

--when configuring postgress for the first time you need to set a password for the user; \password postgres (press enter and type your password)

------v---working w PostgreSQL in linux terminal---v----------
--to find info on PostgreSQL google Posgres docs(one useful thing to check there is data types, when creating an entity you need to set the data type after the name of the column)

--sudo apt update
--sudo apt install postgresql postgresql-contrib
--there are more steps: follow these steps: https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart

--start PostgreSQL server, type in terminal: startpostgres or sudo -i -u postgres to start postgres(you need to start this if you restart your pc)
--check status(also shows you the port it is serving the db): sudo service postgresql status
--stop postgress: sudo service postgresql stop

--enter PostgreSQL server terminal interface: psql -- this is a psql server to stream the databases created

--Shut down PostgreSQL: \q or ctrl+z

--create a database: CREATE DATABASE test_db; --it does not matter what foldert you are in, databases are set globally within your pc. Do not use camel case it will bug the SQL server

--connect into the created database: \c test_db;

--instead of typing into the terminal you can create the code in an sql file then in the terminal(in your directory and in your database): \i sqlFile.sql
------^---working w PostgreSQL in linux terminal---^----------

--------v---postgress handy commands---v--------
--the following commands are used when inside psql (to enter psql mode fromn terminal: "startpostgres" then "psql", enter password and you're in)
--\l view all databases in a computer
--\c <databasename> this command will navigate into a database where you can access the database tables
--\dt -- this shows you all tables in a database
--q --when inside a large table you need to exit the table, type q to exit
--\d <table_name> -- this will show you the content of a table(you need to be inside a database that contains that table)
--------^---postgress handy commands---^--------

