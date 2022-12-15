import {NbAuthService} from "@nebular/auth";

export function initApp(auth: NbAuthService) {
  return () => auth.authenticate('username', {});
}

