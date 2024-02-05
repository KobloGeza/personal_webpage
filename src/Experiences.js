import React, { useEffect, useState } from "react";

function RenderList({list}) {
    let text = [];
    for (let i in list) { 
      // Array.isArray(list[i]) ? (
      //   text.push(<RenderList list={list[i]}/>)
      // ) : (
      //   text.push(<li>{list[i]}</li>)
      // )
      if (Array.isArray(list[i])) {
        text.push(<RenderList list={list[i]}/>)
      } else {    
        text.push(<li>{list[i]}</li>)
      }
    }
  
    return <ul>{text}</ul>
  }
  
export default function RenderExperience(experiences) {
    // const [gettext, settext] = useState("");

    // useEffect(() => {
    //   let text = [];
    //   for (let i in experiences) { 
    //       let e = experiences[i]
    //       text.push(<h5 class="b-work-title">{e.title}</h5>)
    //       text.push(<h5 class="b-place-and-timeframe">{e.place}</h5>)
    //       text.push(<h5 class="b-place-and-timeframe">{e.time}</h5>)
    //       text.push(<RenderList list={e.resposibilities}/>)
    //   }
    //   settext(text)  
    // }, []); 	

    // return gettext

    let text = [];
    for (let i in experiences) { 
        let e = experiences[i]
        text.push(<h2 className="b-work-title">{e.title}</h2>)
        text.push(<h3 className="b-place-and-timeframe">{e.place}</h3>)
        text.push(<h3 className="b-place-and-timeframe">{e.time}</h3>)
        text.push(<RenderList list={e.resposibilities}/>)
    }

    return <>{text}</>
}

