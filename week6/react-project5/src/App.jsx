import React, { useState } from "react";
import Users from "./components/Users";
import Usercount from "./components/UserCount";

function App() {
  const [count,setCount]=useState(0)

  const handleAddUser=() => {
    setCount(prev=>prev+1)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        User Management
      </h1>

      <Usercount count={count} />

      <Users onAddUser={handleAddUser} />
    </div>
  )
}

export default App;