import React from 'react'

const Header = () => {

    const navItems = [{ title: 'Home', href: '#' },
                    { title: 'About', href: '#about' },
                    { title: 'Projects', href: '#projects' },
                    { title: 'Social', href: '#social' }];


    const homePortal = <p className="home-portal">
        <a href="#">
            <span>M</span>
            <span>W</span>
            <span>K</span>
            <span>H</span>
        </a>
    </p>

    const navBar = <nav>
        { navItems.map(item => <a href={item.href} onClick={item.scroll}>{ item.title }</a> ) }
    </nav>

    return <header id="home" className="home">
        { homePortal }
        { navBar }
    </header>
}

export default Header