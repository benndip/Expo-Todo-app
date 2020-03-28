import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";
import styles from './Udemy.styles'

export default function Udemy(){

    
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals((currentGoals)=>[...currentGoals,{id: Math.random().toString() , value: enteredGoal }]);
        console.log(courseGoals);
        setmodalVisible(false);
    };
    const removeGoalHandler = (goalId) =>{
        setCourseGoals((currentGoals) =>{
            return currentGoals.filter((goal) => goal.id !== goalId);
        })
    };

    const cancelGoalAdditionHandler = () => {
        setmodalVisible(false);
    };
    return(
        <View style={styles.container}>
            <Button title="Add a new Goal" onPress={()=>setmodalVisible(true)} />
            <GoalInput
                visible={modalVisible}
                onPress={addGoalHandler}
                onPressCancel={cancelGoalAdditionHandler}
            />
            <FlatList 
                showsVerticalScrollIndicator={false}
                keyExtractor={(item,index)=>item.id}
                data={courseGoals}
                renderItem={(itemData)=>(
            <GoalItem 
                id={itemData.item.id}
                title={itemData.item.value}
                onPress={removeGoalHandler}

            />
                )}
             />
        </View>
    )
}
