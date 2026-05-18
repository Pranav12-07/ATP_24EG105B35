import React from "react";

function UserCounter({count}) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-xl">
        Total Users Added: {count}
      </h2>
    </div>
  )
}

export default UserCounter;
