import React, { useEffect, useState } from 'react';
import Viewer from 'react-office-viewer'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import "@cyntler/react-doc-viewer/dist/index.css";

const Office = () => {
  const fileObject = {}
  let params = {
    fileName:'name',  //PropTypes.string
    locale: 'en', // PropTypes.oneOf(['zh','en'])
    width: 100, //PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: 100, //PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    timeout: 10000, //PropTypes.number. Timeout limit of url request, only works on sheet/docx previewer.
  }

  /*
  <input type='file' onChange={this.getFileObject} />
  getFileObject = e => {
    this.setState({ fileObject: e.target.files[0] });
  }
  */
  const docs = [
    { uri: "https://url-to-my-pdf.pdf" }, // Remote file
    { uri: require("./example-files/pdf.pdf") }, // Local File
  ];

  const [selectedDocs, setSelectedDocs] = useState<File[]>([]);

  return <div>
    <Viewer file="http://xxxx" />
    <Viewer file={fileObject} />
    <Viewer file="http://xxxx" {...params} />

    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    <DocViewer
      documents={docs}
      initialActiveDocument={docs[1]}
      pluginRenderers={DocViewerRenderers}
    />

    <input
      type="file"
      accept=".pdf"
      multiple
      onChange={(el) =>
        el.target.files?.length &&
        setSelectedDocs(Array.from(el.target.files))
      }
    />
    <DocViewer
      documents={selectedDocs.map((file) => ({
        uri: window.URL.createObjectURL(file),
        fileName: file.name,
      }))}
      pluginRenderers={DocViewerRenderers}
    />


</div>
}

export { Office }
