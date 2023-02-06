import React from 'react'
import Table from 'react-bootstrap/Table'

const CardDetail = () => {
  return (
    <div className="container mt-2">
    <h2 className='text-center'>Iteams Details Page
    </h2>

    <section className='container mt-3'>
      <div className="iteamsdetails">
      {
       
        
            <>
            <div className="items_img">
          <img src="https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg" alt ="img"/>
        </div>

        <div className="details">
          <Table>
            <tr>
              <td>
                <p> <strong>Restaurant</strong>  : Masala</p>
                <p> <strong>Price</strong>  : ₹200</p>
                <p> <strong>Dishes</strong>  : Noida</p>
                <p> <strong>Total</strong>  :₹  100</p>
                <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                <span style={{fontSize:24}}>-</span>
                <span style={{fontSize:22}}>1</span>
                <span style={{fontSize:24}}>+</span>

                </div>

              </td>
              <td>
                <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>3.4 ★	</span></p>
                <p><strong>Order Review :</strong> <span >Good	</span></p>
                <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
              </td>
            </tr>
          </Table>
        </div>
      
            </>
          
       
      }
      </div>
    </section>
  </div>
  )
}

export default CardDetail
