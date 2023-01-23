const express = require('express'); // to import modules
const bodyParser = require('body-parser');
const app = express(); // using express module

app.use(bodyParser.urlencoded({extended : true}));
// by usning bodyParser we're  able to parse http and by urlencoded we able to get form data


app.get("/", function(req, res) {
  // home rout "/" means home
  res.sendFile(__dirname +"/index.html");
  //res.sendFile(__dirname + "/index.html") find the file and give us the file
});


// "req.body.ele" -- we can access the element(ele)
app.post("/", function(req, res){
  //app.post(target, function(req, res))
  var num1 = Number(req.body.num1); // num1 - is text
  var num2 = Number(req.body.num2);

  var ans = num1 + num2;
  res.send("sum of the numbers is : " + ans);
});

app.get("/bmicalculator", function(req, res){
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
//req = request , res = respond
  var height = parseFloat(req.body.height);
  var weigth = parseFloat(req.body.weigth);
  var bmi = weigth/(height * height);
  res.send("your BMI is : " + bmi);
});
//   port, function
app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
