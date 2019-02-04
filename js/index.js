const num = parseInt(prompt('Enter Fibinachi number'));

const result = fibLop(num);
alert(result);

function fibLop(num){
    let x = 0;
    let y = 1;

      for( let i = 0; i < num; i++){
          let next = x;
          x = y;
          y = next + y;
        }
      return x;
} 