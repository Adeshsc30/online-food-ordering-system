import axios from 'axios'
import React, { useEffect,useState } from 'react'

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:6001/orders').then(res=>{
            setOrders(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const handleOrder = (id) =>{
        axios.get(`http://localhost:6001/orders/accept-order/${id}`).then(res=>{
            console.log(res.data)
        })
    }
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Accept Order</th>
      </tr>
    </thead>
    <tbody>
     {orders.length===0?"No Orders to Display":
     orders.map((v,i)=>{
        return( 
            <tr key={i} > 
            <td>{i+1}</td>
            <td>{v.email}</td>
            <td>{v.quantity}</td>
            <td><button onClick={()=>handleOrder(v._id)}>Accept</button></td>
            </tr>
         )
     })
    // "Have"
     }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ManageOrders
