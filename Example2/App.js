import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, IconButton, Stack, Text, TextInput } from "@react-native-material/core";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState('');
  return (
    <Stack spacing={6} style={{ margin: 16 }}>
      <Text style={{ margin: 28, fontWeight: 'bold' }}>
        Hello User
      </Text>
      <TextInput
        label="Username"
        variant="outlined"
        trailing={props => (
          <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
        )}
      />
      <TextInput
        label="Password"
        variant="outlined"
        trailing={props => (
          <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
        )}
      />
      <Button title="Send" trailing={props => <Icon name="send" {...props}
        onPress={text=>setText(text)}
      />} />
      
      <Text>
        {text}
      </Text>
    </Stack>
  );
}
