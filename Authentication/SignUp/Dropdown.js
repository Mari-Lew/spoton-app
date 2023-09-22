import React, { useState,useRef } from 'react';
import {
  View,Text, TouchableOpacity, Modal, FlatList,StyleSheet,
} from 'react-native';



const Dropdown = ({ items, selectedItem, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text>{selectedItem.label}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.dropdownContent}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => {
                    onSelect(item);
                    setIsOpen(false);
                  }}>
                  <Text style={styles.listItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownContent: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  listItem: {
    alignItems: 'center', // Center items horizontally within the listItem
    paddingVertical: 10,
  },
  listItemText: {
    fontSize: 20,
  },
});

export default Dropdown;
