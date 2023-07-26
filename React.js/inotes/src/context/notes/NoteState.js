import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const data=[
        
          {
            "_id": "64c00946cff6261790419ae2",
            "user": "64b40a9511c9b360a4622664",
            "title": "Testing a Note",
            "description": "Adding a testing note  BDSA AIDA 'D ISA  DSADJ L DSAD K IDHA D; ;hd oij dfas 'hd /FBA D/LS  FIJDFLS D;'A D'ad F F' JF' P ASFNK CV'/[ FOFJSDL FAJFSD USACVS A  JFDS SF  JFA  SFD  FOASS' 'A  ]",
            "tag": "testing",
            "date": "2023-07-25T17:41:26.085Z",
            "__v": 0
          },
          {
            "_id": "64c0097acff6261790419ae5",
            "user": "64b40a9511c9b360a4622664 ",
            "title": "Second testing note",
            "description": "Adding a testing note lorem32jdlwqjdowqjdowqjojdwqdjwqjdwqje;djqw;d;wqjdlwahf fweodfoiwejfdoijweodf fwejdfpowejdf' fwejfdl dfwejdo  fdwedfhiwsdj odfwqojdw wjdfjf owdfiwejdf  df'adf;i f'wjnsad' 'DDWS Y ak jsd' D   dasdh ' D DP ",
            "tag": "testing",
            "date": "2023-07-25T17:42:18.002Z",
            "__v": 0
          },
          {
            "_id": "64c0097acff6261790419ae5",
            "user": "64b40a9511c9b360a4622664 ",
            "title": "Second testing note",
            "description": "Adding a testing note lorem32jdlwqjdowqjdowqjojdwqdjwqjdwqje;djqw;d;wqjdlwahf fweodfoiwejfdoijweodf fwejdfpowejdf' fwejfdl dfwejdo  fdwedfhiwsdj odfwqojdw wjdfjf owdfiwejdf  df'adf;i f'wjnsad' 'DDWS Y ak jsd' D   dasdh ' D DP ",
            "tag": "testing",
            "date": "2023-07-25T17:42:18.002Z",
            "__v": 0
          },
        
          {
            "_id": "64c00946cff6261790419ae2",
            "user": "64b40a9511c9b360a4622664",
            "title": "Testing a Note",
            "description": "Adding a testing note  BDSA AIDA 'D ISA  DSADJ L DSAD K IDHA D; ;hd oij dfas 'hd /FBA D/LS  FIJDFLS D;'A D'ad F F' JF' P ASFNK CV'/[ FOFJSDL FAJFSD USACVS A  JFDS SF  JFA  SFD  FOASS' 'A  ]",
            "tag": "testing",
            "date": "2023-07-25T17:41:26.085Z",
            "__v": 0
          },
          {
            "_id": "64c0097acff6261790419ae5",
            "user": "64b40a9511c9b360a4622664 ",
            "title": "Second testing note",
            "description": "Adding a testing note lorem32jdlwqjdowqjdowqjojdwqdjwqjdwqje;djqw;d;wqjdlwahf fweodfoiwejfdoijweodf fwejdfpowejdf' fwejfdl dfwejdo  fdwedfhiwsdj odfwqojdw wjdfjf owdfiwejdf  df'adf;i f'wjnsad' 'DDWS Y ak jsd' D   dasdh ' D DP ",
            "tag": "testing",
            "date": "2023-07-25T17:42:18.002Z",
            "__v": 0
          },
          {
            "_id": "64c0097acff6261790419ae5",
            "user": "64b40a9511c9b360a4622664 ",
            "title": "Second testing note",
            "description": "Adding a testing note lorem32jdlwqjdowqjdowqjojdwqdjwqjdwqje;djqw;d;wqjdlwahf fweodfoiwejfdoijweodf fwejdfpowejdf' fwejfdl dfwejdo  fdwedfhiwsdj odfwqojdw wjdfjf owdfiwejdf  df'adf;i f'wjnsad' 'DDWS Y ak jsd' D   dasdh ' D DP ",
            "tag": "testing",
            "date": "2023-07-25T17:42:18.002Z",
            "__v": 0
          },
        
      ]
    const [notes, setNotes]=useState(data);
    return(
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;