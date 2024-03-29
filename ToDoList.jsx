import React from 'react';
import 
{
    Pressable,
    View,
    Text,
    ScrollView
} from 'react-native';
import { styles } from './styles';

class ToDoList extends React.Component 
{
  render() 
  {
    return (
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable>
      </ScrollView>
    );
  }
}

export default ToDoList;
