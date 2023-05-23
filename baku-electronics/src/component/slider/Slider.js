import React from 'react'
import logo from '../../assets/img/28may-news.jpg'


function Slider() {
  return (
    <>

      <div className='share-info__section'>

        <img src={logo} alt="" />

        <div className='share-info__description'>
          <h6 className='mt-3'>Bütün kampaniyalar</h6><br /><br />
          <h3>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</h3>
          <h6>15-31 may tarixləri arasında alış-verişlərdə müstəqilsən!

            Nağd alışda 50 %-dək endirim!
            Məişət texnikası, TV və kondisioner 0 0 0 18 AY
            Smart-saat və aksesuarlar 0 0 18 AY</h6>
            <a href="">Ətraflı</a><br /> <br />

            <h6>Kampaniyanın sonuna qalıb</h6>
            <h4>07gün:23saat:48dəq</h4>

        </div>
      </div>


    </>
  )
}

export default Slider