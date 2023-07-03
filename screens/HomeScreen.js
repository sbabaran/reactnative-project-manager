import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
    const projects = useSelector(state => state.projects);

    return (
        <View>
            {projects.map(project => <Text key={project.id}>{project.name}</Text>)}
            <Button title="Create Project" onPress={() => navigation.navigate('CreateProjectScreen')} />
        </View>
    );
}

export default HomeScreen;
