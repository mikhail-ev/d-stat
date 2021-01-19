import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from './lib';
import styled from 'styled-components';


const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  const [showEditor, setShowEditor] = React.useState(true)

  function refreshEditor() {
    setShowEditor(false)
    setTimeout(() => setShowEditor(true), 1000)
  }

  return (
    <Wrapper>
      {showEditor && <CKEditor
        editor={ClassicEditor}
        data={value}
        onError={(...args) => {
          debugger
          console.log(...args)
        }}
        onReady={(editor) => {
          console.log(editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({target: {name, value: data}});
        }}
      />}
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
