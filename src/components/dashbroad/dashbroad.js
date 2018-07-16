import React from "react"
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import { Switch, Route } from 'react-router-dom'
import '../../index.css'


function Genius() {
  return <h2>牛人首页</h2>
}
function Msg() {
  return <h2>消息列表页面</h2>
}
function User() {
  return <h2>个人中心页面</h2>
}

@connect(
  state => state
)
class Dashbroad extends React.Component{

  render() {
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },{
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss'
      },{
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },{
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
  ]
  const {pathname} = this.props.location  
    return(
      <div>
        <NavBar className="fix-header" mode="dark">{navList.find(v=>v.path === pathname).title}</NavBar>
        <div style={{marginTop: 45}}></div>
        <Switch>
          {navList.map(v => (
            <Route
              key={v.path}
              path={v.path}
              component={v.component}
            />
          ))}
        </Switch>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )      
  }  
}

export default Dashbroad