module.exports = {
  container: (value) => (value.val) ? value : {val: value},
  map: (fn, container) => Object.assign({}, container,{val: fn(container.val)}),
  add: (c1, c2) => Object.assign({}, c1, c2, {val: c1.val + c2.val})
}
