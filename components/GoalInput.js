import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({
  textInput,
  setTextInput,
  setListGoals,
  showModal,
  setShowModal,
}) => {
  const handleInput = (enteredText) => {
    setTextInput(enteredText);
  };

  const addGoal = () => {
    if (textInput !== '')
      setListGoals((currentGoals) => [
        ...currentGoals,
        { text: textInput, key: Math.random().toString() },
      ]);

    setTextInput('');
    closeModal();
  };
  const closeModal = () => setShowModal(false);
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/splash.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal 😎"
          onChangeText={handleInput}
          value={textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    marginRight: 8,
    padding: 20,
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default GoalInput;
