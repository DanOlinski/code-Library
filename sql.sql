--https://sqlzoo.net/wiki/Tutorial_Quizzes -- this is an amazing tutorial with vids, check out quizzes 1 to 5
--PK (primary key) = is a unique identifies (id), that is usd to identify an entity
--FK (foreign key) = a foregn key is an id/PK origionally stored somewhere else but is used in a file to point to a users, it's the same as PK excepr that it is located in another file.
--ERD (entity relationship diagram) = A database, is a collection of data, the conventional way to store data is by dividing info into different tables/files then using an FK to link the info together.
--entity = each file tracks something(entity). Like a student's information, or a classroom(entity) with many students. an entity is a container/table/file that holds info pertaining to that entity 
--attribute = an attribute is a single element inside an entity. If you have a Studens entity, each student will have atributes like name, ID etc
--relationship = this describes that an entity is connectedto another entity through an ID, or a composite key, like ID + phone number
--cordinality = this is described using crow foot notation(lines connecting entitties in a diagram with symbols)

--Syntax: when using SQL you need to create an entity/table then you insert or change info into that entity. the upper case is code and the lower case is the info that will populate the created table. THe example below creates a tables with an ID(stored as a text) and the age(stored as a number), then is inserts info into that table
--Normalizing data: if there are repeated information create a seperate table (if you have a table with students name and a column for cohort, the cohort name will repeat since many students belong to the same cohort. Since cohort is repeated it should be in a seperate table)
--Relational database(when a table connects to another with the use of a FK, you can have one item in a table that contains many items from another table). There are 3 types of relations: one-to-one(this should't be in a separate table), one-to-many(FK goes in the many table) and many-to-many(for this you'll need a joining table. the table will cointaing 2 columns, the FK from both tables). 

