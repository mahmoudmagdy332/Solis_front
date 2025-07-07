// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { settingType } from '../utils/types/types';

const initialState:settingType={ 
    loading:false,
    setting: null,
    header_pages: [],
    footer_pages: [],
    footer_products:[],
    footer_markets:[],
    footer_careers: [],
    footer_projects:[],
    main_categories:[],
    footer_blogs:[],
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    createSetting: (state, action) => {
      state.setting = action.payload.setting;
      state.header_pages = action.payload.header_pages;
      state.footer_pages = action.payload.footer_pages;
      state.footer_products = action.payload.footer_products;
      state.footer_markets = action.payload.footer_markets;
      state.footer_careers = action.payload.footer_careers;
      state.footer_projects = action.payload.footer_projects;
      state.main_categories=action.payload.main_categories;
      state.footer_blogs=action.payload.footer_blogs;
    },
    changeLoading: (state, action) => {
      console.log('action.payload',action.payload)
      state.loading = action.payload;
    }
  },
});

export const { createSetting, changeLoading } = settingSlice.actions;

export default settingSlice.reducer;

export const useSettingSliceSelector = useSelector.withTypes<RootState>()
