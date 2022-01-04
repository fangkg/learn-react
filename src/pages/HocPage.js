import React, { Component } from "react";

const foo = Cmp => props => {
    return (
        <div className="border">
            <Cmp {...props}/>
        </div>
    )
}

function Child(props) {
    return <div>
        child-{props.name}
    </div>
}

const res = foo(foo(Child)("tt"))


@foo
class ClassChild extends Component {
    render() {
        return <div>
            child-{this.props.name}
        </div>
    }
}


export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Foo name="Foo"/>
                <ClassChild name="foo2"/>
            </div>
        )
    }
}



