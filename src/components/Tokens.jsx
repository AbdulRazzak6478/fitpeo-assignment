import React from 'react'
import token1 from '../assets/1.png'
import token2 from '../assets/2.png'
import token3 from '../assets/3.png'
import token4 from '../assets/4.png'
import '../styles/Tokens.css'
import { BiUpArrowAlt ,BiDownArrowAlt } from 'react-icons/bi'
const Tokens = () => {
  return (
    <>
        <div className="token-box">
            <div className="token">
                <img src={token1} alt="img" className='token-img' />
                <div className="content">
                    <p className='deal'>Earning</p>
                    <p className='amount'>$198k</p>
                    <p className='percent'> <span> <BiUpArrowAlt /> 37.8% </span>this month</p>
                </div>
            </div>
            <div className="token">
                <img src={token2} alt="img"  className='token-img' />
                <div className="content">
                    <p className='deal'>Orders</p>
                    <p className='amount'>$2.4k</p>
                    <p className='percent'><span className='diff'> <BiDownArrowAlt /> 2%</span> this month</p>
                </div>
            </div>
            <div className="token">
                <img src={token3} alt="img"  className='token-img' />
                <div className="content">
                    <p className='deal'>Balance</p>
                    <p className='amount'>$2.4k</p>
                    <p className='percent'> <span className='diff'> <BiDownArrowAlt /> 2%</span> this month</p>
                </div>
            </div>
            <div className="token">
                <img src={token4} alt="img" className='token-img' />
                <div className="content">
                    <p className='deal'>Total Sales</p>
                    <p className='amount'>$89k</p>
                    <p className='percent'> <span> <BiUpArrowAlt /> 11%</span> this month</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tokens