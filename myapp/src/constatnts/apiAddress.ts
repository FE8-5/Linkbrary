export const API_BASE_URL = process.env.VITE_BASE_API_URL;

export const ENDPOINTS = {
  // AUTH
  signUp: '/auth/sign-up',
  signIn: '/auth/sign-in',
  signUpWithProvider: '/auth/sign-up/{provider}',
  signInWithProvider: '/auth/sign-in/{provider}',

  // FOLDER
  getAllFolders: '/folders',
  addFolder: '/folders',
  getFolder: '/folders/{folderId}',
  deleteFolder: '/folders/{folderId}',
  updateFolder: '/folders/{folderId}',

  // LINK
  getLinksByFolder: '/folders/{folderId}/links',
  getAllLinks: '/links?page={page}&pageSize={pageSize}',
  addLink: '/links',
  deleteLink: '/links/{linkId}',
  setFavoriteLink: '/links/{linkId}',
  getFavorites: '/favorites',

  // OAUTH
  setOauthApps: '/oauthApps',

  // USER
  getAllUsers: '/users',
  checkDuplicateEmail: '/users/check-email',
};
