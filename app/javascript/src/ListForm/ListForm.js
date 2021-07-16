import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import AddFormInput from '../components/AddFormInput';
import AddNewButton from '../components/AddNewButton';
import { createList } from '../actions/listActions';
import { fetchLists } from '../util/listApiUtil';
import { selectUsersLists } from '../reducers/selectors';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListForm = React.memo(() => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  // const lists = useSelector(selectUsersLists);
  // console.log(lists);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const list = {
        title,
      };
      processForm(list);
      setTitle('');
    },
    [processForm, title]
  );

  const processForm = useCallback(
    (list) => {
      dispatch(createList(list));
    },
    [dispatch]
  );

  const updateTitle = useCallback((event) => {
    setTitle(event.currentTarget.value);

    [updateTitle];
  }, []);

  const useEffect = useCallback(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <AddFormInput
          onChange={updateTitle}
          placeholder="Write new list name..."
          value={title}
        ></AddFormInput>
        <AddNewButton>✓</AddNewButton>
      </InputContainer>
    </form>
  );
});

export default ListForm;
