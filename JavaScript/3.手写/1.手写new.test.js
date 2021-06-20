const newObj = require('./1.手写new');

test('测试自己实现的new', () => {
  function Person(name, height) {
    this.name = name;
    this.height = height;
  }

  Person.prototype.sayHi = function () {
    return `Hi, I'm ${this.name}`;
  };

  var peo1 = new Person('张三', 180);
  var peo2 = newObj(Person, '张三', 180);

  expect(peo2.name).toBe(peo1.name);
  expect(peo2.sayHi()).toEqual(peo1.sayHi());
});
