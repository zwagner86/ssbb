import React from 'react'

class Footer extends React.Component {
    render() {
        const date = new Date();
        const currentYear = date.getFullYear();

        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/ssbleacherbros" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.instagram.com/ssbleacherbros/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.youtube.com/channel/UCGqH-SUOFNSPdeN460RRowg" className="icon alt fa-youtube"><span className="label">YouTube</span></a></li>
                    <li><a href="mailto:ssbleacherbros@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Copyright {currentYear} - South Side Bleacher Bros</li>
                </ul>
            </section>
        )
    }
}

export default Footer
