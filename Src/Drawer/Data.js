import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Data = () => {
  const elt1 = useRef();
  const elt2 = useRef();
  const elt3 = useRef();
  const elt4 = useRef();
  const elt5 = useRef();
  const elt6 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');
  const [count, setCount] = useState(60);

  useEffect(() => {
    const Interval = setInterval(() => {
      if (count == 0) {
        clearInterval(Interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [count]);

  const otpValidation = () => {
    let otp = '123456';
    let enterotp = f1 + f2 + f3 + f4 + f5 + f6;
    if (enterotp == otp) {
      Alert.alert('OTP Matched');
    } else {
      Alert.alert('Wrong OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verifacation</Text>
      <View style={styles.otpView}>
        <TextInput
          ref={elt1}
          style={[
            styles.textView,
            {borderColor: f1.length >= 1 ? 'blue' : '#000'},
          ]}
          value={f1}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            setF1(txt);
            if (txt.length >= 1) {
              elt2.current.focus();
            } else if (txt.length < 1) {
              elt1.current.focus();
            }
          }}
        />
        <TextInput
          ref={elt2}
          style={[
            styles.textView,
            {borderColor: f2.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f2}
          onChangeText={txt => {
            setF2(txt);
            if (txt.length >= 1) {
              elt3.current.focus();
            } else if (txt.length < 1) {
              elt1.current.focus();
            }
          }}
        />
        <TextInput
          ref={elt3}
          style={[
            styles.textView,
            {borderColor: f3.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f3}
          onChangeText={txt => {
            setF3(txt);
            if (txt.length >= 1) {
              elt4.current.focus();
            } else if (txt.length < 1) {
              elt2.current.focus();
            }
          }}
        />
        <TextInput
          ref={elt4}
          style={[
            styles.textView,
            {borderColor: f4.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f4}
          onChangeText={txt => {
            setF4(txt);
            if (txt.length >= 1) {
              elt5.current.focus();
            } else if (txt.length < 1) {
              elt3.current.focus();
            }
          }}
        />
        <TextInput
          ref={elt5}
          style={[
            styles.textView,
            {borderColor: f5.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f5}
          onChangeText={txt => {
            setF5(txt);
            if (txt.length >= 1) {
              elt6.current.focus();
            } else if (txt.length < 1) {
              elt4.current.focus();
            }
          }}
        />
        <TextInput
          ref={elt6}
          style={[
            styles.textView,
            {borderColor: f6.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f6}
          onChangeText={txt => {
            setF6(txt);
            if (txt.length >= 1) {
              elt6.current.focus();
            } else if (txt.length < 1) {
              elt5.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resetbtn}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: `700`,
            color: count == 0 ? `blue` : `gray`,
          }}
          onPress={() => {
            setCount(60);
          }}>
          Reset
        </Text>
        {count !== 0 && (
          <Text style={{marginLeft: 10, fontSize: 20}}>
            {count + `secound`}
          </Text>
        )}
      </View>
      <TouchableOpacity
        disabled={
          f1 !== `` &&
          f2 !== `` &&
          f3 !== `` &&
          f4 !== `` &&
          f5 !== `` &&
          f6 !== ``
            ? true
            : false
        }
        onPress={() => otpValidation()}
        style={[
          styles.tocpt,
          {
            backgroundColor:
              f1 !== `` &&
              f2 !== `` &&
              f3 !== `` &&
              f4 !== `` &&
              f5 !== `` &&
              f6 !== ``
                ? `blue`
                : `#949494`,
          },
        ]}>
        <Text style={styles.btnotp}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 100,
    alignSelf: 'center',
    color: '#000',
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
  },
  textView: {
    width: 50,
    height: 50,
    borderWidth: 0.2,
    borderRadius: 6,
    margin: 4,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  tocpt: {
    borderWidth: 1,
    borderRadius: 20,
    width: `90%`,
    height: 50,
    alignItems: `center`,
    backgroundColor: `blue`,
    marginTop: 60,
    marginHorizontal: 20,
  },
  btnotp: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: `700`,
    textAlign: `center`,
    color: `#fff`,
  },
  resetbtn: {
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    marginTop: 20,
  },
});

export default Data;
