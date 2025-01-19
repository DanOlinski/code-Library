//install Java
{
/*
*install Java
-sudo apt update
-sudo apt install openjdk-11-jdk (this version is the most used)
sudo apt install openjdk-17-jdk (this is if you want to install the latest version as of 2024)
-java -version (verify the installation)

*set the home directory
-sudo nano /etc/environment (set the java JAVA_HOME directory)
-JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64" (paste this code in the text editor. this code is also used to complete the process described on the step emediately above)
-press Ctrl + X, then Y, and Enter(to close) (to save the file).
-source /etc/environment (to apply the changes)
-echo $JAVA_HOME (to verify that JAVA_HOME is Set)

*If you have multiple versions of Java installed, you can configure which version is used by default
-sudo update-alternatives --config java (this will show all versions installed)
-follow prompts to chose the desired version


*/
}

//*to run a Java file
{
/*
*compile
before you are able to run a file you need to compile it (thi will create a new file with .class extension)
javac <filename.java> (to compile)

*run the java program; java <filename.class>
*/
}

//*Hello world program
{
class OOP {

    //this method executes as soon as the app is launched
    public static void main(String[] args) {

        //this method prints to command line
        System.out.println("hello");
    }
}
}

//*Setting up a simple app with a separate class, along w some OOP concepts
{
class OOP {

    //this method executes as soon as the app is launched
    public static void main(String[] args) {

        //this method prints to command line
        System.out.println("hello");

        //create an object, that is an instance of a class. 
        //an object is a variable that holds a value
        //in Java you declare the type of parameter(String, Number etc), then you name it whatever you want(that's the variable name)
        //User is a class and should have it's own .java file, in that file the minimum code to have in it is; class User{}, however below commented out is what should really be in that file for this program to run.
        /* 
        class User {
    //when placing "private" before declaring an object you are Encapsulating an object and making in inaccessible to the main function, where the app is running from
    //The underscore in front of "name" is used a comon indicator to the programmer that this object is private
    private String _name;
    private String _membership;
    String membership;

    //this method is a setter/mutator method. used to set or update the value of a private instance variable of a class
    //so when creating a new class for User.java and setting a value for _name, the app will brake since _name is private, so to set a value you need to invoke the method below
    //the method below takes in a string argument and will then set the value of _name to whatever is passed into the argument
    //void is a keyword used to indicate that a method does not return any value
    void set_name(String name){
        _name = name;
    }

    //to access _name, you need to invoke the method below, since _name is private and can't be accessed directly through the use of the variable _name
    String get_name(){
        return _name;
    }

    //Method overloading. a feature that allows a class to have multiple methods with the same name but different parameter lists. The parameters can differ in: quantity of parameters, type, order
 
    //1st you create a setter method, and set the argument type as a class(in this case "Membership")
    void set_membership(Membership membership){
        _membership = membership.name();
    }

    //the type Membership described above needs to reference a class, the Membership class could be defined in a separate file, however since this class will only be used in the method above, it can be declared inside the User class
    //What makes this method a Method overloading is using the "enum" type
    //the list inside the class are the possible options one can chose, when setting a value to "_membership"
    //so when a variable is set to have a type "Membership", the only acceptable types are the options listed in the Membership class
    public enum Membership {
        Bronze, Silver, Gold;
    }

    String get_membership(){
        return _membership;
    }

    //Constructors
    //for a method to be a constructor it has to be th same name as the class, it also doesn't need to return anything and it doesn't have to have "void" informed (void is used when a method doesn't return anything)
    //a constructor method prevents a class from being used with any desired variable attribution, it forces a class to be invoked and to have values attributed as arguments. Basically forces a class to be used in a specific way
    //below we are forcing the User class to have a name and a membership defined as soon as the User class is created
    public User(String name, String membership){
        set_name(name);
        set_membership(membership);
    }
}
        */
        //here we are setting a variable, the type of the variable is User, however that type doesn't exist, so we need to create a file with the same name as the type; User.java, in that file there will be a class called User, and now the object type User exists
        User u = new User();
        //here we can access the objects in the User class and set a value to the variables
        u.membership = "Gold";

        //here is an example of Polymorphism(using the same class in different ways)
        //1st you specify the type of object(User), then give the variable a name, then create a new class that will have the parameters and methods of the class in User.java file. Then you can set values to the 2 parameters that in the User.java class
        User u2 = new User();
        u2.membership = "Silver";

        //this is how you use a getter and setter to utilize private objects from a class. For more information check the User.java file described above
        u.set_name("Pedro");
        System.out.println(u.get_name());

        //Method overloading
        //when setting a method overloading, you place in the setter function one of the options listed in the Membership class (more info in the User.java file described above)
        u.set_membership(User.Membership.Gold);
        System.out.println(u.get_membership());

    }


}
}

