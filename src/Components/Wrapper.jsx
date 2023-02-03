import React, { useState } from "react";

import UserContext from "../Contexts/UserContext";

const Wrapper = ({ children }) => {
    const [name, setName] = useState(" ");

    return (
        <UserContext.Provider
            value={{
                name,
                setName
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
export default Wrapper;