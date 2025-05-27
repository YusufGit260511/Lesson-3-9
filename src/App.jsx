import React, { useRef } from 'react';

const App = () => {
  const username = prompt('Enter your name');
  const vaqt = new Date();
  const soat = vaqt.getHours();
  const minute = vaqt.getMinutes();
  const sana = vaqt.toLocaleDateString();
  const random = Math.floor(Math.random() * 100) + 1;
  const divRef = useRef(null);

  let text = '';

  if (soat >=6 && soat <= 18){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    text = 'Light';
  } else{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    text = 'Dark';
  }

  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.fontFamily = 'Itim, cursive';

  return (
    <div ref={divRef} className='w-[766px] h-[557px] shadow-[0_4_4_0_#00000040] shadow-md py-[80px] px-[62px] bg-white rounded-[20px] mt-[80px] flex flex-col justify-between'>
      <h1 className='text-[32px] font-[400]'>Hello my name is: <span className='text-[#FFEE01]'>{username}</span></h1>
      <p className='text-[32px] font-[400]'>Today is: <span className='text-[#FFEE01]'>{sana}</span></p>
      <p className='text-[32px] font-[400]'>Time: <span className='text-[#FFEE01]'>{soat}:{minute}</span></p>
      <p className='text-[32px] font-[400]'>A random number from 0 to 100: </p>
      <p className='text-[150px] font-[700] text-center'>{random}</p>
    </div>
  )
}

export default App
