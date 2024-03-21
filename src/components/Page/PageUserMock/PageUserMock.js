import Header from '../../Header/Header';
import SideBar from '../../SideBar/Sidebar';
import UserPageMock from '../../UserMock/UserPageMock';
import UserDataMock from '../../UserDataMock/UserDataMock';

function PageUser() {
  return (
    <div>      
        <Header/>
        <SideBar/>
        <UserPageMock/>
        <UserDataMock/>
    </div>
  );
}

export default PageUser;
