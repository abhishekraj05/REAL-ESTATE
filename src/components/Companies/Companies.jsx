import React from 'react'
import './Companies.css';

// public img
// import prologis from '../../../public/prologis.png'
// import tower from '../../../public/tower.png'
// import equinix from '../../../public/equinix.png'
// import realty from '../../../public/realty.png'

// Assest img
import prologis from '../../assets/prologis.png'
import tower from '../../assets/tower.png'
import equinix from '../../assets/equinix.png'
import realty from '../../assets/realty.png'

const Companies = () => {
  return (
   <section className="c-wraper">
    <div className="paddings flexCenter innerWidth c-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
    </div>
   </section>
  )
}

export default Companies