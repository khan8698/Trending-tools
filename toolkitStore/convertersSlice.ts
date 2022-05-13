import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JsonFormArray } from '../data/JsonFormData';
// Define a type for the slice state
interface ConvertersState {
  activeTool: number;
  toolName: string;
}

// Define the initial state using that type
const initialState: ConvertersState = {
  activeTool: JsonFormArray[0].id,
  toolName: JsonFormArray[0].toolName
};

export const convertersSlice = createSlice({
  name: 'converters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActiveTool: (state, action: PayloadAction<number>) => {
      state.activeTool = action.payload;
    },
    setToolName: (state, action: PayloadAction<string>) => {
      state.toolName = action.payload;
    }
  }
});

export const { setActiveTool, setToolName } = convertersSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.converters.toolName;

export default convertersSlice.reducer;
