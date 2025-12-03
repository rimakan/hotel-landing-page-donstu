import {
  type AsyncThunkPayloadCreator,
  createAsyncThunk as createReduxAsyncThunk,
} from '@reduxjs/toolkit';

export function createAsyncThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>
) {
  return createReduxAsyncThunk<Returned, ThunkArg>(typePrefix, payloadCreator);
}
