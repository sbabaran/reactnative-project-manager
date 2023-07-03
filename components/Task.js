import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Task = ({ task }) => {
    const [isComplete, setIsComplete] = useState(task.isComplete);

    const markComplete = () => {
        setIsComplete(true);
        // add logic to update completion status in database
    }

    return (
        <View>
            <Text>{task.name}</Text>
            <Text>{task.description}</Text>
            {isComplete 
                ? <Text>Completed</Text>
                : <Button title="Mark as complete" onPress={markComplete} />}
        </View>
    );
}

export default Task;
