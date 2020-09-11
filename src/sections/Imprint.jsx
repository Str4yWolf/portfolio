import React, { useState } from 'react'

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
        Michael Woei Kang Huang<br />
        Angerburger Str. 1<br />
        27356 Rotenburg<br />
        Germany<br/>
        <br />
        <strong>Email:</strong> huang@mwkhuang.com<br/>
        <br />
        <a href="#">mwkhuang.com</a> is a personal web developer portfolio website.
    </div>


    return <div>
        { toggler }
        { showImprint && imprintContent }
    </div>    
}

export default Imprint