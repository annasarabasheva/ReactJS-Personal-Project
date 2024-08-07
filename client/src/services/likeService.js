import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';

export const create = async (artID, userID) => {
    const newLike = await request.post(baseUrl, { artID, userID });
    return newLike;
};

export const getAll = async (artID) => {
    const query = encodeURIComponent(`artID="${artID}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    return result;
};

export const getUserLike = async (artID, userID) => {
    const query = encodeURIComponent(`artID="${artID}" AND userID="${userID}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    return result;
};


export const getLikedPosts = async (userID) => {
    const response = await fetch(`${baseUrl}?where=_ownerId%3D%22${userID}%22`);
    if (!response.ok) {
        throw new Error(`Failed to fetch liked posts: ${response.statusText}`);
    }
    return await response.json();
};