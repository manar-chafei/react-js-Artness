import React ,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import {client} from '../client';
import MasonryLayout from './MasonryLayout';
import Search from './Search';
import Spinner from './Spinner'
import { feedQuery, searchQuery } from '../utils/data';


const Feed = () => {
    const [pins, setPins] = useState();
    const [loading, setLoading] = useState(true);
    const {categoryId}=useParams();

    useEffect(() => {
        if (categoryId) {
          setLoading(true);
          const query = searchQuery(categoryId);
          client.fetch(query).then((data) => {
            setPins(data);
            setLoading(false);
          });
        } else {
          setLoading(true);
    
          client.fetch(feedQuery).then((data) => {
            setPins(data);
            setLoading(false);
          });
        }
      }, [categoryId]);
      const ideaName = categoryId || 'new';
      if (loading) {
        return (
        <Spinner message="We are adding new artistic ideas to your feed!"/>
   )
      } return (
        <div>
          {pins && (
            <MasonryLayout pins={pins} />
          )}
        </div>
      )
    };

export default Feed;
