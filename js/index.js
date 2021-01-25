//Task 1
let a = 3;
let b = 5;
let c;
let task_1_result = "var a = " + a +"\n" +
    "var b = " + b +"\n" +
    "var c;" + "\n" +
    "----------" + "\n" + 
    "a + b = " + (a+b) + "\n" +
    "a - b = " + (a-b) + "\n" +
    "a * b = " + (a*b) + "\n" +
    "a / b = " + (a/b) + "\n" +
    "a % b = " + (a%b) + "\n" +
    "a += b = " + (a+=b) + "\n" +
    "a -= b = " + (a-=b) + "\n" +
    "a *= b = " + (a*=b) + "\n" +
    "a /= b = " + (a/=b) + "\n" +
    "a %= b = " + (a%=b) + "\n" +
    "a == b = " + (a==b) + "\n" +
    "a != b = " + (a!=b) + "\n" +
    "a > b = " + (a>b) + "\n" +
    "a < b = " + (a<b) + "\n" +
    "!a && c = " + (!a&&c) + "\n" +
    "!a || !c = " + (!a||!c) + "\n";

//alert(task_1_result);

//Task 2
let first_name = "Xuechen";
let last_name = "Fu";
let email = "fu000062@algonquinlive.com";
let output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

output = task_1_result + output;

alert(output);
