#ruby needs to be installed in your terminal: sudo apt-get install ruby-full
#to check if ruby is installed: ruby --version

#Ruby executes on a package manager called rvm (you might have to install it)
#check rvm installed versions: rvm list

#To execute a ruby file on the terminal type: ruby <filename>

#-------------------------------------------

=begin
in order to install all gems related to a project you've just downloaded run: bundle install. If bundler is nor installed: gem install bundler
Gems. These are libraries like node packaged. To install a package you type: gem install <libraryName>
gem list command will show you a list of all installed packages within the folder you are in 
=end
#gems can also be module libraries, these are defined with the first letter being capital. in order to check all of the paramaters inside a module library you type: puts Module_example.constants
#you can also create your own modules
module Apple
  FOUNDED_BY = "L. Ron Hubbard"
end

puts Apple.constants #this will return all of the variables inside Apple aka FOUNDED_BY
puts Apple::FOUNDED_BY #this will output the attributed value to the variable(these can also be functions)

#-------------------------------------------

#log an arythmatic
puts(1+1)
puts "whatever"

#equality uses only ==
puts(1==1)
puts(1!=1)

#The values below are not falsly
puts(!!0, !!"")

#-------------------------------------------

#local variable(everything is like a "let" in js, there is no const) and interpolation
test = 'test'
testArr = [1,2,3,4]
puts("this is a #{test}")
puts testArr
puts (testArr[2, 3])#this will start printing at index 2 and only print 3 characters
#Instance variables can be accessed from other files and locations, the only diference is that the variable takes a @ bevore the name
@instance_var = 10

#-------------------------------------------
#repeat a string
puts("hello " * 4)

#-------------------------------------------
#objects are called hash
hash = { 'color' => 'green', 'number' => 5 }
hash.keys ## prints all keys
hash['color'] or hash[color]#=> "green"

#-------------------------------------------
# Conditionals
if true
  'if statement'
elsif false
  'else if, optional'
else
  'else, also optional'
end

#-------------------------------------------
#while loop
counter = 1
while counter <= 5 do
  puts "iteration #{counter}"
  counter += 1
end
#=> iteration 1
#=> iteration 2
#=> iteration 3
#=> iteration 4
#=> iteration 5

#-------------------------------------------
#For loop
arr = [1, 2, 3, 4, 5]
for i in arr
  puts i
end

#-------------------------------------------
#Functions are called methoods. If a functions is written with an argument you HAVE to pass in an argument when ytou call it otherwise it will crash
def double(x)
  return x * 2
end
puts double(5)

#-------------------------------------------
#This methood asks you questions, you answer by typing on the command line and it will print a final answer with the provided info
def command_line_form ()
  print 'How old are you?'
  #below is how you grab a number value that can be used in a calculation, without the .to_i you will be grabbing a string
  age =gets.chomp.to_i
  print "How tall are you?"
  height = gets.chomp
  print "How much do you weigh? "
  weight = gets.chomp

  return "So, you're #{age} old, #{height} tall and #{weight} heavy."
end
puts command_line_form()

#-------------------------------------------
#sort (this methood re arranges the order of what is in an array)
arr = [5,4,6,2,3,1]
arr.sort

#-------------------------------------------
#loop through an array and apply an action
arr.each {|element| puts element*10}

#-------------------------------------------
#Blocks
#A block has a similar concept to a class, it's like a template for a function
#This is a unique way of executing a methood. you define it as a methood first with the yeld methood and a return value. Then you can run the block by creating an object or using the do command
def print_result
  result_from_block = yield
  puts result_from_block
end
#Here we are passing in a math operation and the block is going to print the operation
print_result { 3 * 3 }
#Here we are basically writting a methood but it's running on top of whatever is already defined in the block
print_result do
  creature = "walrus"
  "I am the #{creature}!"
end
#You can pass in a block into a block
def print_argument(&block)
  result_from_block = block.call
  puts result_from_block
end

