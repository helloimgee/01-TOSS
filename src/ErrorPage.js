import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError;
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {/* error.statusText가 true일 경우 -> 아무 것도 반환 안 함 */}
      {/* error.statusText가 false일 경우 -> error.message 반환 */}
      {/* error.statusText 또는 error.message 반환 */}
    </div>
  );
}
