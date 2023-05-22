import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import {Box} from '@mui/material';
import { useEffect } from 'react';
const Editor=()=>{
    useEffect(()=>{
      const quillServer=  new Quill('#container',{ theme:'snow' })
    },[])
    return(
        <Box id='container'></Box>
    )
}
export default Editor;