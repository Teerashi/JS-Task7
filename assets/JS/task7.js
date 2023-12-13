






class Employee {
    constructor(name, lastName, sex, mph, hours) {
        this.name = name;
        this.lastName = lastName;
        this.sex = sex;
        this.mph = mph;
        this.hours = hours;
    }
    
    info() {
      return `${this.name} отработал ${this.hours} часов и должен получить ${this.mph * this.hours} денег, за этот месяц`;
    }
    
    get EmployeeInfo() {
        return `${this.name}, ${this.lastName}`;
    }
    
    set Rename(array) {
        if (Array.isArray(array) && array.every(item => typeof item === 'string')) {
        this.name = array[0];
        this.lastName = array[1];
        this.sex = array[2];
        } else {
            throw new TypeError('Значения должны быть текстом с типом данных "string"');
        }
    }
    }
    
    const infoEmployee2 = ['Vlad', 'Vladowich', 'man'];
    
    const employee1 = new Employee('Vova', 'Vovovich', 'man', 200, 20);

    // employee1.Rename = infoEmployee2