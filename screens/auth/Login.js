import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fiels");
        setLoading(false);
        return;
      }

      setLoading(false);
      console.log("Login Data==>", { email, password });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text> {JSON.stringify({ name, email, password }, null, 4)} </Text> */}

      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />

      <Text style={styles.linkText}>
        Not a User Please <Text style={styles.link}>REGISTER</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
    width: "100%",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },

  linkText: {
    textAlign: "center",
  },

  link: {
    color: "red",
  },
});

export default Login;
