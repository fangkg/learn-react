import Form, { Field } from "../components/rc-fild-form/index";
import Input from "../components/Input";
import { useEffect } from "react";

const nameRules = {
    required: true,
    message: "please input username"
}

const passwordRules = {
    required: true,
    message: 'please input password'
}

export default function RcFieldForm(props) {
    const [form] = Form.useForm();

    const onFinish = val => {

    }

    const onFinishFailed = val => {

    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <h3>RcFieldForm</h3>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Field name="username" rules={[nameRules]}>
                    <Input placeholder="input username"></Input>
                </Field>
            </Form>
        </div>
    )
}