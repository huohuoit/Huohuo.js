const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
const myIsArray = isType('Array');
Array.myIsArray || (Object.defineProperty(Array, 'myIsArray', {
    value: myIsArray,
    enumerable: false,
    configurable: true,
    writable: true
}));
console.log(myIsArray([]));

// 不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上, 因为 call 始终会将第一个参数进行装箱操作，导致基本类型和包装类型无法区分