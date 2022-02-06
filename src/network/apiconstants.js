export const pageId = '1';
const apiConstant = {
  baseUrl: 'https://dev.modernart.writso.com/wp-json/wp/v2/',
  // baseUrl: 'https://modernartforsouthafrica.co.za/wp-json/wp/v2/',
  signin: 'auth',
  register: 'signup',
  dashboard: 'dashboard',
  questionProblem: 'cf7Submit',
  suggestion: 'cf7Submit',
  getUserProfile: 'users/me',
  updateUserProfile: 'users/me',
  delete: 'deleteme',
  changePassword: 'auth/password',
  myAdherence: 'adherence',
  adherenceSetting: 'adherence/setting',
  resetPassword: 'auth/forget',
  getPills: 'pills',
  inbox: 'inbox-data',
  viralLoad: 'viral-load',
  cd4: 'cd4',
  learnMore: 'learn-more/menu',
  learnMorePages: `learn-more/page/${pageId}`,
  notificationReminder: 'notification-reminder',
  viralLoadNextTest: 'viral-load-next-test',
  cd4countNextTest: 'cd4-next-test',
  logout: 'logout',
};

export default apiConstant;
