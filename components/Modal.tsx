import { ReactNode } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";

interface ModalProps {
  title: string;
  desc: string;
  isModalVisible: boolean;
  children?: ReactNode;
}

const ModalTemplate = ({ title, desc, isModalVisible, children }: ModalProps) => {
  if (!isModalVisible) return null;
  
  return (
    <Modal visible={isModalVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>

          <Text style={styles.modalDesc}>{desc}</Text>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDesc: {
    fontSize: 13,
    marginBottom: 18,
    color: "grey",
  },
});
export default ModalTemplate;