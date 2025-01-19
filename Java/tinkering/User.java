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