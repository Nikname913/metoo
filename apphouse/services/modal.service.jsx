import React from 'react'
import { Modal, StyleSheet, View, Text } from 'react-native'

export default function ModalWindow(props) {

  const { inner, modalVisible, setModalVisible } = props

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{ inner }</Text>

            <View
              style={{ ...styles.openButton, backgroundColor: 'grey' }}
              onTouchStart={() => {
                setModalVisible(false)
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'absolute',
    width: 260,
    left: '50%',
    marginLeft: -130,
    top: '100%',
    marginTop: -300
  },
  modalView: {
    width: 260,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  openButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F194FF',
    borderRadius: 10,
    elevation: 2,
    width: 160,
    height: 50
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 2
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
    color: 'grey'
  },
});