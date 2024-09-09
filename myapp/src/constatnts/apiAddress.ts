export const ENDPOINTS = {
  // AUTH
  signUp: '/auth/sign-up',
  signIn: '/auth/sign-in',
  signUpWithProvider: (provider: string) => `/auth/sign-up/${provider}`,
  signInWithProvider: (provider: string) => `/auth/sign-in/${provider}`,

  // FOLDER
  getAllFolders: '/folders',
  addFolder: '/folders',
  getFolder: (folderId: number) => `/folders/${folderId}`,
  deleteFolder: (folderId: number) => `/folders/${folderId}`,
  updateFolder: (folderId: number) => `/folders/${folderId}`,

  // LINK
  getLinksByFolder: (folderId: number) => `/folders/${folderId}/links`,
  getAllLinks: `/links`,
  addLink: '/links',
  deleteLink: (linkId: number) => `/links/${linkId}`,
  setFavoriteLink: (linkId: number) => `/links/${linkId}/favorite`,
  getFavorites: '/favorites',
  putLink: (linkId: number) => `/links/${linkId}`,

  // OAUTH
  setOauthApps: '/oauthApps',

  // USER
  getAllUsers: '/users',
  checkDuplicateEmail: '/users/check-email',
};
