import React from 'react'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
import product3 from '../../assets/img/product3.jpg'
import product4 from '../../assets/img/product4.jpg'
import product5 from '../../assets/img/product4.jpg'
import product6 from '../../assets/img/product4.jpg'
import product7 from '../../assets/img/product5.jpg'
import product8 from '../../assets/img/product5.jpg'
import product9 from '../../assets/img/product6.jpg'
import product10 from '../../assets/img/product7.jpg'
import product11 from '../../assets/img/product8.jpg'
import product12 from '../../assets/img/product9.jpg'
import product13 from '../../assets/img/product10.jpg'
import product14 from '../../assets/img/product11.jpg'
import product15 from '../../assets/img/product12.jpg'
import product16 from '../../assets/img/product13.jpg'
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';



function Product() {
  return (
    <div>


      <div className='product mt-5'>

        <div className='col-3'>
          <div className='product-category'>
            <h6>Kampaniyada iştirak edən məhsullar</h6>
            <ul>



              <li><span>Kondisionerlər</span><span>(32)</span></li>
              <li><span>Paltaryuyan maşınlar</span>(61)<span></span></li>
              <li><span>Kombi</span><span>(19)</span></li>
              <li><span>Soyuducular </span><span>(71)</span></li>
              <li><span>Tozsoranlar </span><span>(46)</span></li>
              <li><span>Qabyuyan maşınlar</span>(28)<span></span></li>
              <li><span>Bişirmə panelləri</span><span>(31)</span></li>
              <li><span>Quraşdırılan sobalar</span><span>(29)</span></li>
              <li><span>Aspiratorlar</span><span>(35)</span></li>
              <li><span>Mətbəx plitələri</span><span>(3)</span></li>
              <li><span>Qəhvə dəmləyən, qəhvə maşınları</span><span>(34)</span></li>
              <li><span>Tosterlər</span><span>(44)</span></li>
              <li><span>Blenderlər</span><span>(95)</span></li>
              <li><span>Mikserlər</span><span>(30)</span></li>
              <li><span>Elektrik çaydanlar və termopotlar</span><span>(64)</span></li>
              <li><span>Qəhvə üyüdücüləri</span><span>(3)</span></li>
              <li><span>Ətçəkən maşınlar </span><span>(29)</span></li>
              <li><span>Elektromaşa</span><span>(8)</span></li>
              <li><span>Fenlər</span><span>(10)</span></li>
              <li><span>Ütülər və buxar generatorları </span><span>(79)</span></li>
              <li><span>Mətbəx kombaynları</span><span>(42)</span></li>
              <li><span>Çörək bişirən</span><span>(8)</span></li>
              <li><span>Buxarlı bişiricilər</span><span>(1)</span></li>
              <li><span>Şirəçəkənlər </span><span>(24)</span></li>
              <li><span>Saç qırxan</span><span>(8)</span></li>
              <li><span>Trimmerlər</span><span>(15)</span></li>
              <li><span>Epilyatorlar</span><span>(7)</span></li>
              <li><span>Mikroiqlim</span><span>(9)</span></li>
              <li><span>Ev və ofis telefonları</span><span>(17)</span></li>
              <li><span>Smartfonlar, mobil telefonlar</span><span>(257)</span></li>
              <li><span>Qapaqlar</span><span>(25)</span></li>
              <li><span>Mətbəx aksesuarları</span><span>(35)</span></li>
              <li><span>Tavalar</span><span>(125)</span></li>
              <li><span>Qazanlar</span><span>(44)</span></li>
              <li><span>Tava qazan dəstləri</span><span>(29)</span></li>
              <li><span>Boşqablar və salat qabları </span><span>(14)</span></li>
              <li><span>Kronşteyn və divar asılqanları </span><span>(15)</span></li>
              <li><span>Mətbəx tərəziləri</span><span>(3)</span></li>
              <li><span>Kombi radiatorları</span><span>(5)</span></li>
              <li><span>Şəbəkə avadanlığı</span><span>(5)</span></li>
              <li><span>Döşəmə tərəziləri</span><span>(2)</span></li>
              <li><span>Yemək dəstləri</span><span>(5)</span></li>
              <li><span>Televizorlar</span><span>(52)</span></li>
              <li><span>Bişirmə üçün qablar</span><span>(19)</span></li>
              <li><span>Multistayler</span><span>(1)</span></li>
              <li><span>Notbuklar</span><span>(113)</span></li>
              <li><span>Ev kinoteatrları və saundbarlar</span><span>(13)</span></li>
              <li><span>Mikrodalğalı sobalar</span><span>(5)</span></li>
              <li><span>Fotoaparatlar</span><span>(5)</span></li>
              <li><span>Dondurucu kameralar</span><span>(1)</span></li>
              <li><span>Xarici toplayıcı disklər HDD və SSD</span><span>(1)</span></li>
              <li><span>Elektrik üzqırxan</span><span>(11)</span></li>
              <li><span>Elektrik sobalar</span><span>(1)</span></li>
              <li><span>Printerlər</span><span>(9)</span></li>
              <li><span>Kartriclər</span><span>(3)</span></li>
              <li><span>USB və AUX kabellər</span><span>(25)</span></li>
              <li><span>Notbuk üçün çantalar</span><span>(15)</span></li>
              <li><span>Su qızdırıcıları, qazanlar, kolonkalar</span><span>(2)</span></li>
              <li><span>Buxar dolabı</span><span>(2)</span></li>
              <li><span>Çəngəl-bıçaq dəstləri</span><span>(7)</span></li>
              <li><span>Quruducu maşınlar</span><span>(4)</span></li>
              <li><span>Çaydan və termoslar</span><span>(4)</span></li>
              <li><span>Musiqi mərkəzləri</span><span>(8)</span></li>
              <li><span>Planşetlər</span><span>(37)</span></li>
              <li><span>Samovarlar</span><span> (1)</span></li>
              <li><span>Xarici akkumulyatorlar, Power Bank</span><span>(14)</span></li>
              <li><span>Qulaqlıqlar</span><span>(54)</span></li>
              <li><span>Elektrik diş fırçaları, irriqatorlar</span><span>(5)</span></li>
              <li><span>Adapterlər</span><span>(12)</span></li>
              <li><span>Klaviatura və kompüter siçanları</span><span>(16)</span></li>
              <li><span>Tək divanlar</span><span>(21)</span></li>
              <li><span>Vitrin</span><span>(11)</span></li>
              <li><span>Masa</span><span>(24)</span></li>
              <li><span>Döşəklər</span><span>(29)</span></li>
              <li><span>Alt TV stendlər</span><span> (31)</span></li>
              <li><span>Yataq yanı tumbalar</span><span>(11)</span></li>
              <li><span>Dolablar</span><span>(8)</span></li>
              <li><span>Iş masası</span><span>(4)</span></li>
              <li><span>Üst TV stendlər</span><span>(25)</span></li>
              <li><span>Komod və makiyaj masası</span><span>(13)</span></li>
              <li><span>Konsollar</span><span>(22)</span></li>
              <li><span>Kreslolar</span><span>(12)</span></li>
              <li><span>Kitab dolabı </span><span>(4)</span></li>
              <li><span>Künc divanlar</span><span>(1)</span></li>
              <li><span>Dəstlər</span><span>(1)</span></li>
              <li><span>Velosipedlər</span><span>(17)</span></li>
              <li><span>Hamam üçün tekstil</span><span>(1)</span></li>
              <li><span>Smart saatlar və fitnes qolbaqları</span><span>(7)</span></li>
              <li><span>Elektrosamokatlar</span><span>(12)</span></li>
              <li><span>Dispenserlər</span><span>(1)</span></li>
              <li><span>Uzatma kabelləri və başlıqlar </span><span>(2)</span></li>
              <li><span>Elektroskuter</span><span>(2)</span></li>
              <li><span>Müxtəlif</span><span>(4)</span></li>
              <li><span>Müxtəlif</span><span>(5)</span></li>
              <li><span>Smartfon üçün qeympadlar, triqqerlər </span><span>(1)</span></li>
              <li><span>Çay və qəhvə dəstləri</span><span> (5)</span></li>
              <li><span>Qiroskuterlər və siqveylər</span><span> (1)</span></li>
              <li><span>Masaüstü kompüterlər</span><span> (1)</span></li>
              <li><span>Konvektorlar</span><span> (1)</span></li>
              <li><span>Yaddaş kartları</span><span>(3)</span></li>
              <li><span>Fleş toplayıcı</span><span>(3)</span></li>
              <li><span>Fritozlar</span><span>(3)</span></li>
              <li><span>Moped</span><span>(18)</span></li>
              <li><span>Gödəkçə</span><span>(5)</span></li>
              <li><span>Əlcək</span><span>(2)</span></li>
              <li><span>Bot</span><span>(2)</span></li>
              <li><span>Kamuflyaj</span><span>(1)</span></li>
              <li><span>Yorğanlar</span><span>(1)</span></li>
              <li><span>Yastıqlar</span><span>(1)</span></li>
              <li><span>Veb kameralar</span><span>(3)</span></li>
              <li><span>Selfi çubuqları və ştativlər</span><span>(1)</span></li>
              <li><span>Ekşn kameralar</span><span>(3)</span></li>
              <li><span>Monitorlar</span><span>(3)</span></li>
              <li><span>Monobloklar</span><span>(3)</span></li>
              <li><span>Video oyunlar</span><span>(8)</span></li>
              <li><span>Ağıllı ev</span><span>(1)</span></li>
              <li><span>Dolab</span><span>(6)</span></li>
              <li><span>Portativ dinamiklər və akustik sistemlər </span><span>(42)</span></li>
              <li><span>Müxtəlif </span><span>(1)</span></li>
              <li><span>Tikiş maşınları </span><span>(1)</span></li>
            </ul>
          </div>

        </div>

        <div className='col-9 products'>


          <div className='col-4'>
            <div className='product__card'>
              <img src={product1} alt="" />
              <div className='product__price--discount-price'> <span>300 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Kondisioner LG A12CMH.NGGF-KIT,</p>
                <p>12000 BTU / 30-40 m2, inverter</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1899.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>106</b>₼</span>

                </div>


              </div>

            </div>
          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product2} alt="" />
              <div className='product__price--discount-price'> <span>300 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Kombi DemirDöküm Atron 24 SM-</p>
                <p>KIT</p>


              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1499.9₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>84</b>₼</span>

                </div>


              </div>

            </div>
          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product3} alt="" />
              <div className='product__price--discount-price'> <span>350 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Kombi DemirDöküm Atron 28 SM</p>
                <p>-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1699.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>95</b>₼</span>

                </div>


              </div>

            </div>



          </div>


          <div className='col-4'>
            <div className='product__card'>
              <img src={product4} alt="" />
              <div className='product__price--discount-price'> <span>450 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >1 rey</span>

              </div>

              <div>
                <p>Kondisioner LG I12CFH.NGGF-KIT,</p>
                <p>12000 BTU, İnverter</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1749.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>95</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product5} alt="" />
              <div className='product__price--discount-price'> <span>400 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Kondisioner LG I12CGH.NGGF-KIT</p>
                <p>12000 BTU</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1649.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>92</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product6} alt="" />
              <div className='product__price--discount-price'> <span>550 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Kondisioner LG I24CGH.NGGF-KIT,</p>
                <p>24000 BTU, Invertor</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>2399.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>134</b>₼</span>

                </div>


              </div>

            </div>



          </div>



          
          <div className='col-4'>
            <div className='product__card'>
              <img src={product7} alt="" />
              <div className='product__price--discount-price'> <span>300 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >1 rey</span>

              </div>

              <div>
                <p>Kombi DemirDöküm Nitron Plus 24,</p>
                <p>SM-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1599.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>89</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product8} alt="" />
              <div className='product__price--discount-price'> <span>400 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Kondisioner LG I12CGH.NGGF-KIT</p>
                <p>12000 BTU</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1649.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>92</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product9} alt="" />
              <div className='product__price--discount-price'> <span>270 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu HAIER C2F636CWRG</p>
                <p>SM-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1519.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>85</b>₼</span>

                </div>


              </div>

            </div>



          </div>



          <div className='col-4'>
            <div className='product__card'>
              <img src={product10} alt="" />
              <div className='product__price--discount-price'> <span>600 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >1 rey</span>

              </div>

              <div>
                <p>Soyuducu LG GR-X257CSAV Side by</p>
                <p>Side Refrigerator</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>5999.99 ₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>334</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product11} alt="" />
              <div className='product__price--discount-price'> <span>250 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu BOSCH KGN33NW21U</p>
                <p>12000 BTU</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1499.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>84</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product12} alt="" />
              <div className='product__price--discount-price'> <span>300 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu BOSCH KGN36NL30U</p>
                <p>SM-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1519.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>85</b>₼</span>

                </div>


              </div>

            </div>



          </div>



          <div className='col-4'>
            <div className='product__card'>
              <img src={product13} alt="" />
              <div className='product__price--discount-price'> <span>400 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu BOSCH KGN36XW30U</p>
                <p>SM-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1899.99 ₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>106</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product14} alt="" />
              <div className='product__price--discount-price'> <span>350 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu BOSCH KGN36XW30U</p>
                <p>12000 BTU</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>1799.99₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>100</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product15} alt="" />
              <div className='product__price--discount-price'> <span>350 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu BOSCH KGN49LB30U</p>
                <p>SM-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>2499.99 ₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>139</b>₼</span>

                </div>


              </div>

            </div>



          </div>

          <div className='col-4'>
            <div className='product__card'>
              <img src={product16} alt="" />
              <div className='product__price--discount-price'> <span>430 ₼</span><br />
                <span>
                  Nagd alisa endirim
                </span>
              </div>

              <div>
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <Icon path={mdiStarOutline} size={1} color="gold" />
                <span >0 rey</span>

              </div>

              <div>
                <p>Soyuducu BOSCH KGN56LB30U</p>
                <p>SM-KIT</p>

              </div>

              <div className='product__price--info'>
                <div className='product__price--sale'>
                  <span>Qiymət</span><br />
                  <b>2799.99 ₼</b>
                </div>

                <div>
                  <span>Hissə-hissə ödəniş</span><br />
                  <span>18 ay <b>156</b>₼</span>

                </div>


              </div>

            </div>



          </div>








        </div>
















      </div>





    </div>
  )
}

export default Product