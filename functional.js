module.exports = {
  Container: (value) => (value.val) ? value : {val: value},
  Map: (fn, container) => Object.assign({}, container,{val: fn(container.val)})
}
