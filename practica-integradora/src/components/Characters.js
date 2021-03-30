import React from 'react';
function characters(props) {
    return (
        
            <div>
                <div class="uk-card uk-card-default">
                     <div class="uk-card-media-top">
                         <div className="uk-card-body">
                             <img src={props.characters.image} alt="" />
                            <div className="Borderdiv">
                             <h3 className="CHname">
                               {props.characters.name}
                            </h3>

                            <p>
                               {props.characters.status} - {props.characters.species}
                            </p>

                             <p>
                                Origin:
                             {props.characters.origin.name}
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            









        
       
    );
    
}
export default characters;