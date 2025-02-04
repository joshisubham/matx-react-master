import React, { useState, useEffect, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { Stack, Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components"; // Assuming these are your custom components
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import the CSS for the editor

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const RichEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isMounted = useRef(false); // useRef for tracking mounting

  // Initialize on component mount and cleanup on unmount
  useEffect(() => {
    isMounted.current = true; // Set the mounted flag to true
    return () => {
      isMounted.current = false; // Cleanup the flag on unmount
    };
  }, []);

  // Function to handle editor state change
  const onEditorStateChange = (state) => {
    if (isMounted.current) {
      setEditorState(state); // Only update if the component is mounted
    }
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Editor", path: "/editor" }, { name: "Rich Text Editor" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Rich Text Editor">
          <div className="editor-container">
            <h2>Rich Text Editor</h2>
            {/* The Editor Component from React Draft Wysiwyg */}
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName="toolbar-class"
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              placeholder="Start typing here..."
            />
          </div>
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppRichEditor;
