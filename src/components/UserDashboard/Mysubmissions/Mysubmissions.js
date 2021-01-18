import React from 'react'
import './mysubmissions.css'
export default function Mysubmissions() {
    return (
        <div className="submission-main-box">
            <div>
            <h4>Videos</h4>
            <div className="display-videos">
                <img src={require('../../../assets/images/contest.jpg')} alt="contest" />
                <img src={require('../../../assets/images/contest.jpg')} alt="contest"/>
                <img src={require('../../../assets/images/contest.jpg')} alt="contest"/>
                <img src={require('../../../assets/images/contest.jpg')} alt="contest"/>
            </div>
            
            </div>

            <div>
            <h4>Audios</h4>
            <div className="display-videos">
                <figure>
                        <audio
                            controls
                            src="/media/cc0-audio/t-rex-roar.mp3">
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                </figure>
                <figure>
                        <audio
                            controls
                            src="/media/cc0-audio/t-rex-roar.mp3">
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                </figure>
                <figure>
                        <audio
                            controls
                            src="/media/cc0-audio/t-rex-roar.mp3">
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                </figure>
                <figure>
                        <audio
                            controls
                            src="/media/cc0-audio/t-rex-roar.mp3">
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                </figure>
            </div>
            </div>
        </div>
    )
}
