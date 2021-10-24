import React from "react";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import {ProfileAvatar, ProfileCoin, ProfileCourse, ProfileHistory, ProfileInfo, ProfileProject} from './components'

export default function Profile() {
    let {url} = useRouteMatch()
  return (
    <main className="profile" id="main">
      <section>
        <ProfileAvatar />
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink exact to={`${url}`}>Thông tin tài khoản</NavLink>
              <NavLink to={`${url}/khoa-hoc`}>Khóa học của bạn</NavLink>
              <NavLink to={`${url}/du-an`}>Dự án đã làm</NavLink>
              <NavLink to={`${url}/thanh-toan`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route path={`${url}`} exact component={ProfileInfo}/>
                <Route path={`${url}/khoa-hoc`} component={ProfileCourse}/>
                <Route path={`${url}/du-an`} component={ProfileProject}/>
                <Route path={`${url}/thanh-toan`} component={ProfileHistory}/>
                <Route path={`${url}/coin`} component={ProfileCoin}/>
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
