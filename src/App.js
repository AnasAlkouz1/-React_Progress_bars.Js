


import React,{useCallback
} from 'react'
import { Progressbars_v0,Progressbars_v1 } from './Components/_progress-bar/_progress-bar'



function App() {

const _Progressbar=useCallback(()=>{
const _Colors_Array=['#A7D2CB','#F2D388','#C98474']
const _itams=_Colors_Array.map((x,index,array)=>{
return (
<Progressbars_v0  key={x}
valuemin='0'
_progress_styled={{marginBlock:'1rem'}}
valuemax='100'
valuenow='0%'
delay={Number(`${index+3}${0}`)}
backgroundcolor={[x,4]}
/>
)
})


return _itams
})

const _Progressbar_withChildren=useCallback(()=>{
const _Colors_Array=['#3AB0FF','#FFB562','#F87474']
const _itams=_Colors_Array.map((x,index,array)=>{
return (
<Progressbars_v1  key={x}
_progress_styled={{borderRadius: '5px',height: '60px',marginBlock:'1rem'}}
_progress_bar_styled={{color:index==0 ? 'black' : '#dedede' }}
valuemin='0'   
valuemax='100'
valuenow='0%'
delay={Number(`${index+1}${0}`)}
backgroundcolor={[x,4]}
isEnd={(isEnd)=>{console.log(x)}}
>
<div style={{
display: 'flex',
justifyContent: 'center',
color:x,
marginBlock:'1rem',
fontSize:'18px',
}}>Component {x}</div>
</Progressbars_v1>
)
})


return _itams
})



return(
<>
<div style={{
marginTop:'7rem',
}}>
<_Progressbar_withChildren/>
</div>

<div style={{
marginTop:'2rem'
}}>
<_Progressbar/>
</div>

</>
)


}

export default App;
