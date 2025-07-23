import { baseURL } from "@/constants/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { GithubUserTypes } from "../../../types/githubUserTypes";

const actGetUser = createAsyncThunk(
  "users/actGetUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<GithubUserTypes[]>(`${baseURL}/users`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Failed to fetch users");
    }
  }
);

export default actGetUser;
