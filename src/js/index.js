const arr = [11, 22, 33];

let myfunc = (a) => {
  console.log(`'too: '+ ${a}`);
};

const arr2 = [...arr, 44, 55];

myfunc(arr[2]);
