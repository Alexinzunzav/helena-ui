
import Button from '../components/Button'


export default {
    title: "Button",
    component: Button,
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'terciary'],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        state: {
            options: ['disabled', 'active'],
            control: { type: 'select' },
        },
    }
};


const Template = args => <Button {...args} /> ;


export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    btnLabel: 'Primary Button',
    size: 'md',
    state: 'active'
};

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    btnLabel: 'Secondary Button',
    size: 'md',
    state: 'active'
};

export const Terciary = Template.bind({})
Terciary.args = {
    variant: 'terciary',
    btnLabel: 'Terciary Button',
    size: 'md',
    state: 'active'
};