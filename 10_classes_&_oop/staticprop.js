class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
    // static methods are defined on the class itself and not on instances of the class. They are called using the class name rather than an instance of the class. In this case, createId is a static method of the User class, so it should be called as User.createId() instead of hitesh.createId(). Static methods are often used for utility functions that are related to the class but do not require access to instance properties or methods.
    // Static methods are not inherited by instances of the class, but they are inherited by subclasses. This means that if a subclass extends a class that has a static method, the subclass can also call that static method using the subclass name. However, instances of the subclass cannot call the static method directly; they would need to call it through the subclass or the parent class.
    // In the example above, the createId static method is defined in the User class. The Teacher class extends the User class, so it inherits the createId static method. Therefore, we can call Teacher.createId() to access the static method from the Teacher class. However, we cannot call hitesh.createId() because hitesh is an instance of the User class and static methods are not accessible through instances.
}

const hitesh = new User("hitesh")
console.log(hitesh.createId()); // TypeError: hitesh.createId is not a function, because static methods are not accessible through instances of the class. They can only be called on the class itself. In this case, createId is a static method of the User class, so it should be called as User.createId() instead of hitesh.createId().


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("iPhone", "i@gmail.com")
console.log(iPhone.createId()); // 123, because the Teacher class extends the User class, it inherits the static method createId. Therefore, we can call Teacher.createId() to access the static method from the Teacher class. However, we cannot call iPhone.createId() because iPhone is an instance of the Teacher class and static methods are not accessible through instances of the class. They can only be called on the class itself. In this case, createId is a static method of the User class, so it should be called as User.createId() instead of iPhone.createId().

