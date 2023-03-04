import { BarsOutlined, MailOutlined, MenuOutlined, MessageOutlined, NotificationOutlined } from '@ant-design/icons/lib/icons';
import { Avatar } from 'antd';
import React from 'react'
import user from '../../assets/users/user-2.jpg';
import './header.css';

const Header = () => {

    return (
        <div className='header'>
            <div className='header__left'>
                <MenuOutlined className="header__leftIcon" />
                <p className='header__leftLink'>Cron.J Todolist</p>
            </div>
            <div className='header__right'>
                <BarsOutlined className='header__rightIcon' />
                <MailOutlined className='header__rightIcon' />
                <MessageOutlined className='header__rightIcon' />
                <Avatar size="large" src={user} />
            </div>
        </div>
    )
}

export default Header