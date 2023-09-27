import Chip from '../components/Chip'

export default {
    title: "Chip",
    component: Chip,
    argTypes: {
        colorVariant: {
            options: ['yellow', 'blue', 'orange', 'green', 'pink', 'white'],
            control: { type: 'select' },
        }
    }
};

const Template = args => <Chip {...args} /> ;

export const PrimaryChip = Template.bind({})
PrimaryChip.args = {
    chipLabel: 'Chip',
    colorVariant: 'white'
};
