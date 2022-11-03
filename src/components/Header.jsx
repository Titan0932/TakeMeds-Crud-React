
import React from 'react'
import heart from './../images/heart.png'





const Header=()=>{

    const showMenu=(toggleID, navID) => {

        const toggle=document.getElementById(toggleID),
        nav=document.getElementById(navID)
    
        if(toggle && nav){
    
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
            })
        }
    }
    
    showMenu('nav-toggle','nav-menu')
    
    const navLink=document.querySelectorAll('.nav-link')
    
    function  linkAction(){
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')
        const navMenu =document.getElementById('nav-menu')
         navMenu.classList.remove('show')
    }
    
    navLink.forEach(n=> n.addEventListener('click',linkAction))

        return(   
            <>   
            <script href='/header.js' type='js/text'></script>
            <header class="l-header">
                <nav class="nav bd-grid">

                    <div class="nav-menu" id="nav-menu">
                        <ul class="nav-list"> 
                            <li class="nav-item"><a href="../home/" class="nav-link active"> Home </a></li>
                            <li class="nav-item"><a href="/about/" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="../myMeds/" class="nav-link">MyMeds</a></li>
                            <li class="nav-item"><a href="../stats/" class="nav-link">Stats</a></li>
                            <li class="nav-item"><a href="../profile/" class="nav-link">Profile</a></li>

                        </ul>
                    </div>

                    <div class='nav-btns'>
                        <div class="nav-toggle" id="nav-toggle">
                            <i class='bx bx-menu-alt-left highlight '></i>
                        </div>
                    </div>
                    

                    <div class='nav-logo'>
                        <a href="#" class="nav-logo"><img src={heart} class='logo' alt="main-logo" border="0"/></a>
                    </div>

                </nav>
            </header>
                
            </>        
        )

 }

 export default Header