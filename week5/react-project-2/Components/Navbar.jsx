function NavBar(){
    return (
        <div className="flex justify-between bg-gray-300 px-10">
            <h1 className="text-center">LOGO</h1>
            <ul className="flex gap-10 p-5">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Register</a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar