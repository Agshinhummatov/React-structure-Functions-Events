import React from 'react'
import logo from '../../assets/img/logo.svg'
import Icon from '@mdi/react';
import { mdiAccount, mdiAlbum } from '@mdi/js';




function Header() {
    return (
        <>

            <div className='sale-header'>

                <p>İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>

            </div>

            <div className='header'>

           

          



                    <div className='col-3 '>
                        <img src={logo} alt="" />
                    </div>

                    <div className='col-5 '>

                        <input type="text" placeholder='Axtaris' />

                        <Icon path={mdiAccount}
                            title="User Profile"
                            size={5}

                            color="red"


                        />



                        <Icon path={mdiAlbum} size={1} />
                    </div>

                

            

            </div>
        </>
    )
}

export default Header