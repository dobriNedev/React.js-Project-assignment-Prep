import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

const request = requestFactory();

export const create = async (propertyId, comment) => {
  const result = await request.post(baseUrl, { propertyId, comment });

  return result;
};

export const getAll = async (propertyId) => {
  const searchQuery = encodeURIComponent(`propertyId="${propertyId}"`);
  const relationQuery = encodeURIComponent(`author=_ownerId:users`);
  const result = await request.get(
    `${baseUrl}?where=${searchQuery}&load=${relationQuery}`
  );

  const comments = Object.values(result);

  return comments;
};
