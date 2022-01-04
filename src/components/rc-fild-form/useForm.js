import React, { useRef } from "react";

class FormStore {
    constructor() {
        this.store = {};
        this.fieldEnetities = [];
        this.callbacks = {};
    }

    registerEntity = entity => {
        this.fieldEnetities.push(entity);
        return () => {
            this.fieldEnetities = this.fieldEnetities.filter(item => item !== entity);
            delete this.store[entity.props.name];
        }
    };

    setCallback = callback => {
        this.callbacks = {
            ...this.callbacks,
            ...callback
        }
    };

    setFieldValue = () => {};

    setFieldsValue = newStore => {
        this.store = {
            ...this.store,
            ...newStore
        }

        this.fieldEnetities.forEach(entity => {
            const {name} = entity.props;

            Object.keys(newStore).forEach(key => {
                if(key === name) {
                    entity.onStoreChange();
                }
            })
        })
    };

    validate = () => {
        let err = [];
        this.fieldEnetities.forEach(entity => {
            const { name, rules } = entity.props;
            let value = this.getFieldValue(name);
            let rule = rules && rules[0];
            if(rule && rule.required && (value === undefined || value === "")){
                err.push({
                    [name]: rules.message,
                    value
                })
            }
        });
        return err;
    }

    submit = () => {
        let err = this.validate();
        const { onFinish, onFinishFailed } = this.callbacks;
        if(err.length == 0) {
            onFinish(this.getFieldsValue());
        } else if(err.length > 0) {
            onFinishFailed(err);
        }
    }

    getFieldValue = name => {
        return this.store[name];
    };

    getFieldsValue = () => {
        return this.store;
    };

    getForm() {
        return {
            registerEntity: this.registerEntity,
            setFieldValue: this.setFieldValue,
            setFieldsValue: this.setFieldsValue,
            getFieldValue: this.getFieldValue,
            submit: this.submit,
            setCallback: this.setCallback
        }
    }
}


export default function _useForm(form) {
    const formRef = useRef();
    if(!formRef.current) {
        if(form) {
            formRef.current = form;
        } else {
            const formStore = new FormStore();
            formRef.current = formStore.getForm();
        }
    }

    return [formRef.current];
}