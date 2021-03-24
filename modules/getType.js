// 数据类型判断方法
function getType(obj) {
    const type = typeof obj;
    // 判断是否是基础数据类型
    if (type !== 'object') {
        // 是的话直接返回
        return type;
    }
    // 是复杂数据类型：通过 Object.prototype.toString.call(obj) 得到 [object obj]，使用正则拿到 obj 的值即为该数据的类型
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');     // 注意正则中间有个空格
}

// 注意：不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上, 因为 call 始终会将第一个参数进行装箱操作，导致基本类型和包装类型无法区分