//num1
test = (...arg) => arg.filter(item => typeof item === 'string');

//test2(1,2,3,'dsfdsf','ef',32423)   ; 

//num2
test2 = (param, ...arg) => 
    param == '+'? arg.reduce((num1, num2) => num1 + num2) : 
    param == '-'? arg.reduce((num1, num2) => num1 - num2) : 
    param == '*'? arg.reduce((num1, num2) => num1 * num2) : 
    param == '/'? arg.reduce((num1, num2) => num1 / num2) : 
    (() => { throw new Error('Unsupported operation'); })();

//test2 ('*', 1,2,3,4,5);

//num3
test3 = (...arg) => Math.max(...arg);
    
//test3 (1,2,100,4,50);

