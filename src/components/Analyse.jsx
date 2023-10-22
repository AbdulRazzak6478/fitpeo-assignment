import React from 'react'
import '../styles/Analyse.css'
import img65 from '../assets/65.png';
import Barchart from './Barchart';
const Analyse = () => {
  return (
    <>
        <div className="outer">
            <div className="overview">
                <div className="header">
                    <h3>Overview</h3>
                    <select className='down'>
                        <option value="quality">Quarterly</option>
                    </select>
                </div>
                <p>Monthly Earning</p>
                <Barchart />
            </div>
            <div className="customer">
                <h3>Customers</h3>
                <p>Customer that buy products</p>
                <img src={img65} alt="img" />
            </div>
        </div>
    </>
  )
}

export default Analyse