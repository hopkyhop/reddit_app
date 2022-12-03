import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { meRequestAsync } from '../store/me/actions';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const token = useSelector<RootState, string>(state => state.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(meRequestAsync())
    }
  }, [token]);

  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)

  return {
    data, 
    loading,
  }
}
