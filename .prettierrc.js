module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  endOfLine: 'auto', //必须要加这个。 默认是"lf", 不然有可能会引发 Delete `cr` 编译错误
  //tabWidth: 2, // 加 每行的开始的距离, 可加可不加。 2或者 4都可以:2 是默认的， 4 是 tab 的距离
};
