import { Avatar } from '@mui/material'
import React from 'react'
import './SideBar.css'
function SideBar() {

    const recentItem=(topics)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">   #   </span>
                <p>{topics}</p>
      
        </div>
    )

    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt=""/>
                    <Avatar className="sidebar__avatar" />
                    <h2>Deepanshu Batra</h2>
                    <h4>deepanshu464@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                    <div className="sidebar__stat">
                            <p>Who viewed you </p>
                            <p className="sidebar__statNumber">2,534</p>
                    </div>
                    <div className="sidebar__stat">
                            <p>Views on Post </p>
                            <p className="sidebar__statNumber">2,438</p>
                    </div>
            </div>
            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('Software Engineering')}
                    {recentItem('Software Design')}
                    {recentItem('Software Developer ')}

            </div>
        </div>
    )
}

export default SideBar
