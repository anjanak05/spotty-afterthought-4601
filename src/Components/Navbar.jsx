import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { Box } from '@chakra-ui/react';
import { GrSearch } from 'react-icons/gr';

const Navbar = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const [drop, setDrop] = useState(true);
  const [page, setPage] = useState(false);
  const [t, setT] = useState(true);
  const location = useLocation();
  const userData = useSelector(state => state.authReducer);

  const handledrop = () => {
    setDrop(!drop);
    setPage(!page);
    setT(true);
  };

  const handle = () => {
    setT(!t);
    setDrop(!drop);
    setPage(!page);
  };

  //----------------------------------------------------------responsive sizes--------------------------------

  const [isDesktop, setDesktop] = useState(window.innerWidth > 880);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 880);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div>
          <nav
            style={{
              height: '10vh',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            <Box ml="20px" display="flex" alignItems="center">
              <NavLink
                to="/"
                style={{
                  color: 'rgb(229,16,117)',
                  fontSize: '22px',
                  fontWeight: '1000',
                  fontSize: '26px',
                }}
              >
                INDIEGOGO
              </NavLink>
              <NavLink
                to="#"
                style={{
                  display: 'flex',
                  fontSize: '17px',
                  paddingLeft: '20px',
                  alignItems: 'center',
                }}
                onClick={handledrop}
              >
                Explore {drop ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
              </NavLink>
              <NavLink to="/about-what-we-do" style={{ paddingLeft: '20px' }}>
                What we do
              </NavLink>
              <div></div>
            </Box>

            <div style={{ marginRight: '15px' }}>
              <NavLink
                to="/how-it-work"
                style={{ fontSize: '17px', paddingRight: '20px' }}
              >
                For Entrepreneurs
              </NavLink>
              <NavLink
                to="/start-a-campaign"
                style={{ fontSize: '17px', paddingRight: '25px' }}
              >
                Start a campaign
              </NavLink>

              {isAuth ? (
                location.state
              ) : (
                <NavLink
                  to="/Login"
                  style={{ fontSize: '17px', paddingRight: '20px' }}
                >
                  Login
                </NavLink>
              )}

              {isAuth ? (
                ''
              ) : (
                <NavLink
                  to="/Signup"
                  style={{ fontSize: '17px', paddingRight: '20px' }}
                >
                  Sign Up
                </NavLink>
              )}
            </div>
          </nav>
          {page ? <Box onClick={handle}>{t ? <Dropdown /> : null}</Box> : null}
        </div>
      ) : (
        <div>
          <nav
            style={{
              height: '10vh',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            <Box ml="20px" display="flex" alignItems="center">
              <NavLink
                to="/"
                style={{
                  color: 'rgb(229,16,117)',
                  fontSize: '22px',
                  fontWeight: '1000',
                  fontSize: '26px',
                }}
              >
                INDIEGOGO
              </NavLink>
            </Box>

            <div style={{ display: 'flex' }}>
              <NavLink
                to="#"
                style={{
                  display: 'flex',
                  fontSize: '17px',
                  paddingLeft: '20px',
                  alignItems: 'center',
                }}
                onClick={handledrop}
              >
                {drop ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
              </NavLink>

              <GrSearch style={{ marginLeft: '50%', width: '30%' }} />
            </div>
          </nav>
          {page ? <Box onClick={handle}>{t ? <Dropdown /> : null}</Box> : null}
        </div>
      )}
    </div>
  );
};

export default Navbar;
