import { Redirect, Route } from "react-router-dom"


export default function PrivateRouter({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <Route {...rest} render={(props) => (
      !user ?
        <Component {...props} />
        : <Redirect to={`/`} />
    )} />
  )
}