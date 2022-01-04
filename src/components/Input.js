import React from "react";

const Input = props => {
    return <input {...props}/>
}

const CustomizeInputFunc = () => (
    <div style={{padding: 10}}>
        <Input style={{outline: "none"}} value={value} {...props}/>
    </div>
)

class CustomizeInputClassCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {value="", ...otherProps} = this.props;
        return (
            <div style={{padding: 10}}>
                <Input style={{outline: "none"}} value={value} {...otherProps}/>
            </div>
        )
    }
}

export default CustomizeInputClassCom;