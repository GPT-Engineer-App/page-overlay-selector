import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Select, useDisclosure } from "@chakra-ui/react";
import { FaMousePointer } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedElement, setSelectedElement] = useState(null);
  const [labelType, setLabelType] = useState("");
  const [labelName, setLabelName] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll("body *");

    const mouseOverHandler = (e) => {
      e.stopPropagation();
      e.target.classList.add("highlight");
    };

    const mouseOutHandler = (e) => {
      e.stopPropagation();
      e.target.classList.remove("highlight");
    };

    const clickHandler = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setSelectedElement(e.target);
      onOpen();
    };

    elements.forEach((el) => {
      el.addEventListener("mouseover", mouseOverHandler);
      el.addEventListener("mouseout", mouseOutHandler);
      el.addEventListener("click", clickHandler);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseover", mouseOverHandler);
        el.removeEventListener("mouseout", mouseOutHandler);
        el.removeEventListener("click", clickHandler);
      });
    };
  }, [onOpen]);

  const handleSave = async () => {
    const data = {
      type: labelType,
      name: labelName,
      html: selectedElement.outerHTML,
    };

    // Example POST request (replace with actual API endpoint)
    const response = await fetch("https://api.example.com/save-element", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Element saved successfully");
    } else {
      console.error("Failed to save element");
    }

    onClose();
  };

  return (
    <>
      <Box p={5}>
        <h1>Welcome to the Demo Page</h1>
        <p>This is a paragraph to demonstrate the selection feature. Hover over any element and click to label it.</p>
        <Button leftIcon={<FaMousePointer />} colorScheme="blue" onClick={onOpen}>
          Select Element
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select and Label Element</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Select placeholder="Select type" onChange={(e) => setLabelType(e.target.value)}>
                <option value="text/variable">Text/Variable</option>
                <option value="section/include">Section/Include</option>
              </Select>
            </FormControl>
            {labelType && (
              <FormControl mt={4}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter name" onChange={(e) => setLabelName(e.target.value)} />
              </FormControl>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
