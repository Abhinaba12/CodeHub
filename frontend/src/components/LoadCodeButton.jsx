 import React from "react";
import { Button, Icon, Tooltip, Box } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const LoadCodeButton = ({ onLoadCode }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const fileContent = e.target.result;
        onLoadCode(fileContent); // Pass the loaded code content to the onLoadCode function
      };
      fileReader.readAsText(file);
    } catch (error) {
      console.error("Error while reading file:", error);
    }
  };

  return (
    <Tooltip label="Load Code" aria-label="Load Code" placement="bottom">
      <Box as="span" width="24px" height="24px"> {/* Wrap the button in a Box */}
        <input
          type="file"
          id="fileInput"
          accept=".txt,.js,.jsx,.java,.py"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Button
          onClick={() => document.getElementById("fileInput").click()}
          colorScheme="blue"
          variant="outline"
          size="sm"
          style={{ transition: "background-color 0.3s, color 0.3s" }} // Transition effect
          _hover={{color: "gray" }} // Hover effect
        >
          <Icon as={FaUpload} />
        </Button>
      </Box>
    </Tooltip>
  );
};

export default LoadCodeButton;
