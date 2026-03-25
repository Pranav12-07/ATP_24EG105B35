function User(props){
    let { user }=props
    return (
        <div className="text-center p-5 shadow-2xl shadow-gray-300 ">
            <h2 className="text-3xl text-pink-300">{user.name}</h2>
            <h2>{user.email}</h2>
            <img className="block m-auto rounded-3xl mt-5" src={user.image} alt=""></img>
        </div>
    )
}
export default User