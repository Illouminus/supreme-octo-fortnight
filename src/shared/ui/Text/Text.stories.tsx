import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title one',
    text: 'Text sdfsdf sdfdfh eder dfg',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Title one',
    text: 'Text sdfsdf sdfdfh eder dfg',
    theme: TextTheme.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title one',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text sdfsdf sdfdfh eder dfg',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title one',
    text: 'Text sdfsdf sdfdfh eder dfg',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title one',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text sdfsdf sdfdfh eder dfg',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
