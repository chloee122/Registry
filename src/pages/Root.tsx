import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
