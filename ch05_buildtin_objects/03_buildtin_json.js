let data = {
  "employees" : [
    {'fname' : '영', 'iname ' : '김'},
    {'fname' : '영', 'iname ' : '김'},
    {'fname' : '영', 'iname ' : '김'}
  ]
}
//
console.log(data.employees[2].iname +data.employees[2].fname);

console.log(data);

let stringValue = JSON.stringify(data);
console.log(stringValue);

let text = '{"employees":[{"fname":"zero","iname ":"김"},{"fname":"영","iname ":"김"},{"fname":"영","iname ":"김"}]}';

let jsObj = JSON.parse(text);
console.log(jsObj);

/*
JS Object <->JSON으로 왔다갔다 하는 부분은 매우 자주일어난다.
JSON.parse(JSONString); 과 JSON.stringify(JSObject);항상 사용...
*/