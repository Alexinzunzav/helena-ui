import TextInput from "../components/TextInput";

export default {
    title: "TextInput",
    component: TextInput,
    argTypes: {
        labelText: {
            options:['Label'],
            control: 'text'
        },
        id: {
            options:[''],
            control: 'text'
        },
        name: {
            options:[''],
            control: 'text'
        },
        placeholderText: {
            options:['Placeholder'],
            control: { type: 'text' }
        },
        helpText: {
            options:['Help text'],
            control: { type: 'text' }
        },
        state: {
            options: ['disabled', 'default'],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
    }
};

const Template = args => <TextInput {...args} />

export const PrimaryTextInput = Template.bind({})
PrimaryTextInput.args = {
    labelText: 'Label',
    id: '',
    name: '',
    placeholderText: 'Placeholder',
    helpText: 'Help text',
    state: 'default'
};