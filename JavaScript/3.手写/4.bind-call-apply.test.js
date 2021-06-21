const { bind, call, apply, bindNotNew } = require('./4.bind-call-apply');

const obj = {
  a: 1,
  demo(ar) {
    return `${this.a}${ar}`;
  },
};

function Person(name) {
  this.name = name;
}

test('测试 bindNotNew', () => {
  const demo1 = bindNotNew(obj.demo, obj, 1);
  const demo2 = bindNotNew(obj.demo, obj);

  expect(demo1()).toBe('11');
  expect(demo1(2)).toBe('11');
  expect(demo2(2)).toBe('12');

  // 测试 new
  expect(new (bindNotNew(Person, {}, '张三'))()).toEqual({});
});

test('测试支持 new 的 bind', () => {
  const demo1 = bind(obj.demo, obj, 1);
  const demo2 = bind(obj.demo, obj);

  expect(demo1()).toBe('11');
  expect(demo1(2)).toBe('11');
  expect(demo2(2)).toBe('12');

  // 测试 new
  expect(new (Person.bind({}, '张三'))()).toEqual({ name: '张三' });
});

test('测试 call', () => {
  console.log = jest.fn();
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  function Food(name, price) {
    call(Product, this, name, price);
    this.category = 'food';
  }

  expect(new Food('cheese', 5).name).toBe('cheese');

  // 使用 call 方法调用匿名函数
  const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' },
  ];

  for (let i = 0; i < animals.length; i++) {
    call(
      function (i) {
        this.print = function () {
          console.log('#' + i + ' ' + this.species + ': ' + this.name);
        };
        this.print();
      },
      animals[i],
      i
    );
  }
  expect(console.log.mock.calls[0][0]).toBe('#0 Lion: King');
  expect(console.log.mock.calls[1][0]).toBe('#1 Whale: Fail');

  // 使用 call 方法调用函数并且不指定第一个参数（argument）
  // 但是无法达到 Function.prototype.call 在严格模式下的那种情况：
  // Uncaught TypeError: Cannot read property 'sData' of undefined
  globalThis.sData = 'Wisen';

  function display() {
    return `sData value is ${this.sData}`;
  }

  expect(call(display)).toBe('sData value is Wisen');
});

test('测试 apply', () => {
  // 用 call 调用父构造函数
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  function Food(name, price) {
    apply(Product, this, [name, price]);
    this.category = 'food';
  }

  expect(new Food('cheese', 5).name).toBe('cheese');
});
