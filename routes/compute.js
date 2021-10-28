var express = require('express');
var router = express.Router();
var myvalue;
/* GET home page. */
router.get('/', function (req, res, next) {
  fake_url = "https://fake.com/path" + req.url
  const url = new URL(fake_url)
  const search_params = url.searchParams
  myvalue = Number(search_params.get("x"))
  res.write(" Rehaman computation Page\n\n");
  // if paramter is not specified  value of Number(search_params.get("x")) is always zero
  //console.log(Number(search_params.get("x"))+"hello")
  if (myvalue == 0)
    myvalue = Math.random()
  res.write("Calculates the values for Math.hypot, Math.clz32and Math.ceil function." + "\n")
  res.write('Math.hypot applied to ' + myvalue + " is " + Math.hypot(myvalue) + "\n");
  res.write('Math.ceil applied to ' + myvalue + " is " + Math.ceil(myvalue) + "\n");
  res.end('Math.clz32 applied to ' + myvalue + " is " + Math.clz32(myvalue));
});

module.exports = router;