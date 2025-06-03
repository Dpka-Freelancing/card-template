import React from "react";

const Copyrights = ({ bckgnd }) =>{
    return(
        <div className="copy pt-2 pb-5 mb-3">
        <div className={`contain-template  ${bckgnd} cpy-right`}>
                <div className="container">
                    <div className="row">
                        <div className="copy-cmn">
                            <p>@2025 spotcard.in</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Copyrights