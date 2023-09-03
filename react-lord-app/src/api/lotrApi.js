import React from "react";
import { config } from 'dotenv';

config()
const LOTR_API_URL = 'https://the-one-api.dev/v2';
const API_KEY = process.env.API_KEY; 

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${LOTR_API_URL}/character`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
