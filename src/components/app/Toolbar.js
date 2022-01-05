import ThemedButton from "./ThemedButton";

export default function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme}/>
        </div>
    )
}