import s from './index.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Header({ children, onUpdateUser }) {

  const { user: currentUser } = useContext(UserContext);
  return (
    <header className={cn(s.header, 'cover')}>
      <div className="container">
        <div className={s.header__wrapper}>
          {children}

          <div className={cn(s.userInfoContainer)}>
            {currentUser?.email && <span>{currentUser?.email}</span>}
            {currentUser?.name && <span>{currentUser?.name}: {currentUser?.about}</span>}
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
