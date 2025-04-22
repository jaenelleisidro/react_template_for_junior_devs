import api from './../common/Api'

import { useEffect, useState} from 'react';

const Home = () => {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    (async ()=>{
      const res=await api.get('files');
      const files = res?.data?.data||[];
      setFiles(files);
      console.log(files)
    })();
  }, []);


    return <>
    <div className="item-container centercontent fillparent">
      {files.map((file)=><div>{file.name}</div>)}
    </div>
    </>;
  };
  
  export default Home;