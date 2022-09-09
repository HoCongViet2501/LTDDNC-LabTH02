import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';

const App = () => {

  const [text, setText] = useState('');
  return (
    <ScrollView>
      <View>
        <Text>Example 1 - Hello me app</Text>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10
        }}
        placeholder="You can type in me"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button
        title="Submit"
        color="#2196F3"
        accessibilityLabel="Learn more about this purple button"
      />
      <View>
        <Text style={{ padding: 42, fontSize: 30 }}>
          {text}
        </Text>
      </View>

    </ScrollView>
  );
}

export default App;
