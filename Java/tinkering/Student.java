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