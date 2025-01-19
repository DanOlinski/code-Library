class OOP {
    /* 
        the class below should be placed in a separate file names User.java for this app to run
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