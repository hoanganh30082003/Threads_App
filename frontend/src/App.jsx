import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreatePost from "./components/CreatePost";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
function App() {
	const user = useRecoilValue(userAtom);
	const isAuthenticated = user && user._id;
	const { pathname } = useLocation();
	return (
		<Box position={"relative"} w='full'>
			<Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
				<Header />
				<Routes>
					<Route path='/' element={isAuthenticated ? <HomePage /> : <Navigate to='/auth' />} />
					<Route path='/auth' element={!isAuthenticated ? <AuthPage /> : <Navigate to='/' />} />
					{/* <Route path='/update' element={isAuthenticated ? <UpdateProfilePage /> : <Navigate to='/auth' />} /> */}

					<Route
						path='/:username'
						element={
							isAuthenticated ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
					<Route path='/:username/post/:pid' element={<PostPage />} />
					{/* <Route path='/chat' element={isAuthenticated ? <ChatPage /> : <Navigate to={"/auth"} />} /> */}
					{/* <Route path='/settings' element={isAuthenticated ? <SettingsPage /> : <Navigate to={"/auth"} />} /> */}
				</Routes>
			</Container>
		</Box>
	);
}

export default App;
