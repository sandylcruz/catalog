import * as ListApiUtil from '../util/listApiUtil';

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const REMOVE_LIST = 'REMOVE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list,
});

export const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists,
});

export const removeList = (listId, userId) => ({
  type: REMOVE_LIST,
  list,
});

export const updateList = (list) => ({
  type: UPDATE_LIST,
  list,
});

export const createList = (list) => (dispatch) => {
  return ListApiUtil.createList(list).then((newList) => {
    dispatch(receiveList(newList));
  });
};

export const deleteList = (list) => (dispatch) => {
  ListApiUtil.removeList(list).then(() => {
    dispatch(removeList(list));
  });
};

export const editList = (list) => (dispatch) => {
  ListApiUtil.updateList(list).then((updatedList) => {
    dispatch(receiveList(list));
  });
};

export const fetchLists = () => (dispatch) =>
  ListApiUtil.fetchLists().then((fetchedLists) => {
    dispatch(receiveLists(fetchedLists));
  });
