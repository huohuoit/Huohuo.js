// 创建构造函数 MVVM（基于 Vue2.0）
// ES6传值优化处理 赋初始值options = {} 相当于options = options || {}
function MVVM(options = {}) {
    // 模仿 Vue 将属性挂载一下
    this.$options = options;
    // 属性代理：实现属性访问 vm._data = vm.data.xxx
    let data = this._data = this.$options.data;
    
    // 数据劫持
    observe(data);
    // 数据劫持完成后   让 this 代理 this._data
    
}