import { lazy } from "react";

const Loading = lazy(() =>
  import("../components/Loadings/ThreeDots/ThreeDots.js")
);
const RegisterForm = lazy(() =>
  import("../components/Forms/RegisterForm/RegisterForm.js")
);
export { Loading, RegisterForm };
