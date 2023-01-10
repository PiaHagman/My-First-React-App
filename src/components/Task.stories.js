import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task", //how to refer to the component in the sidebar of the Storybook app
};

const Template = (args) => <Task {...args} />;
//3 test states of our task
export const Default = Template.bind({}); //Template.bind({}) is a standard JavaScript technique for
//making a copy of a function. We use this technique to allow each
//exported story to set its own properties, but use the same implementation.
Default.args = {
  //Arguments or args for short, allow us to live-edit our components with the controls
  //addon without restarting Storybook. Once an args value changes, so does the component.
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
