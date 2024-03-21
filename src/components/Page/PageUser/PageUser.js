import Header from '../../Header/Header';
import SideBar from '../../SideBar/Sidebar';
import UserPage from '../../User/UserPage';
import UserData from '../../UserData/UserData';

function PageUser() {
  return (
    <div>      
        <Header/>
        <SideBar/>
        <UserPage/>
        <UserData/>
    </div>
  );
}

export default PageUser;
