import React from "react";
const Context = React.createContext();

class ClassComponent extends React.Component {
    // 或
    // static contextType = Context;
    componentDidMount() {
        let value = this.context;
    }

    componentDidUpdate() {
        let value = this.context;
    }

    componentWillUnmount() {
        let value = this.context;
    }

    render() {
        let value = this.context;
    }
}

// 挂载在class上的contextType属性可以赋值为Context对象。
// 该属性可以让使用this.context来获取最近Context上的值
ClassComponent.contextType = Context;