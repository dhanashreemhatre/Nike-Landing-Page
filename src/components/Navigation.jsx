function showMenu(){
   console.log("clicked")
}
const Navigation=()=>{
    return (
        <nav>
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li>Menu</li>
                    <li>location</li>
                    <li>About</li>
                    <li>Contact</li>
                   
                </ul>
                <img src="images/menu.png" alt="" className="menu" />
                <button onClick={showMenu}>Login</button>
            </nav>
    )
}
export default Navigation;