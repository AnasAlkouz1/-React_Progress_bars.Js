


const hexToRgb = (hex) =>{
if(hex!=='' &&  hex.length==7 && typeof hex=='string'  ){
return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
,(m, r, g, b) => '#' + r + r + g + g + b + b)
.substring(1).match(/.{2}/g)
.map(x => parseInt(x, 16))
}else{
return '#dedede'.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
,(m, r, g, b) => '#' + r + r + g + g + b + b)
.substring(1).match(/.{2}/g)
.map(x => parseInt(x, 16))
}

}

export default  hexToRgb

