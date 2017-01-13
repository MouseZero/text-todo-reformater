const F = require('./functional');
const FAIL = "!------------FAIL----------------!"
const PASS = "pass"

// Test container
//////////////////////////////////
assert(true, 'Hello there');
assert(false, 'hi again');

function assert(bool, desc){
  if(bool){
    console.log(PASS, desc);
  }else{
    console.log(FAIL, desc);
  }
}
