import React from 'react';
import { Route } from 'react-router-dom';
import { Breadcrumb, Layout, Menu } from 'antd';
import { FaAdjust } from 'react-icons/fa';
import './Menu.css';
import logo from '../../assets/img/chat.png';
import useMenu from './useMenu';
import withAuth from '../../utils/withAuth';
import PostsView from '../Posts/Posts';
import LogOut from '../../components/Logout/Logout';

const {
  Header, Content, Footer, Sider,
} = Layout;

function MenuView() {

  const {
    imageUser, nameUser, exitApp, collapsed, setCollapsed, selectMenu, newTag,
  } = useMenu();
  return (
    <>

      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo-side-menu" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            onSelect={selectMenu}
          >
            <Menu.Item key="1" icon={<FaAdjust />}>
              Personajes
            </Menu.Item>
          </Menu>
          <div className="logo-side-menu">
            <LogOut
              onExit={exitApp}
            />
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <div className="div1-menu div1-container-menu">
              <div className="logo-menu">
                <img src={logo} alt="logo" className="img-logo-menu" />
              </div>
              <div className="user-menu">
                <div className="Logo-space-menu">
                  <img src={imageUser} alt="" className="imgRedonda-menu" />
                </div>
                <div className="name-space-menu">
                  {nameUser}
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>{newTag}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Route exact path="/posts" component={PostsView} />

            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            @ Christian Robayo 2023
          </Footer>
        </Layout>
      </Layout>
    </>
  );

}

export default withAuth(MenuView);
