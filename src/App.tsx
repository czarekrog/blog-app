import { MainLayout } from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { SignIn } from "./routes/SignIn/SignIn";
import { SignUp } from "./routes/SignUp/SignUp";
import { Post } from "./routes/Post/Post";
import { ForgotPassword } from "./routes/ForgotPassword/ForgotPassword";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./libs/firebase";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "./features/userSlice";
import getUserData from "./utils/getUserData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/post/:id", element: <Post /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const { uid, name } = await getUserData({ uid: user.uid });
        dispatch(signIn({ uid, name }));
      } else {
        dispatch(signOut());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
