import React, { useContext } from "react";

import UserContext from "../Contexts/UserContext";

const inputStyle = {
    padding: "8px 10px",
    fontSize: "1em"
};

const Form = (props) => {
    const { name, setName } = useContext(UserContext);

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>Name:</label>{" "}
                <input
                    style={inputStyle}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
        </div>
    );
};
export default Form;