/* 
Trong JavaScript, từ khóa "this" được sử dụng để tham chiếu đến đối tượng hiện tại trong ngữ cảnh thực thi của một hàm hoặc phương thức.
Giá trị của "this" thay đổi tùy thuộc vào cách mà một hàm được gọi hoặc phương thức được sử dụng.
*/

class Person {
    constructor(name) {
    this.name = name;
    }
    }
    
    const member = new Person('John');
    console.log( member);