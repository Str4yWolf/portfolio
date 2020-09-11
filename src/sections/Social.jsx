import React from 'react'
import SocialItem from '../components/SocialItem'
import socialItems from '../assets/socialData.json'

const Social = () => {
    return <div id="social" className="social">
        { socialItems.map(item => <SocialItem
                                    href={item.href}
                                    src={item.src}
                                    alt={item.alt}
                                /> ) }
    </div>
}

export default Social