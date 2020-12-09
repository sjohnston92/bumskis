import React, { useState, useContext } from "react";
import axios from "axios";

import { AuthConsumer, AuthContext } from "../providers/AuthProvider";

const PostForm = (props) => {
  const { user } = useContext(AuthContext);
  //Add Post fields here to create state
};
