import React from 'react'
import logo from '../../assets/img/logo.svg'
import Icon from '@mdi/react';
import { mdiPhone, mdiAccountOutline, mdiHeartOutline, mdiScaleUnbalanced, mdiCartOutline } from '@mdi/js';





function Header() {
    return (
        <>
            <header>

                <div className='sale-header'>

                    <p>İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>

                </div>

                <div className='header'>







                    <div className='col-3 mt-4'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='col-2 mt-5'>

                        <input type="text" placeholder='Axtariş' />






                    </div>

                    <div className='col-7 mt-5'>

                        <div className='header__nav'>

                            <ul>
                                <li>Kampaniyalar</li>
                                <li>Mağazalar</li>
                                <li>Digər</li>
                            </ul>

                            <div className='header__call-number'>

                                <b className='mt-5'>143</b>

                                <Icon className='icon' path={mdiPhone} size={1.5} />

                            </div>

                            <div className='header__user mt-2'>

                                <Icon className='icon' path={mdiAccountOutline} size={1.5} />
                                <Icon className='icon' path={mdiHeartOutline} size={1.5} />
                                <Icon className='icon' path={mdiScaleUnbalanced} size={1.5} />
                                <Icon className='icon' path={mdiCartOutline} size={1.5} />
                            </div>





                        </div>



                    </div>




                </div>
                <hr />
            </header>

        </>
    )
}

export default Header