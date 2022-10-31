
import React ,{useState,useRef,useEffect,useMemo} from 'react'
import './_styled.css'
import classNames from 'classnames'
import hexToRgb from './_HexToRgb'











export const Progressbars_v0=(props)=>{
const [_runKey,_setrunKey]=useState(false)
let _delay=props.delay || 30
const progressbar_run=useRef(null)
const _progressbar_value=useRef(props.valuenow || '0%')
const _classes_bar=classNames({
'progress-bar-striped':props.striped || false
})
let __backgroundColor=useMemo(()=>{ 
let _color_c=props.backgroundcolor?.[1]==undefined ||  props.backgroundcolor?.[1] > 9  ?  0.5  : Number( `0.${props.backgroundcolor[1]}` )
let _css_colors=
props.backgroundcolor?.[0]==undefined || ''  ? (
[{backgroundColor:'#dedede'},{backgroundColor: ` rgb(${hexToRgb('#dedede').join(',')},${String(_color_c)})  `    }]
) : (
[{backgroundColor:props.backgroundcolor[0]},{backgroundColor: `rgb(${hexToRgb(props.backgroundcolor[0]).join(',')},${String(_color_c)}) `}]
)
return _css_colors;
},[])





const _progress_styled={

marginInline:'2rem',
height: '40px',
borderRadius: '50rem',
...props._progress_styled,
...__backgroundColor[1]
}
const _progress_bar_styled={
width:`${_progressbar_value.current}`,
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontSize: '16px',
...props._progress_bar_styled,
...__backgroundColor[0]
}



useEffect(()=>{
if(_progressbar_value.current!=='100%')progressbar_run.current()
},[_runKey])
progressbar_run.current=()=>{
const _v=Number(`${_progressbar_value.current.split('')[0]}${_progressbar_value.current.split('')[1]}`)
const _run=setTimeout(()=>{
_setrunKey(!_runKey)
_progressbar_value.current=`${ Number(`${!isNaN(_v) ? _v : _progressbar_value.current.split('')[0]   }`) + 1}%`
},_delay)
}


return (
<>
<div className='progress mt-3 mb-4' style={_progress_styled}>
<div className={`progress-bar progress-bar-animated ${_classes_bar}`} role='progressbar' 
style={_progress_bar_styled} 
aria-valuenow={`${_progressbar_value.current.split('')[0]}${_progressbar_value.current.split('')[1]}`}
aria-valuemin={props.valuemin || '0'}
aria-valuemax={props.valuemax || '0'}
>{_progressbar_value.current}</div>
</div>


</>


)


}



//FIXME:



export const Progressbars_v1=(props)=>{
const [_runKey,_setrunKey]=useState(false)
const [_isEnd,_set_isEnd]=useState(false)
let _delay=props.delay || 30
let _delay_children=800 ///Show Childern delay


const progressbar_run=useRef(null)
const _progressbar_value=useRef(props.valuenow || '0%')
const _classes_bar=classNames({
'progress-bar-striped':props.striped || false
})

let __backgroundColor=useMemo(()=>{ 
let _color_c=props.backgroundcolor?.[1]==undefined ||  props.backgroundcolor?.[1] > 9  ?  0.5  : Number( `0.${props.backgroundcolor[1]}` )
let _css_colors=
props.backgroundcolor?.[0]==undefined || '' ? (
[{backgroundColor:'#dedede'},{backgroundColor: ` rgb(${hexToRgb('#dedede').join(',')},${String(_color_c)})  `    }]
) : (
[{backgroundColor:props.backgroundcolor[0]},{backgroundColor: `rgb(${hexToRgb(props.backgroundcolor[0]).join(',')},${String(_color_c)}) `}]
)
return _css_colors;
},[])





const _progress_styled={

marginInline:'2rem',
height: '40px',
borderRadius: '50rem',
...props._progress_styled,
...__backgroundColor[1]
}
const _progress_bar_styled={
width:`${_progressbar_value.current}`,
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontSize: '16px',
...props._progress_bar_styled,
...__backgroundColor[0]
}






useEffect(()=>{
if(_progressbar_value.current!=='100%'){
progressbar_run.current()
}else{
setTimeout(()=>{
_set_isEnd(true)
if(props?.isEnd )props.isEnd(true)
},_delay + _delay_children) //Show Childern delay
}
},[_runKey])


progressbar_run.current=()=>{
const _v=Number(`${_progressbar_value.current.split('')[0]}${_progressbar_value.current.split('')[1]}`)
const _run=setTimeout(()=>{ 
_progressbar_value.current=`${ Number(`${!isNaN(_v) ? _v : _progressbar_value.current.split('')[0]   }`) + 1}%`
_setrunKey(!_runKey)
},_delay)
}


return (
<>
{_isEnd==false ? (
<div className='progress mt-3 mb-4' style={_progress_styled}>
<div className={`progress-bar progress-bar-animated ${_classes_bar}`} role='progressbar' 
style={_progress_bar_styled} 
aria-valuenow={`${_progressbar_value.current.split('')[0]}${_progressbar_value.current.split('')[1]}`}
aria-valuemin={props.valuemin || '0'}
aria-valuemax={props.valuemax || '0'}
>{_progressbar_value.current}</div>
</div>
):(
<>
{props.children || <></>}
</>
) }

</>


)


}

/*
<Progressbars_v1 
/// option
+
isEnd={(_key)=>_function() || setState}>
{ Children}  
</Progressbars_v1>
*/





/* FIXME:  option
valuemin='0'
valuemax='100'
valuenow='0%'
delay={20}
striped={true | false }
_progress_styled//
_progress_bar_styled//
backgroundcolor={['#8CC0DE',4 ]} 
*/




