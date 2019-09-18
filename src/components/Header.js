import React from 'react'

class Header extends React.Component {
    render() {
        const {
            isIndexPage
        } = this.props;

        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-microphone"></span>
                    <h1>South Side Bleacher Bros</h1>
                    <p>Talking all things sports, but primarily the Chicago Cubs!</p>
                    <ul className="actions">
                        <li><a href={(isIndexPage) ? '#one' : '/'} className="button scrolly">{(isIndexPage) ? 'Listen' : 'Home'}</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
