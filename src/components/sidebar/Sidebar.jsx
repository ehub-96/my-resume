import React, {useState} from 'react'
import EhubIcon from '../../assets/ehub-icon.png'
import navbar_data from '../data/navbar.json'
const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('about')

    const handleLink =(id)=>{
        let currentId = document.getElementById(id);
        let lastId = document.getElementById(activeLink);
       
        lastId.className='nav-link'
        setActiveLink(id) 
        currentId.className='nav-link active'
    } 

    return (
        <>
        <div className="col fixed-top">
            <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <img src={EhubIcon} className="btn-icon"/>
            </button>
        </div>
        <div className="offcanvas offcanvas-start side-bar" data-bs-scroll="true"  tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <div className="col">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Erik Hub</h5>
                </div>
                
                <button type="button" className="btn text-reset btn-close-sidebar" data-bs-dismiss="offcanvas" aria-label="Close"><img src={EhubIcon} className="btn-icon"/></button>
                
            </div>
            <div className="offcanvas-body">
                <ul className='sidebar-element'>
                    {
                        navbar_data.map(e=>{
                            return(
                                <li className="nav-item" key={e.id}>
                                    <a className="nav-link" id={e.id} href={e.link}  onClick={ () => handleLink(document.activeElement.id)}>{e.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
        </div>
        </>
        
    )
}

export default Sidebar