import React, { useState, useMemo, useCallback } from 'react'
import {Link, NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import DropDown from './components/DropDown'

import { DROP_NAV_LIST, TOP_NAV_LINKS } from '../../../constants'
import IMAGES from '../../../resources/images'



const topNavList = TOP_NAV_LINKS.map(({ link: to, value }, key) => (
  <NavLink className='navItem' { ...{ key, to } } >{ value }</NavLink>
));

const bottomNavList = DROP_NAV_LIST.map((item, key) => <DropDown {...{ ...item, key, order: key } } />);

const MainHeader = () => {
    const memoTopNavList = useMemo(() => topNavList, []),
          memoBottomNavList = useMemo(() => bottomNavList, [])

    return (
        <header>
          <div className='content'>
            <div className='leftSide'>
              <Link className='navLogo' to='/'>
                <img src={IMAGES.logo}/>
              </Link>
            </div>
            <div className='rightSide'>
              <div className='topNav'>{ memoTopNavList }</div>
              <div className='bottomNav'>{ memoBottomNavList }</div>
            </div>
          </div>
        </header>
    )
}

export default MainHeader
