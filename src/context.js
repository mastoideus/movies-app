/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-useless-return */
import {
  createContext, useContext, useState,
} from 'react';

const FavContext = createContext();

export const FavProvider = (props) => {
  const [favItems, setFavItems] = useState([]);
  const [term, setTerm] = useState('');

  const onTransportData = (data) => {
    setTerm(data);
  };

  const favMovieAdd = (item) => {
    let copyFavItems = [...favItems];
    const existingItem = copyFavItems.find((movie) => movie.id === item.id);
    if (existingItem) {
      return;
    }
    copyFavItems = [...favItems, item];
    setFavItems(copyFavItems);
  };

  const favMovieRemove = (id) => {
    const copyFavItems2 = [...favItems];

    const removedList = copyFavItems2.filter((movie) => movie.id !== id);

    setFavItems(removedList);
  };

  return (
    <FavContext.Provider value={{
      favMovieAdd, favMovieRemove, favItems, onTransportData, term,
    }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export const useGlobalContext = () => useContext(FavContext);
