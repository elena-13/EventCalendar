import React, { FC } from 'react';
import { Layout, Row, Menu, Col } from 'antd';
import { useHistory } from 'react-router';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';


const Navbar: FC = () => {
  const router = useHistory()
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <Layout.Header>
      <Row justify="end">
          {isAuth
            ?
            <>
                <div style={{ color: 'white'}}>Alyona Avdoshkina</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                  <Menu.Item
                      onClick={() => console.log('Log out')}
                      key={1}
                    >
                    Log out
                  </Menu.Item>
                </Menu>
              </>
            :
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                  onClick={() => router.push(RouteNames.LOGIN)}
                  key={1}
                >
                  Login
                </Menu.Item>
              </Menu>
          }
      </Row>
    </Layout.Header>

  );
};

export default Navbar;
