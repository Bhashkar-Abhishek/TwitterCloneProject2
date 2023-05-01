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
import { GiFeather } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <TwitterIcon className={styles.twitterIcon}/>
      <SidebarOption active Icon={AddHomeIcon} text={<span className={styles.text}>Home</span>}/>
      <SidebarOption Icon={SearchIcon} text={<span className={styles.text}>Explore</span>}/>
      <SidebarOption Icon={NotificationsNoneIcon} text={<span className={styles.text}>Notifications</span>}/>
      <SidebarOption Icon={MailOutlineIcon} text={<span className={styles.text}>Messages</span>}/>
      <SidebarOption Icon={BookmarkBorderIcon} text={<span className={styles.text}>Bookmarks</span>}/>
      <SidebarOption Icon={LowPriorityIcon} text={<span className={styles.text}>Twitter Blue</span>}/>
      <SidebarOption Icon={PermIdentityIcon} text={<span className={styles.text}>Profile</span>}/>
      <SidebarOption Icon={MoreHorizIcon} text={<span className={styles.text}>More</span>}/>
      {/* <SidebarOption active Icon={GiFeather} text={<span className={styles.text}>Tweet</span>} /> */}
      <Button variant="outlined" className={styles.sidebar_Tweet}>Tweet</Button>
    </div>
  )
}

export default Sidebar