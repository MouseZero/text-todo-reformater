const R = require('ramda');

const container = (value) => (value.val) ? value : {val: value};

const map = R.curry(
  (fn, value) => Object.assign(
    {},
    container(value),
    {val: fn(container(value).val)})
);

module.exports = {
  container,
  map
}
