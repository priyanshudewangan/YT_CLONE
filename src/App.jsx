import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body'
import WatchPage from './Components/WatchPage'
import VideoContainer from './Components/VideoContainer'
import { Provider } from 'react-redux'
import store from './Utils/Store'
import SearchResults from './Components/SearchResults'


const appRoute = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <VideoContainer />
    },

    {
      path: "watch",
      element: <WatchPage />
    },

    {
      path:"search",
      element: <SearchResults/>
    }

  ]
}])

const App = () => {
  return (
    // we are using <Provider/> here because we have redux store otherwise we can simply write <routerProvider/>
    <Provider store={store}> 
      <RouterProvider router={appRoute}/>
    </Provider>
  )
}

export default App