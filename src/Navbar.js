import {Link} from 'react-router-dom'
function Navbar({title, topics}){
    let listItems = topics.map((item, ii) => {
        return (
            <li className='nav-item' key={ii}>
                <Link to={`/news/${item}`} className="nav-link">{item}</Link>
            </li>
        )
    })
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className={"navbar-brand boldYellowText"} href="#">React Fundamentals: {title}</a>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    {listItems}
                    <li className='nav-item'>
                        <Link to="/weatherapp" className='nav-link'>Weather</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;