//*Constructors and method override
{
    class OOP {

    //this method executes as soon as the app is launched
    public static void main(String[] args) {

        /* 
        the class below should be placed in a seperate file names User.java for this app to run

class User {
    //for a full description on anything other than constructors, check the previous section
    private String _name;
    //the example below shows a default value for the variable
    // private String _name = "No Value";
    private String _membership;
   
   //Constructors
    //for a method to be a constructor it has to be th same name as the class, it also doesn't need to return anything and it doesn't have to have "void" informed (void is used when a method doesn't return anything)
    //a constructor method prevents a class from being used with any desired variable attribution, it forces a class to be invoked and to have values attributed as arguments. Basically forces a class to be used in a specific way
    //below we are forcing the User class to have a name and a membership defined as soon as the User class is created
    public User(String name, String membership){
        set_name(name);
        set_membership(membership);
    }
    
    //in case I still want to lave it possible to invoke the User class without passing anything in as arguments, I can create another constructor as below, if I don't create the second constructor, then the only way to invoke the User class is by passing 2 strings as arguments
    public User(){

    }

    //getters and setters for name
    void set_name(String name){
        _name = name;
    }
    String get_name(){
        return _name;
    }

    //membership setter
    void set_membership(String membership){
        _membership = membership;
    }

    //membership getter
    String get_membership(){
        return _membership;
    }

    //method override. this method overrides the default value if you print the User class without specifying what from within the User class you want to print (check the OOP class for more info)
    public String toString() {
        return get_name() + " " + get_membership();
    }
    
}

        */

    //constructor
    //this is how to invoke a class that has a constructor, this constructor forces me to set a name and a membership value when I invoke the User class
    User u = new User("tt", "Silver");

    System.out.println(u.get_name());
    System.out.println(u.get_membership());

    //Method override
    //this method overrides a default value and returns a predetermined value. For example if you print out the variable u the default value to the class would be some gibberish code (it does mean something but it's not really useful), instead if you add an overide method in the User class, you can predetermine it to print something else (theck the User.java file for more)
    //some java default methods can also be overwritten, methods like .equals(), you can create inside User.java a method called equals() and make it do whatever you want, when you invoke u.equals() the method you created will override the default method from Java
    System.out.println(u);



    }
}
}

//*Generic Lists and static objects
{
import java.util.ArrayList;

class OOP {
    /* 
        the class below should be placed in a seperate file names User.java for this app to run

import java.util.List;

class User {
    private String _name;
   
    //constructor
    public User(String name){
        set_name(name);
    }
    
    //getters and setters for name
    void set_name(String name){
        _name = name;
    }
    String get_name(){
        return _name;
    }
    
    //static object
    //this is a list that lives inside the User class, any data type can be static, but here we'll use a generic list method as an example. check the OOP class to see how this is invoked
    //the type List has to be imported(check line 1). admins is the mane of the generic static list
    public static List<User> admins;
}

    */

    //this method executes as soon as the app is launched
    public static void main(String[] args) {

        //ArrayList is the type of object we are creating, however for this type to be usable it has to be imported (check above)
        //<User> is referencing where the list will be stored
        ArrayList<User> users = new ArrayList<User>();
        //here we are adding to the users array list everything that is in the User class

        users.add(new User("Caleb"));
        users.add(new User("Jacob"));
        users.add(new User("Sally"));

        //users is an array, so we will loop through the array and print each name on the generic list
        for(int i = 0; i < users.size(); i++) {
        System.out.println(users.get(i).get_name()+" from loop1");
        };
        //here there is another type of loop
        for (User u : users) {
        System.out.println(u.get_name() + " from loop 2");
        }

        //static objects have a specific way to be invoked. for more info check the User.java file
        User.admins = new ArrayList<User>();
        User.admins.add(new User("static user1"));
        User.admins.add(new User("static user2"));
        User.admins.add(new User("static user3"));

        //print all elements from static list
        for (User u : User.admins) {
        System.out.println(u.get_name());
        }
    }
}
}

//*inheritance
{
    class OOP {
    /* 
        the class below should be placed in a seperate file names User.java for this app to run
        //if you want a main class that wont be invoked in the main app but will be extended by other classes you use the sinthax; class abstract User ...
        //when typing "abstract" Java won't let you invoke the class
class User {
    private String _name;
   
    //constructors
    public User(String name){
        set_name(name);
    }
    public User(){
    }

    //getters and setters for name
    void set_name(String name){
        _name = name;
    }
    String get_name(){
        return _name;
    }
}


    */
    /* 
        the class below should be placed in a seperate file names User.java for this app to run

//To inherit all objects from another class (in this case Student is inheriting from User class), all you need to do is type "extends <className>"
class Student extends User {
    private boolean _verified = false;
   
    //getters and setters for _verified
    void set_verified(boolean verified){
        _verified = verified;
    }
    boolean get_verified(){
        return _verified;
    }
}

    */

    //this method executes as soon as the app is launched
    public static void main(String[] args) {

        //Student inherits all objects from User class and also adds it's own objects. check Student.java for more info
        Student s = new Student();
        //set_name is a method inherited from User class, being accessed by Student class
        s.set_name("Carlos");
        s.set_verified(true);

        System.out.println(s.get_verified());
        System.out.println(s.get_name());
        
    }
}
}

//*Maven
{
    /*
    Maven is a server framework for java, it allows you to integrate libraries. Basically all projects in Java start w a maven setup

    
    *install maven; sudo apt install maven -y
    *check version; mvn --version
    
    *You can setup a project in the https://start.spring.io/ website
    for a simple app you can chose the dependency; Spring Web
    this will download a folder with a ready to use app
    
    *to run a maven spring app;  mvn spring-boot:run
    */
}