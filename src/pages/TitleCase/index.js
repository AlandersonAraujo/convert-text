import React, { useState } from "react";
import { Clipboard, Keyboard } from "react-native";
import {
  Container,
  Header,
  ContainerButton,
  ButtonOption,
  TextButton,
  InputLabel,
  ContainerInput
} from "./styles";

export default function Case() {
  const [newText, setNewText] = useState("");

  convertTextTitleCase = () => {
    Keyboard.dismiss();
    const text = newText;
    const lowercasetext = text.toLowerCase();
    const arraycase = lowercasetext.split(" ");
    let uppercasetext = arraycase.map(
      item => item.charAt(0).toUpperCase() + item.slice(1)
    );
    const title = uppercasetext.toString().replace(/,/g, " ");
    setNewText(title);
  };

  readFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString();
    setNewText(clipboardContent);
  };

  return (
    <Container>
      <Header>
        <ContainerButton>
          <ButtonOption
            style={{ width: "100%" }}
            onPress={() => {
              convertTextTitleCase();
            }}
          >
            <TextButton>TITLE CASE</TextButton>
          </ButtonOption>
        </ContainerButton>
      </Header>
      <ContainerInput>
        <InputLabel
          autoCapitalize="none"
          autoCorrect={false}
          multiline={true}
          value={newText}
          onChangeText={text => setNewText(text)}
        />
      </ContainerInput>
      <ContainerButton style={{ marginTop: 15 }}>
        <ButtonOption
          onPress={() => {
            readFromClipboard();
          }}
        >
          <TextButton>PASTE</TextButton>
        </ButtonOption>
        <ButtonOption
          onPress={() => {
            Clipboard.setString(newText);
          }}
        >
          <TextButton>COPY</TextButton>
        </ButtonOption>
      </ContainerButton>
    </Container>
  );
}
