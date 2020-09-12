import React, { useState } from 'react'
import personalData from '../assets/personalData.json'
import config from '../config/config'

const Imprint = () => {
    const [showImprint, setShowImprint] = useState(false)

    const toggler = <sub
        className="imprint-toggle"
        onClick={() => setShowImprint(!showImprint)}
        >
            Imprint
    </sub>
     
    

    const imprintContent = <div className="imprint-content">
        <strong>Website run by:</strong><br />
        { config.visiblePersonal.map((dataKey, key) => {
            return <React.Fragment key={key}>
                { personalData[config.lang][dataKey] }
                <br />
            </React.Fragment>
        }) }
        <br />
        <strong>Email:</strong> { personalData[config.lang]["email"]}<br/>
        <br />
        <a href="#">mwkhuang.com</a> is a personal web developer portfolio website.
    </div>


    return <div>
        { toggler }
        { showImprint && imprintContent }
    </div>    
}

export default Imprint