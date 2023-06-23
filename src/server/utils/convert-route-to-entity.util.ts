const mapping: Record<string, string> = {
  bookmarks: 'bookmark',
  contents: 'content',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