#-------------------------------------------
#Re order an object using more than one parameter
def ordered_by_qualifications()

  #data to be sorted
    candidates = [
  {:id=>5,
  :years_of_experience=>4,
  :github_points=>293,
  :languages=>["C", "Ruby", "Python", "Clojure"],
  :date_applied=>'Fri, 09 Jun 2023',
  :age=>26},
  
  {:id=>7,
  :years_of_experience=>1,
  :github_points=>145,
  :languages=>["JavaScript", "Ruby", "Go", "Erlang"],
  :date_applied=>'Tue, 30 May 2023',
  :age=>19},
  
  {:id=>9,
  :years_of_experience=>6,
  :github_points=>435,
  :languages=>["JavaScript", "SQL", "C#"],
  :date_applied=>'Tue, 13 Jun 2023',
  :age=>32},
  
  {:id=>10,
  :years_of_experience=>3,
  :github_points=>232,
  :languages=>["Java", "Ruby", "JavaScript"],
  :date_applied=>'Fri, 02 Jun 2023',
  :age=>31},
  
  {:id=>11,
  :years_of_experience=>12,
  :github_points=>32,
  :languages=>["VB", "Cobol", "Fortran"],
  :date_applied=>'Mon, 12 Jun 2023',
  :age=>42},
  
  {:id=>13,
  :years_of_experience=>1,
  :github_points=>328,
  :languages=>["Python", "Ruby", "JavaScript"],
  :date_applied=>'Sat, 10 Jun 2023',
  :age=>25},
  
  {:id=>15,
  :years_of_experience=>1,
  :github_points=>400,
  :languages=>["JavaScript", "Ruby"],
  :date_applied=>'Sun, 11 Jun 2023',
  :age=>16}
  ]
  #To sort data with multiple specifications you place all of the specifications in an array
    sorted_data = candidates.sort_by {|obj| [
      obj[:years_of_experience], 
      obj[:github_points]
      ]}
    return sorted_data
end

#-------------------------------------------
#Objects
#In ruby you create an object with the use of a class, The idea objects is to encapsulate blocks of code that refference a module or function inside a module or even a separate function or block in order to build a section of an application that doesn't start from scratch. These templates go inside a class

#this is our template
module Print_string
  def string1(print_this)
    return puts print_this
  end
end

#Here is the object
class Dog
  include Print_string
end

#This is how you run the object. Declare a variable with the class, then call a function that is inside a module(the module that contains the function has to be included in the class)
what_does_the_dog_say = Dog.new
what_does_the_dog_say.string1("wolf")

#-------------------------------------------
#Getter and setter
class Person
  #initialize is a keyword that enables you to pass in an argument into Person.new('whatever') and that argument will be processed by initialize
  #here we are setting the variable name to whatever is passed in whjen creating Person.new("...")
  def initialize(name)
    @name = name
  end

  #this is a condainer that makes @name available to be accesed outside this class
  def name
    return @name #the return text is optional
  end

  #after we create a new class stored in a variable: p = Person.new("...") and we want to change the value for @name, we create a container that actually a variable that takes in an argument, since the def container can return something, this container is able to change the value of @ name from outside this class
  def name=(new_name) #no spaces!!!!
    @name = new_name
  end 
end

#create new class
p = Person.new('L. Ron')
#print @name
puts p.name
#change value of @name
p.name = 'sjkhdfg'
#print new value
puts p.name

#-------------------------------------------

#Active Record (AR)
#This is a library that handels SQL databases, instead of writing SQL you can request data using AR notation

#   SELECT * FROM users WHERE email = 'bob@loblaw.com' LIMIT 1;
user = User.find_by(email: 'bob@loblaw.com')

# These are just like an attr_writers, performing changes in memory (no UPDATE sql)
user.name  = 'Bob'
user.email = 'bob@loblaw.org' #after changing an instance info you need to run;user.save

#There is a lighthouse labs project that shows how to work w AR: Ruby/ar-exercises
#-------------------------------------------
