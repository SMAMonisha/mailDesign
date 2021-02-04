import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const SidebarExampleVisible = () => (
  <Sidebar
  as={Menu}
  animation='overlay'
  icon='labeled'
  inverted
  vertical
  visible
  width='wide'
  color=" blue"

>
  <Menu.Item as='a'>
    <Icon name='home' />
    Henry Fox
  </Menu.Item>
  <Menu.Item as='a'>
    <img alt=""
      src="D:\Selise task\emailbox\public\Resources 2\Image.png"
       style={{alignContent:"center",width: 20, height: 20,fontSize:30,borderColor:"skyblue"}}
              />
   
    <Link  style={{ color:"blue" }} to={{
              pathname:'/EmailDetails',
              mailID:"designmodo",
            }} > Designmodo</Link>
  </Menu.Item>
  <Menu.Item as='a'>
    <Icon name='camera' />
    Hey Designer
  </Menu.Item>
  <Sidebar
  as={Menu}
  animation='overlay'
  icon='labeled'
  inverted
  vertical
  visible
  width='very thin'
  color="gray"

>
  <Menu.Item as='a'>
    <Icon name='mail' />
    mail
  </Menu.Item>
  <Menu.Item as='a'>
    <Icon name='mail' />
    Mail
  </Menu.Item>
  <Menu.Item as='a'>
    <Icon name='star' />
    
  </Menu.Item>
</Sidebar>
</Sidebar>
   
)

export default SidebarExampleVisible