var person = {
    fistname: "Albert",
    lastname: "Einstein",
    set setLastname(_lastname){
        this.lastname = _lastname;
    },
    set setFirtName(_firtname){
        this.fistname = _firtname;
    },
    get getFullName(){
        return this.fistname + " " + this.lastname;
    }
}
person.setLastname = 'Newton';
person.setFirtName = 'Issac';
console.log(person.getFullName);

