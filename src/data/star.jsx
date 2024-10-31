const starNum = 20;

export const runLoop = () => {
  let text = '';
  for (let i = 0; i < starNum; i++) {
    for (let y = starNum - i; y > 0; y--) {
      text += ' ';
    }
    for (let j = 0; j <= i; j++) {
      text += '*';
    }
    for (let x = 0; x < i; x++) {
      text += '*';
    }
    text += '\n';
  }

  for (let i = 0; i <starNum/2;i++){
    
    for (let j = starNum; j >= starNum/4; j--){
      text+=" "
    }

    for (let x = 0; x < starNum/2; x++){
      text+="*"
    }
    text += '\n';
  }

  return text;
};

// export function Starthing() {
//   return (
//     <>
//       <pre>{runLoop()}</pre>
//     </>
//   );
// }
