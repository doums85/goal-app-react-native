import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [textInput, setTextInput] = useState();
  const [listGoals, setListGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setListGoals((currentList) =>
      currentList.filter((goal) => goal.key !== id)
    );
  };

  const handleModal = () => setShowModal(true);

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Button title="Add your Goal" color="#5e0acc" onPress={handleModal} />

        {showModal && (
          <GoalInput
            textInput={textInput}
            setTextInput={setTextInput}
            setListGoals={setListGoals}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}

        <FlatList
          data={listGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.key}
                text={itemData.item.text}
                onDeleteItem={handleDelete}
              />
            );
          }}
          style={styles.goalsContainer}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 3,
    color: 'red',
  },
});
