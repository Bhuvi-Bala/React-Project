import React from 'react'
import "./global.css"

const Result = (props) => {
    let data=props.cenDetails
    
  return (
    <div className='main'>
        <h1>Fetch the data from JSON </h1>
<table className='content' border="2px solid black" cellPadding="6px" cellSpacing="3px">
    <thead>
<tr className='heading'>
    <th>S.NO</th>
    <th>NAME OF MATERIAL</th>
    <th>PRICE</th>
    <th>UOM</th>
    <th>QTY</th>
    <th>TOTAL</th>
</tr>
</thead>
<tbody>
{data.map((x,index)=>
{
    var subtotal = x.qty*x.price;
    return(
        <tr key={index}>

            <td >{index+1}</td>
            <td >{x.name}</td>
            <td >{x.price}</td>
            <td >{x.uom}</td>
            <td >{x.qty}</td>
            <td >{subtotal}</td>
        </tr>
    )
}
)}
</tbody>
<tfoot>
<tr>
    <td colSpan={5} id="tat">Grand Total</td>
    <td>
        {data.reduce((y,z)=>
        {let sum=z.qty*z.price
         let total=y+sum
         return total},0)}
    </td>
</tr>
</tfoot>
</table>
    </div>
  )
}

export default Result