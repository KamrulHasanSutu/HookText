
import {Outlet} from 'react-router-dom'

const HomeSharedProduct = () => {
  return (
        <div>
            <h2>Products</h2>
            <Outlet />
        </div>
  )
}

export default HomeSharedProduct;