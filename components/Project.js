import React from 'react';
import { View, Text } from 'react-native';

const Project = ({ project }) => {
    return (
        <View>
            <Text>{project.name}</Text>
            <Text>{project.description}</Text>
            <Text>Manager: {project.manager}</Text>
            {project.tasks.map(task => <Task key={task.id} task={task} />)}
        </View>
    );
}

export default Project;
