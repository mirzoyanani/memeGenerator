import React, { useState } from "react";
import { memeTypes } from "./memetypes";

const MemeGenerator = () => {
  const[topText,setTopText] = useState('');
  const[bottomText,setBottomText] = useState('');
  const[memeValue,setMemeValue] = useState('10-Guy');
  const[src,setSrc]=useState('')
  function generate(e){
  e.preventDefault();
  setSrc(`https://apimeme.com/meme?meme=${memeValue}&top=${topText}&bottom=${bottomText}`)
  }
  return (
    <div>
      <div className="title">Meme Generator</div>
      <br />
      <form onSubmit={generate}>
        <label>
        <div >Meme</div>
          <select  value={memeValue} onChange={(e)=>{setMemeValue(e.target.value)}}>
            {memeTypes.map((memeType) => {
              return (
                <option key={memeType.value} value={memeType.value}>
                  {memeType.value}
                </option>
              );
            })}
          </select>
        </label>
        <div>
            <div>Top Text</div>
        <input type="text" name="" id="" value={topText}  onChange={(e)=>{setTopText(e.target.value)}}/>
        </div>
        <div>
        <div>Bottom Text</div>
        <input type="text" name="" id=""   value={bottomText}  onChange={(e)=>{setBottomText(e.target.value)}}/>
        </div>
        <button type="submit">Generate</button> 
      </form>
        <img src={src}  alt="" />
    </div>
  );
};

export default MemeGenerator;
