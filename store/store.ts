import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    lastTenVisitedProfiles: [],
    profileForDetail: {},
    searchValue: '',
  },
  reducers: {
    setCharacters(state, action:PayloadAction<any>) {
      state.characters = action.payload;
    },

    addProfileToVisited(state: any, action: PayloadAction<any>) {
        const profile = action.payload;

        const profileIndex =  state.lastTenVisitedProfiles.findIndex((p: any) => p.id === profile.id);

        if(profileIndex < 0){
            state.lastTenVisitedProfiles.unshift(action.payload);
        }
        else {
            state.lastTenVisitedProfiles.splice(profileIndex, 1);
            state.lastTenVisitedProfiles.unshift(action.payload);
        };

        if(state.lastTenVisitedProfiles.length > 10){
          state.lastTenVisitedProfiles.length = 10;
        }
      },
    
      setProfileForDetail(state: any, action: any){
        state.profileForDetail = action.payload;
      },

      setSearchValue(state: any, action: any){
        state.searchValue = action.payload;
     }
  },
});

const reducer  = {
  [charactersSlice.name]: charactersSlice.reducer,
}

// config the store
const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// export default the store
export default store;

export const selectCharactersState = (state: any) => state.characters;

// export the action
export const charactersAction = charactersSlice.actions;
