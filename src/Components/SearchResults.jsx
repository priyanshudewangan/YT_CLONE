import { useEffect, useState } from 'react'
import Videos from './Videos'
import { GoogleAPIkey, GoogleAPIkey2 } from '../Utils/Constant'
import Videos_Search from './Videos_Search';
import { useSelector } from 'react-redux';

const SearchResults = () => {

  const [videoIds, setVideoIds] = useState([]);
  const query = useSelector((store) => store.search.query)

  const fetchSearch = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=` + GoogleAPIkey);
    const json = await data.json();

    const ids = json.items.map(item => item);

    console.log(ids);
    setVideoIds(ids);
  };

  useEffect(() => {
    if(!query) return;
    fetchSearch();
  }, [query]);

  return (
    <div className='p-2'>
        <div className='p-3 w-full h-full '>
        <Videos_Search ids={videoIds} />
            
        </div>
    </div>
  );
};

export default SearchResults;