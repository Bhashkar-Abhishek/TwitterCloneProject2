import React from 'react'
import styles from  './Sidebar.module.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <TwitterIcon className={styles.twitterIcon}/>
      <SidebarOption active Icon={AddHomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
      <SidebarOption Icon={LowPriorityIcon} text="Twitter Blue"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
      <Button variant="outlined" className={styles.sidebar_Tweet}>Tweet</Button>
    </div>
  )
}

export default Sidebar