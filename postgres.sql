--To install postgresql, 
--sudo apt update
--sudo apt install postgresql postgresql-contrib

--follow below to setup
--type; sudo -u postgres psql postgres
--set a password for a database after typing psql(as above); \password postgres (press enter and type your password. suggested pw = pass)
--CREATE ROLE dansrole LOGIN PASSWORD 'pass'; (no need for this step)
--CREATE DATABASE test WITH OWNER = dansrole; (no need for this step)
--connect into the created database: \c <database name>;

--to start up psql; sudo -u postgres psql postgres or sudo -i -u postgres to start postgres or service postgresql start
--type psql to go inside the defalt database
--type \q to get out of the database

--set a password for a database after typing psql; \password postgres (press enter and type your password)

--check status(also shows you the port it is serving the db): sudo service postgresql status
--stop postgress: service postgresql stop

--enter PostgreSQL server terminal interface: psql -- this is a psql server to stream the databases created

--Shut down PostgreSQL: \q or ctrl+z

--create a database: CREATE DATABASE test_db; --it does not matter what foldert you are in, databases are set globally within your pc. Do not use camel case it will bug the SQL server



--instead of typing into the terminal you can create the code in an sql file then in the terminal(in your directory and in your database): \i sqlFile.sql
------^---working w PostgreSQL in linux terminal---^----------

--------v---postgress handy commands---v--------
--the following commands are used when inside psql (to enter psql mode fromn 
--\l view all databases in a computer
--\c <databasename> this command will navigate into a database where you can access the database tables
--\dt -- this shows you all tables in a database
--q --when inside a large table you need to exit the table, type q to exit
--\d <table_name> -- this will show you the content of a table(you need to be inside a database that contains that table)
--see list of all roles(also called users)
--------^---postgress handy commands---^--------

