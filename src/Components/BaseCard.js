import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function BaseCard(props) {
    return (
        <div className="uk-accordion-title uk-align-center uk-card uk-card-default uk-width-1-2@m" uk-scrollspy="cls: uk-animation-slide-left; repeat: false" uk-grid="true">

            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                    <div className="uk-card-media-top">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{props.title}</h3>
                        <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                        <img className="uk-border-circle" width="40" height="40" src={props.avatar} />
                    </div>
                </div>
            </div>

            <div className="uk-card-body">
                <p>This is a summary of the post's content. Click anywhere on the card to see/hide full post. Click content card to see BaseCard again</p>
            </div>

        </div>
    )
}

export default BaseCard