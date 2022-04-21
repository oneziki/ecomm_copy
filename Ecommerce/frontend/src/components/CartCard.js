import React from 'react';
import Roblox from '../assets/images/Roblox.png'

function CartCard(props) {
  return (
    <div className="py-2">
    <div class="row m-0 bg-light" style={{height: 102, borderRadius: 13,}}>
    <span style={{backgroundColor: '#79B420', position: 'absolute', borderRadius: '9px 0 13px 0', color: 'black', justifyContent: 'center', maxWidth: 56, height: 26, display: 'flex', fontSize: 16, fontWeight: 700, boxShadow: '0px 3px 6px #8888881f'}}>-25%</span>
      <div class="col-md-6 d-flex align-items-center p-0">
        <img src={Roblox} alt="" style={{height: 102, width: 120, borderRadius: 10}} />
        <span className="px-4">
          <span style={{fontSize: 14, color: 'grey'}}>Uber</span> <br />
          <span style={{fontSize: 20, fontWeight: 600, color: 'black'}}>PlayStation Store Wallet Top Up</span> <br />
          <span style={{fontSize: 14, fontWeight: 600, color: '#79B420'}}>R 200.50 <span style={{fontSize: 14, color: 'grey'}}><s>R 250</s></span></span>
        </span>
      </div>
      <div class="col-md-6 d-flex align-items-center p-0">
        incrementer price remove
      </div>
    </div>
  </div>
  )
}

export default CartCard