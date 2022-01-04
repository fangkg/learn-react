import Button from "../Button";

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context}/>;
    }
}