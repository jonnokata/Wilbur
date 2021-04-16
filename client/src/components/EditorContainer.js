import React, { useEffect, useState } from "react";
import {
  Editor,
  WithEditorActions,
  EditorContext,
} from "@atlaskit/editor-core";
import _ from "lodash";
import { PageTitle } from "./PageTitle";
import styled from "styled-components";

const EditorContainer = (props) => {
  const [editorState, setEditorState] = useState({
    documentContent: "",
  });

  const handleChange = (actions) =>
    _.debounce(() => {
      actions.getValue().then((adf) => {
        // fetch('../', { adf })
        console.log(JSON.stringify(adf));
      });
    }, 1000);

  return (
    <EditorContext>
      <WithEditorActions
        render={(actions) => (
          <Editor
            contentComponents={<PageTitle></PageTitle>}
            value={editorState.documentContent}
            onChange={handleChange(actions)}
            appearance="full-width"
            allowFindReplace={true}
            allowExpand={{
              allowInsertion: true,
              allowInteractiveExpand: true,
            }}
            placeholder="G'day! Type away :)"
            placeholderHints={["Type / to insert content"]}
            allowDate={true}
            allowKeyboardAccessibleDatepicker={true}
            allowStatus={true}
            allowLayouts={true}
            allowPanel={true}
            allowBlockType={true}
            allowBreakout={true}
            allowTextColor={true}
            allowTables={{
              advanced: true,
              allowBackgroundColor: true,
              allowHeaderColumn: true,
              allowHeaderRow: true,
              allowMergeCells: true,
              allowNumberColumn: true,
              allowColumnSorting: true,
              stickToolbarToBottom: true,
              tableCellOptimization: true,
              stickyHeaders: true,
              stickyHeadersOptimization: true,
              initialRenderOptimization: true,
              mouseMoveOptimization: true,
            }}
          />
        )}
      ></WithEditorActions>
    </EditorContext>
  );
};

export { EditorContainer };