--Data types: (here you can find a list of data types: https://www.postgresql.org/docs/9.3/datatype.html). use ISO 8601 data formatting (DATE or TIMESTAMP(date with time) works for this). id = SERIAL PRIMARY KEY, foreignKey_id=integer, email, phone number, password= VARCHAR(255), numbers=INTEGER

---------working w PostgreSQL in linux terminal-------------
--to find info on PostgreSQL google Posgres docs(one useful thing to check there is data types, when creating an entity you need to set the data type after the name of the column)
--instal PostgreSQL server, type in terminal: startpostgres (you need to start this if you restart your pc)
--start PostgreSQL: psql -- this is a psql server to stream the databases created
--Shut down PostgreSQL: \q or ctrl+z
--create a database: CREATE DATABASE test_db; --it does not matter what foldert you are in, databases are set globally within your pc
--connect into the created database: \c test_db;
--instead of typing into the terminal you can create the code in an sql file then in the terminal(in your directory and in your database): \i sqlFile.sql
--\dt -- this shows you all tables in a database
--q --when inside a large table you need to exit the table, type q to exit
--\d table_name -- this will show you the content of a table(you need to be inside a database that contains that table)
------------------------------

--Folder orginization convention: migrations(files with code that creates tables and database), seeds(files with code that insert data into tables)

--in order to connect a database to a web app (connecting a database to javastricp and html) check the javaScriptLibrary in this folder on database application

--commands---------------------------
--for a command to work you have to place ; at the end of a command, otherwise it won't execute


CREATE DATABASE myDb; 

-- after creating a database you navigate into the database and start creating tables/entities(navigate into new database: \c mtDb)
--inform attribute/column and type of data value, after the data type you can optionally add a limitation factor to that data(like PRIMARY KEY or NOT NULL for example), you can also add another statement: DEFAULT New() (this will set the default value to the date that value was inserted)
--When adding a fereign key this is the correct syntax(the REFERENCES informs the table and column to link from): owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
CREATE TABLE table_name (
  id SERIAL PRIMARY KEY NOT NULL, 
  name VARCHAR(255)  NOT NULL, 
  age INTEGER
  ); 

--this will add info into a table that has already been created
INSERT INTO table_name (
  name, 
  age
  ) 
  VALUES (
    "Dan", 
    34
    );

--This alters columns from a table
ALTER TABLE table_name 
ADD COLUMN column_name VARCHAR(255); --ADD

ALTER TABLE table_name 
ALTER COLUMN column_name VARCHAR(255); --alter existing

--This changes info inside a column from a user
--DELETE and UPDATE should be used carefully, meaning you should always test the query in a developer database before making changes to the actual database, so that you don't delete a database accidently
UPDATE table_name 
SET column_name = 'the that will replace whatever was there before' 
WHERE id = 1;

--This removes a table, the CASCADE command removes any info from the deleted table that is located in any other table
DROP TABLE table_name;
--This is the best practice when deliting tables 
DROP TABLE IF EXISTS table_name CASCADE;

--this deletes an item from a table
--normally info is not deleted from a table, instead we have a column named deleted_at, this column would either be empty or it would contain a date when that info was decomishioned
DELETE FROM table_name 
WHERE id = 1;

--some selectors(there is an excersize in the folder lighthouse\BootcampX with more examples of selectors)
--this brings up an istanse from the entity and atribute informed.
SELECT id FROM users; 

--this will return all atributes inside the requested entity
SELECT * FROM users; 

--this orders the return by whatever attribute you chose
SELECT * 
FROM users 
ORDER BY age; 

--This will only show userss over 18
SELECT * FROM users WHERE age > 18; 

--This sums all ages
SELECT SUM(age) FROM users; 

--this will create a table where the 1st column will be the id and the second column will be the age and the order of items will be from lowest agr to the highest
SELECT id, FROM users ORDER BY age; 

--this creates a table from an entity called world it shows 2 columns: name and population
  --WHERE name IN ('Brazil', 'Russia', 'India', 'China'); --this query is a continuation from the previous query and it searches if the values exist under the name instance. This example shows how to check for multiple values
SELECT name, population FROM world;

--this example shows countries with a specific size(in area)
SELECT name, area FROM world WHERE area BETWEEN 250000 AND 300000; 

--find names that start w F, for a name that ends w f use: %f, or to specify starting and ending leters: D%es
SELECT name FROM world WHERE name LIKE 'F%'; 

--this selects columns from 2 different tables(students and cohorts), the 'as' keyword sets the column name when table is viewed. the JOIN joins the 2 tables and the ON tells sql that a column named cohort_id in students corresponds to the column id inside cohort.id
--The INNER keyword can be removed from this query, doing so will show items even if students.cohort_id doesn't match with cohorts.id, otherwise the query will filter out null items
--FULL OUTER JOIN; this is the correct way of displaying all items from both tables
--here there is a better explanation on all types of joins: https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/
--since we are outputting FROM students table we can use the column names within students without using students.columnName notation. With one exception, if there is a column that is named the same in both tables
SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students 
INNER JOIN cohorts ON cohort_id = cohorts.id;

--this will output 2 columns, one is a normal column and the second one is a sum of all of the assignment submissions inside the assignment_submissions entity. This however won't work if we don't use GROUP BY, that will give something to replace the asterisk. Don't mistake GROUP BY(works along with COUNT()) with ORDER BY(displays items in table in the order you chose)
--also when using COUNT(), the FROM has to be the same tables as it is being passed into COUNT()
--This type of query only takes in 2 columns, unless the 3rd column is a count() or sum() or avg() function. if you want to add other columns that aren't functions you need to specify them in the GROUP BY: GROUP BY column-one, column-two
--note that COUNT(counts ammount of columns) is SUM(sums number values)
SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
--GROUP BY sometimes doesn't work, in this case it can only work if it is grouping the column that is written in the JOIN statement
GROUP BY students.name;
--HAVING is like WHERE, it is used when placing a condition for an aggregate data like sum or count, if you where to use WHERE you'd have to place it before GROUP BY
HAVING count(*) < 100;

--this uses a previous query to create another query(in this example it is counting the columns generated). in order to access a column from the previous query you need to sed the FROM as subquery, then use the adress: subquery.column-name, to access info from within a subquery
SELECT COUNT(subquery.*)
FROM(
  SELECT students.name as student_name, email, cohorts.name as cohort_name
  FROM students 
  INNER JOIN cohorts ON cohort_id = cohorts.id;
) as subquery;

--if you have joined tables where one table has a single entry for a teacher and another has many classes where teachers names show up many times DISTINCT can show these JOINed tables but not repeat the teachers name
SELECT DISTINCT ...;
-----------------------------





